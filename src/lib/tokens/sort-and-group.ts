import type { FlatToken } from "@tokens/generated/tokens";

const FAMILY_TITLES: Record<string, string> = {
  "rounded-kz": "Rounded",
  "rounded-theme": "Rounded theme",
  "space-kz": "Spacing",
  "border-kz": "Border",
  "text-kz": "Text size",
  "leading-kz": "Line height",
  "font-kz": "Font weight",
  "blur-kz": "Blur",
  shadow: "Shadow",
  "paragraphspacing-kz": "Paragraph spacing",
  "letterspacing-kz": "Letter spacing",
};

const COLOR_PALETTE_ORDER = [
  "neutral",
  "esc",
  "group",
  "club",
  "red",
  "amber",
  "green",
  "blue",
  "purple",
  "alfa",
];

const THEME_GROUP_ORDER = [
  "background",
  "surface",
  "text",
  "border",
  "icon",
  "alfa",
];

/** Nome curto: rounded-kz/300 → rounded-kz-300 */
export function figmaShortName(name: string): string {
  if (name.startsWith("componentStyle/")) {
    return `component-${name.slice("componentStyle/".length).replace(/\//g, "-")}`;
  }
  return name.replace(/\//g, "-");
}

/** Referência estilo Figma: --rounded-kz-0 → $rounded-kz-0 */
export function tokenReference(cssVar: string): string {
  return `$${cssVar.slice(2)}`;
}

export function getScaleSortKey(name: string): number {
  const step = name.split("/").pop() ?? "";
  if (step === "full") return Number.POSITIVE_INFINITY;
  const n = Number(step);
  return Number.isNaN(n) ? 999_998 : n;
}

export function sortScaleTokens(tokens: FlatToken[]): FlatToken[] {
  return [...tokens].sort(
    (a, b) =>
      getScaleSortKey(a.name) - getScaleSortKey(b.name) ||
      a.name.localeCompare(b.name),
  );
}

function getColorPaletteKey(name: string): string {
  const parts = name.split("/");
  if (parts[0] === "color-kz" && parts[1]) return parts[1];
  if (parts[0] === "color-theme" && parts[1]) return parts[1];
  return parts[0] ?? name;
}

function paletteSortIndex(palette: string): number {
  const idx = COLOR_PALETTE_ORDER.indexOf(palette);
  return idx === -1 ? 100 + palette.charCodeAt(0) : idx;
}

function themeGroupSortIndex(name: string): number {
  const group = name.split("/")[1] ?? "";
  const idx = THEME_GROUP_ORDER.indexOf(group);
  return idx === -1 ? 100 : idx;
}

export function familyToTitle(familyKey: string): string {
  if (FAMILY_TITLES[familyKey]) return FAMILY_TITLES[familyKey];

  if (familyKey.startsWith("color-kz/")) {
    const palette = familyKey.split("/")[1] ?? familyKey;
    return palette.charAt(0).toUpperCase() + palette.slice(1);
  }

  if (familyKey.startsWith("color-theme/")) {
    const segment = familyKey.split("/")[1] ?? familyKey;
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  }

  if (familyKey.startsWith("typography/")) {
    return familyKey
      .replace("typography/", "")
      .split("/")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" · ");
  }

  if (familyKey.startsWith("shadow-")) {
    return "Shadow";
  }

  if (familyKey.startsWith("icon-size/")) {
    const size = familyKey.split("/")[1] ?? familyKey;
    return `Icon ${size.toUpperCase()}`;
  }

  const base = familyKey.replace(/-kz$/, "");
  return base.charAt(0).toUpperCase() + base.slice(1);
}

export function getFamilyKey(token: FlatToken): string {
  const parts = token.name.split("/");

  if (parts[0] === "color-kz" && parts.length >= 2) {
    return `color-kz/${parts[1]}`;
  }

  if (parts[0] === "color-theme" && parts.length >= 2) {
    return `color-theme/${parts[1]}`;
  }

  if (parts[0] === "typography" && parts.length >= 2) {
    return `typography/${parts[1]}`;
  }

  if (parts[0] === "icon-size" && parts[1]) {
    return `icon-size/${parts[1]}`;
  }

  return parts[0] ?? token.name;
}

export function groupTokensByFamily(tokens: FlatToken[]): { family: string; title: string; tokens: FlatToken[] }[] {
  const map = new Map<string, FlatToken[]>();

  for (const token of tokens) {
    const key = getFamilyKey(token);
    const list = map.get(key) ?? [];
    list.push(token);
    map.set(key, list);
  }

  const groups = [...map.entries()].map(([family, groupTokens]) => ({
    family,
    title: familyToTitle(family),
    tokens: sortScaleTokens(groupTokens),
  }));

  groups.sort((a, b) => {
    const aColor = a.family.startsWith("color-kz/");
    const bColor = b.family.startsWith("color-kz/");
    if (aColor && bColor) {
      return (
        paletteSortIndex(a.family.split("/")[1]!) -
        paletteSortIndex(b.family.split("/")[1]!)
      );
    }

    const aTheme = a.family.startsWith("color-theme/");
    const bTheme = b.family.startsWith("color-theme/");
    if (aTheme && bTheme) {
      return themeGroupSortIndex(a.family) - themeGroupSortIndex(b.family);
    }

    return a.family.localeCompare(b.family);
  });

  return groups;
}

/** Valor legível: 12px → 12 px */
export function formatTokenDisplayValue(token: FlatToken): string {
  if (token.aliasTo && token.cssValue.startsWith("var(")) {
    const resolved = token.value.startsWith("→") ? token.value.slice(2).trim() : token.value;
    const short = figmaShortName(resolved);
    return `→ ${short}`;
  }

  if (token.type === "COLOR" || token.type === "SHADOW" || token.type === "ICON_METRIC") {
    return token.cssValue;
  }

  if (token.type === "BOOLEAN") {
    return token.cssValue;
  }

  const raw = token.cssValue;
  const pxMatch = /^(-?\d+(?:\.\d+)?)px$/.exec(raw);
  if (pxMatch) {
    return `${pxMatch[1]} px`;
  }

  return raw;
}
