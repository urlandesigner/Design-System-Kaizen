import { getKaizenThemeLabel, type KaizenThemeId } from "@/config/kaizen-themes";

/** Tokens com valor distinto por tema (Figma Theme + club em themes-spec). */
export const themeAwareTokenNames: string[] = [
  "rounded-theme/button-default",
  "color-theme/background/primary",
  "color-theme/surface/brand",
  "color-theme/icon/brand",
  "color-theme/border/brand",
  "color-theme/border/badge/brand",
  "color-theme/surface/badge/brand",
  "color-theme/surface/action/disabled-dark",
  "color-theme/surface/button/enabled",
  "color-theme/surface/button/hovered",
  "color-theme/surface/button/selected",
];

const uniqueThemeAware = [...new Set(themeAwareTokenNames)];

export function isThemeAwareToken(name: string): boolean {
  return uniqueThemeAware.includes(name);
}

export function themeTokenNote(name: string): string | undefined {
  if (!isThemeAwareToken(name)) return undefined;
  return "Varia entre Escritório, Club e Group";
}

export function formatThemeTokenValues(
  themes: Record<KaizenThemeId, string>,
): string {
  return (["escritorio", "club", "group"] as const)
    .map((id) => `${getKaizenThemeLabel(id)}: ${themes[id]}`)
    .join(" · ");
}
