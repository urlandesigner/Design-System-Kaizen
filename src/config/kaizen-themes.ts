export const kaizenThemes = [
  { id: "escritorio", label: "Escritório", figmaMode: "1377:1" },
  { id: "group", label: "Group", figmaMode: "1374:0" },
  { id: "club", label: "Club", figmaMode: null },
] as const;

export type KaizenThemeId = (typeof kaizenThemes)[number]["id"];

export const defaultKaizenTheme: KaizenThemeId = "escritorio";

export function isKaizenThemeId(value: string): value is KaizenThemeId {
  return kaizenThemes.some((theme) => theme.id === value);
}

export function getKaizenThemeLabel(id: KaizenThemeId): string {
  return kaizenThemes.find((theme) => theme.id === id)?.label ?? id;
}
