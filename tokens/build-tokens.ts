/**
 * Builds design tokens from Figma Variables export.
 * Source: tokens/figma-variables-2026-05-18.json
 *
 * Run: npm run tokens:build
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { figmaNameToCssVar } from "./lib/naming.js";

const TOKENS_DIR = dirname(fileURLToPath(import.meta.url));
const SOURCE_FILE = join(TOKENS_DIR, "figma-variables-2026-05-18.json");
const EFFECT_STYLES_FILE = join(TOKENS_DIR, "effect-styles.json");
const ICON_SPEC_FILE = join(TOKENS_DIR, "icon-spec.json");
const THEMES_SPEC_FILE = join(TOKENS_DIR, "themes-spec.json");
const OUT_DIR = join(TOKENS_DIR, "generated");

type EffectStylesFile = {
  shadows: { name: string; value: string }[];
};

type IconSpecFile = {
  sizes: {
    name: string;
    container: string;
    glyph: string;
    lineHeight?: string;
    figmaVariant: string;
  }[];
};

type ThemesSpecFile = {
  modes: { escritorio: string; group: string };
  club: { overrides: Record<string, string> };
};

type FigmaColor = { r: number; g: number; b: number; a: number };
type FigmaAlias = { type: "VARIABLE_ALIAS"; id: string };
type FigmaValue = number | boolean | FigmaColor | FigmaAlias;

type FigmaVariable = {
  id: string;
  name: string;
  description: string;
  resolvedType: "COLOR" | "FLOAT" | "BOOLEAN";
  variableCollectionId: string;
  valuesByMode: Record<string, FigmaValue>;
};

type FigmaCollection = {
  id: string;
  name: string;
  modes: { modeId: string; name: string }[];
  defaultModeId: string;
};

type FigmaExport = {
  variables: FigmaVariable[];
  collections: FigmaCollection[];
  exportedAt: string;
  pluginVersion: string;
};

export type TokenCollectionKind =
  | "primitive"
  | "semantic"
  | "component"
  | "breakpoint"
  | "effect"
  | "icon";

export type TokenResolvedType =
  | "COLOR"
  | "FLOAT"
  | "BOOLEAN"
  | "SHADOW"
  | "ICON_METRIC";

export type FlatToken = {
  name: string;
  cssVar: string;
  value: string;
  cssValue: string;
  type: TokenResolvedType;
  category: string;
  collection: TokenCollectionKind;
  collectionName: string;
  modeId: string;
  modeName: string;
  figmaId: string;
  aliasTo?: string;
  aliasCssVar?: string;
};

const SUPPORTED_PREFIXES = [
  "color-kz/",
  "color-theme/",
  "space-kz/",
  "rounded-kz/",
  "rounded-theme/",
  "border-kz/",
  "text-kz/",
  "leading-kz/",
  "font-kz/",
  "blur-kz/",
  "componentStyle/",
  "typography/",
  "paragraphspacing-kz/",
  "letterspacing-kz/",
] as const;

function isSupportedVariable(name: string): boolean {
  return SUPPORTED_PREFIXES.some(
    (prefix) => name.startsWith(prefix) || name === prefix.replace(/\/$/, ""),
  );
}

function nameToObjectPath(name: string): string[] {
  if (name.startsWith("componentStyle/")) {
    const rest = name.slice("componentStyle/".length);
    return ["component", ...rest.split("/")];
  }
  const segments = name.split("/");
  const [first, ...rest] = segments;
  const firstParts = first.includes("-") ? first.split("-") : [first];
  return [...firstParts, ...rest];
}

function getCategory(name: string): string {
  if (name.startsWith("color-kz") || name.startsWith("color-theme")) return "color";
  if (name.startsWith("space-kz")) return "spacing";
  if (name.startsWith("rounded-kz") || name.startsWith("rounded-theme")) return "radius";
  if (name.startsWith("border-kz")) return "border";
  if (
    name.startsWith("text-kz") ||
    name.startsWith("leading-kz") ||
    name.startsWith("font-kz") ||
    name.startsWith("typography/") ||
    name.startsWith("paragraphspacing-kz") ||
    name.startsWith("letterspacing-kz")
  ) {
    return "typography";
  }
  if (name.startsWith("blur-kz")) return "blur";
  if (name.startsWith("shadow-")) return "elevation";
  if (name.startsWith("icon-size/")) return "icons";
  if (name.startsWith("componentStyle/")) return "component";
  return "other";
}

function getCollectionKind(
  collectionName: string,
  variableName: string,
): TokenCollectionKind {
  if (variableName.startsWith("componentStyle/")) return "component";
  if (collectionName === "Foundation (kz)") return "primitive";
  if (collectionName === "Theme") return "semantic";
  if (collectionName === "Breakpoint") return "breakpoint";
  return "primitive";
}

function colorToCss(color: FigmaColor): string {
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  const a = color.a;

  if (a >= 1) {
    const hex = [r, g, b]
      .map((c) => c.toString(16).padStart(2, "0"))
      .join("");
    return `#${hex}`;
  }

  return `rgba(${r}, ${g}, ${b}, ${Number(a.toFixed(4))})`;
}

function floatNeedsPx(name: string): boolean {
  if (name.startsWith("font-kz/")) return false;
  const root = name.split("/")[0];
  if (root === "font-kz") return false;
  if (
    [
      "space-kz",
      "rounded-kz",
      "rounded-theme",
      "border-kz",
      "text-kz",
      "leading-kz",
      "blur-kz",
      "paragraphspacing-kz",
      "letterspacing-kz",
    ].includes(root)
  ) {
    return true;
  }
  if (name.startsWith("componentStyle/")) return true;
  if (name.startsWith("typography/")) return true;
  return false;
}

function floatToCss(value: number, name: string): string {
  if (!floatNeedsPx(name)) return String(value);
  return `${value}px`;
}

function booleanToCss(value: boolean): string {
  return value ? "true" : "false";
}

type ResolveResult = {
  cssValue: string;
  displayValue: string;
  aliasTo?: string;
  aliasCssVar?: string;
};

function resolveValue(
  variable: FigmaVariable,
  modeId: string,
  byId: Map<string, FigmaVariable>,
  cssVarById: Map<string, string>,
  visiting: Set<string> = new Set(),
): ResolveResult {
  const raw = variable.valuesByMode[modeId] ?? Object.values(variable.valuesByMode)[0];

  if (raw && typeof raw === "object" && "type" in raw && raw.type === "VARIABLE_ALIAS") {
    const target = byId.get(raw.id);
    if (!target) {
      return { cssValue: "initial", displayValue: "unresolved" };
    }
    if (visiting.has(target.id)) {
      return { cssValue: "initial", displayValue: "circular" };
    }
    const aliasCssVar = cssVarById.get(target.id) ?? figmaNameToCssVar(target.name);
    return {
      cssValue: `var(${aliasCssVar})`,
      displayValue: `→ ${target.name}`,
      aliasTo: target.name,
      aliasCssVar,
    };
  }

  if (variable.resolvedType === "COLOR" && raw && typeof raw === "object" && "r" in raw) {
    const css = colorToCss(raw as FigmaColor);
    return { cssValue: css, displayValue: css };
  }

  if (variable.resolvedType === "FLOAT" && typeof raw === "number") {
    const css = floatToCss(raw, variable.name);
    return { cssValue: css, displayValue: css };
  }

  if (variable.resolvedType === "BOOLEAN" && typeof raw === "boolean") {
    const css = booleanToCss(raw);
    return { cssValue: css, displayValue: css };
  }

  return { cssValue: "initial", displayValue: "—" };
}

function setNested(
  target: Record<string, unknown>,
  path: string[],
  value: string,
): void {
  let current = target;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i]!;
    if (!(key in current) || typeof current[key] !== "object") {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }
  current[path[path.length - 1]!] = value;
}

function buildNestedTokens(flat: FlatToken[]): Record<string, unknown> {
  const tree: Record<string, unknown> = {};
  for (const token of flat) {
    if (token.type === "BOOLEAN") continue;
    const path = nameToObjectPath(token.name);
    const literal =
      token.aliasTo && token.cssValue.startsWith("var(")
        ? token.cssValue
        : token.value;
    setNested(tree, path, literal);
  }
  return tree;
}

function loadIconSpecTokens(): FlatToken[] {
  const raw = readFileSync(ICON_SPEC_FILE, "utf8");
  const data = JSON.parse(raw) as IconSpecFile;
  const tokens: FlatToken[] = [];

  for (const size of data.sizes) {
    const metrics: { suffix: string; value: string }[] = [
      { suffix: "container", value: size.container },
      { suffix: "glyph", value: size.glyph },
    ];
    if (size.lineHeight) {
      metrics.push({ suffix: "line-height", value: size.lineHeight });
    }

    for (const metric of metrics) {
      const name = `${size.name}/${metric.suffix}`;
      tokens.push({
        name,
        cssVar: figmaNameToCssVar(name),
        value: metric.value,
        cssValue: metric.value,
        type: "ICON_METRIC",
        category: "icons",
        collection: "icon",
        collectionName: "Icon component ($icon)",
        modeId: "icon-spec",
        modeName: "Figma",
        figmaId: `icon-spec:${name}`,
      });
    }
  }

  return tokens;
}

function loadEffectShadowTokens(): FlatToken[] {
  const raw = readFileSync(EFFECT_STYLES_FILE, "utf8");
  const data = JSON.parse(raw) as EffectStylesFile;

  return data.shadows.map((shadow) => ({
    name: shadow.name,
    cssVar: figmaNameToCssVar(shadow.name),
    value: shadow.value,
    cssValue: shadow.value,
    type: "SHADOW" as const,
    category: "elevation",
    collection: "effect" as const,
    collectionName: "Effect styles",
    modeId: "effect",
    modeName: "Value",
    figmaId: `effect:${shadow.name}`,
  }));
}

function generateCss(flat: FlatToken[]): string {
  const primitives = flat.filter((t) => t.collection === "primitive");
  const semantic = flat.filter((t) => t.collection === "semantic");
  const component = flat.filter((t) => t.collection === "component");
  const breakpoint = flat.filter((t) => t.collection === "breakpoint");
  const effect = flat.filter((t) => t.collection === "effect");
  const icon = flat.filter((t) => t.collection === "icon");

  const sections: { title: string; tokens: FlatToken[] }[] = [
    { title: "Primitives (Foundation kz)", tokens: primitives },
    { title: "Semantic (Theme)", tokens: semantic },
    { title: "Component", tokens: component },
    { title: "Breakpoint (default mode)", tokens: breakpoint },
    { title: "Effect styles (box shadow)", tokens: effect },
    { title: "Icon component ($icon)", tokens: icon },
  ];

  const lines = [
    "/* Generated by tokens/build-tokens.ts — do not edit manually */",
    `/* Source: figma-variables-2026-05-18.json */`,
    "",
    ":root {",
  ];

  for (const section of sections) {
    if (section.tokens.length === 0) continue;
    lines.push(`  /* ${section.title} */`);
    for (const token of section.tokens.sort((a, b) =>
      a.cssVar.localeCompare(b.cssVar),
    )) {
      if (token.type === "BOOLEAN") continue;
      lines.push(`  ${token.cssVar}: ${token.cssValue};`);
    }
    lines.push("");
  }

  lines.push("}");
  return lines.join("\n").trimEnd() + "\n";
}

function generateThemesCss(
  data: FigmaExport,
  byId: Map<string, FigmaVariable>,
  cssVarById: Map<string, string>,
): { css: string; themeAware: string[] } {
  const spec = JSON.parse(readFileSync(THEMES_SPEC_FILE, "utf8")) as ThemesSpecFile;
  const themeCollection = data.collections.find((c) => c.name === "Theme");
  if (!themeCollection) {
    return { css: "", themeAware: [] };
  }

  const themeVars = data.variables.filter(
    (v) => v.variableCollectionId === themeCollection.id,
  );

  const groupOverrides = new Map<string, string>();
  const themeAware = new Set<string>();

  for (const variable of themeVars) {
    const escMode = spec.modes.escritorio;
    const groupMode = spec.modes.group;
    const escRaw = variable.valuesByMode[escMode];
    const groupRaw = variable.valuesByMode[groupMode];
    if (!escRaw || !groupRaw) continue;

    const escKey =
      typeof escRaw === "object" && "type" in escRaw && escRaw.type === "VARIABLE_ALIAS"
        ? escRaw.id
        : JSON.stringify(escRaw);
    const groupKey =
      typeof groupRaw === "object" && "type" in groupRaw && groupRaw.type === "VARIABLE_ALIAS"
        ? groupRaw.id
        : JSON.stringify(groupRaw);

    if (escKey !== groupKey) {
      const resolved = resolveValue(variable, groupMode, byId, cssVarById);
      groupOverrides.set(figmaNameToCssVar(variable.name), resolved.cssValue);
      themeAware.add(variable.name);
    }
  }

  for (const name of Object.keys(spec.club.overrides)) {
    themeAware.add(name);
  }

  const lines = [
    "/* Generated by tokens/build-tokens.ts — do not edit manually */",
    "/* Source: figma-variables Theme modes + tokens/themes-spec.json (club) */",
    "",
    "/* :root usa modo Escritório (tokens.css) */",
    "",
    '[data-theme="group"] {',
  ];

  for (const [cssVar, value] of [...groupOverrides.entries()].sort((a, b) =>
    a[0].localeCompare(b[0]),
  )) {
    lines.push(`  ${cssVar}: ${value};`);
  }
  lines.push("}", "");

  lines.push('[data-theme="club"] {');
  for (const [name, value] of Object.entries(spec.club.overrides).sort((a, b) =>
    a[0].localeCompare(b[0]),
  )) {
    lines.push(`  ${figmaNameToCssVar(name)}: ${value};`);
  }
  lines.push("}", "");

  return {
    css: lines.join("\n").trimEnd() + "\n",
    themeAware: [...themeAware].sort(),
  };
}

function generateTs(
  tree: Record<string, unknown>,
  flat: FlatToken[],
  meta: { exportedAt: string; sourceFile: string },
): string {
  return `/* Generated by tokens/build-tokens.ts — do not edit manually */
/* Source: ${meta.sourceFile} */
/* Exported from Figma: ${meta.exportedAt} */

export type FlatToken = {
  name: string;
  cssVar: string;
  value: string;
  cssValue: string;
  type: "COLOR" | "FLOAT" | "BOOLEAN" | "SHADOW" | "ICON_METRIC";
  category: string;
  collection: "primitive" | "semantic" | "component" | "breakpoint" | "effect" | "icon";
  collectionName: string;
  modeId: string;
  modeName: string;
  figmaId: string;
  aliasTo?: string;
  aliasCssVar?: string;
};

export const tokenMeta = ${JSON.stringify(meta, null, 2)} as const;

export const tokens = ${JSON.stringify(tree, null, 2)} as const;

export const flatTokens: FlatToken[] = ${JSON.stringify(flat, null, 2)};
`;
}

function main(): void {
  const raw = readFileSync(SOURCE_FILE, "utf8");
  const data = JSON.parse(raw) as FigmaExport;

  const collectionById = new Map(data.collections.map((c) => [c.id, c]));
  const byId = new Map(data.variables.map((v) => [v.id, v]));
  const cssVarById = new Map(
    data.variables.map((v) => [v.id, figmaNameToCssVar(v.name)]),
  );

  const flat: FlatToken[] = [];

  for (const variable of data.variables) {
    if (!isSupportedVariable(variable.name)) continue;

    const collection = collectionById.get(variable.variableCollectionId);
    if (!collection) continue;

    const modeId =
      variable.valuesByMode[collection.defaultModeId] !== undefined
        ? collection.defaultModeId
        : Object.keys(variable.valuesByMode)[0]!;

    const mode = collection.modes.find((m) => m.modeId === modeId);
    const resolved = resolveValue(variable, modeId, byId, cssVarById);

    flat.push({
      name: variable.name,
      cssVar: figmaNameToCssVar(variable.name),
      value: resolved.displayValue,
      cssValue: resolved.cssValue,
      type: variable.resolvedType,
      category: getCategory(variable.name),
      collection: getCollectionKind(collection.name, variable.name),
      collectionName: collection.name,
      modeId,
      modeName: mode?.name ?? modeId,
      figmaId: variable.id,
      aliasTo: resolved.aliasTo,
      aliasCssVar: resolved.aliasCssVar,
    });
  }

  flat.push(...loadEffectShadowTokens());
  flat.push(...loadIconSpecTokens());

  flat.sort((a, b) => a.name.localeCompare(b.name));

  const tree = buildNestedTokens(flat);
  const css = generateCss(flat);
  const { css: themesCss, themeAware } = generateThemesCss(data, byId, cssVarById);
  const normalized = {
    meta: {
      sourceFile: "figma-variables-2026-05-18.json",
      effectStylesFile: "effect-styles.json",
      iconSpecFile: "icon-spec.json",
      themesSpecFile: "themes-spec.json",
      themeAwareTokens: themeAware,
      exportedAt: data.exportedAt,
      pluginVersion: data.pluginVersion,
      generatedAt: new Date().toISOString(),
      tokenCount: flat.length,
    },
    tokens: tree,
    flat,
  };

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(join(OUT_DIR, "tokens.css"), css);
  writeFileSync(join(OUT_DIR, "themes.css"), themesCss);
  writeFileSync(
    join(OUT_DIR, "tokens.ts"),
    generateTs(tree, flat, {
      exportedAt: data.exportedAt,
      sourceFile: "figma-variables-2026-05-18.json",
    }),
  );
  writeFileSync(join(OUT_DIR, "tokens.json"), JSON.stringify(normalized, null, 2));

  console.log(`✓ Generated ${flat.length} tokens → ${OUT_DIR}`);
}

main();
