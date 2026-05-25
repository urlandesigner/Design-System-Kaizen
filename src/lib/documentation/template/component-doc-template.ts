import type { DocTocItem } from "@/types/documentation";
import type { DocSectionConfig } from "@/lib/documentation/types/component-doc";

/** Ordem editorial oficial das páginas de componente Kaizen. */
export const KAIZEN_COMPONENT_DOC_SECTION_ORDER = [
  "preview",
  "variants",
  "anatomy",
  "properties",
  "tokens",
  "accessibility",
  "do-dont",
] as const;

/** Seções obrigatórias (anatomy é opcional — pode viver só na aba do preview). */
export const KAIZEN_COMPONENT_DOC_REQUIRED_SECTION_IDS = [
  "preview",
  "variants",
  "properties",
  "tokens",
  "accessibility",
  "do-dont",
] as const;

export type KaizenComponentDocSectionId =
  (typeof KAIZEN_COMPONENT_DOC_SECTION_ORDER)[number];

const OFFICIAL_TOC_TITLES: Record<string, string> = {
  preview: "Live preview",
  variants: "Variants",
  anatomy: "Anatomy",
  properties: "Properties",
  tokens: "Tokens",
  accessibility: "Accessibility",
  "do-dont": "Do / Don't",
};

/** Seções que não entram no TOC (conteúdo absorvido pelo preview ou metadata interna). */
const TOC_EXCLUDED_TYPES = new Set<DocSectionConfig["type"]>(["callout"]);

export function buildOfficialComponentToc(
  sections: DocSectionConfig[],
): DocTocItem[] {
  const byId = new Map(sections.map((section) => [section.id, section]));

  return KAIZEN_COMPONENT_DOC_SECTION_ORDER.flatMap((id) => {
    const section = byId.get(id);
    if (!section || TOC_EXCLUDED_TYPES.has(section.type)) {
      return [];
    }
    return [
      {
        id: section.id,
        title: OFFICIAL_TOC_TITLES[id] ?? section.title,
      },
    ];
  });
}

/** Hero: no máximo ~2 linhas; sem prefixos Figma nem “não confundir com”. */
export function componentDocHeroDescription(text: string): string {
  return text.trim();
}

/** Valida se todas as seções oficiais estão presentes (dev / CI). */
export function validateOfficialComponentSections(
  sections: DocSectionConfig[],
): { ok: boolean; missing: KaizenComponentDocSectionId[] } {
  const ids = new Set(sections.map((section) => section.id));
  const missing = KAIZEN_COMPONENT_DOC_REQUIRED_SECTION_IDS.filter((id) => !ids.has(id));
  return { ok: missing.length === 0, missing: [...missing] };
}
