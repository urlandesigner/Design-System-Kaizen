import type { ReactNode } from "react";

import type { DocBreadcrumbItem, DocTocItem } from "@/types/documentation";

export type DocSectionBase = {
  id: string;
  title: string;
  description?: string;
  featured?: boolean;
};

export type PreviewGroupConfig = {
  label: string;
  content: ReactNode;
  align?: "start" | "center";
};

export type VariantsSectionConfig = DocSectionBase & {
  type: "variants";
  groups: PreviewGroupConfig[];
};

export type AnatomyPartConfig = {
  id: string;
  label: string;
  variant?: "container" | "label" | "default";
};

export type AnatomyNoteConfig = {
  term: string;
  description: string;
};

export type PreviewAnatomyConfig = {
  parts: AnatomyPartConfig[];
  notes: AnatomyNoteConfig[];
};

export type PreviewSectionConfig = DocSectionBase & {
  type: "preview";
  showcase?: boolean;
  align?: "start" | "center";
  content: ReactNode;
  code?: string;
  anatomy?: PreviewAnatomyConfig;
};

export type AnatomySectionConfig = DocSectionBase & {
  type: "anatomy";
  parts: AnatomyPartConfig[];
  notes: AnatomyNoteConfig[];
  visual?: ReactNode;
};

export type PropDefinition = {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
};

export type PropertiesSectionConfig = DocSectionBase & {
  type: "properties";
  rows: PropDefinition[];
};

export type TokenDefinition = {
  token: string;
  usage: string;
  /** Nota quando o token muda entre Escritório, Club e Group. */
  themeNote?: string;
};

export type TokensSectionConfig = DocSectionBase & {
  type: "tokens";
  rows: TokenDefinition[];
};

export type AccessibilitySectionConfig = DocSectionBase & {
  type: "accessibility";
  items: string[];
};

export type DoDontItemConfig = {
  label: string;
  description: string;
  example: ReactNode;
};

export type DoDontSectionConfig = DocSectionBase & {
  type: "do-dont";
  doItems: DoDontItemConfig[];
  dontItems: DoDontItemConfig[];
};

export type CalloutSectionConfig = DocSectionBase & {
  type: "callout";
  variant?: "info" | "tip" | "warning";
  body: ReactNode;
};

export type CustomSectionConfig = DocSectionBase & {
  type: "custom";
  content: ReactNode;
};

export type DocSectionConfig =
  | PreviewSectionConfig
  | VariantsSectionConfig
  | AnatomySectionConfig
  | PropertiesSectionConfig
  | TokensSectionConfig
  | AccessibilitySectionConfig
  | DoDontSectionConfig
  | CalloutSectionConfig
  | CustomSectionConfig;

export type ComponentDocMeta = {
  title: string;
  description: string;
  category: string;
  breadcrumb: DocBreadcrumbItem[];
};

export type ComponentDocConfig = {
  meta: ComponentDocMeta;
  toc?: DocTocItem[];
  sections: DocSectionConfig[];
};

export function buildTocFromSections(
  sections: DocSectionConfig[],
): DocTocItem[] {
  return sections.map((section) => ({
    id: section.id,
    title: section.title,
  }));
}
