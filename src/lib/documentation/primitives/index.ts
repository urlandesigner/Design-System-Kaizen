/**
 * Primitivos editoriais Kaizen — mapa de nomes oficiais
 *
 * | Nome solicitado          | Export                    | Implementação base        |
 * |--------------------------|---------------------------|---------------------------|
 * | PageLayout               | (ver site-shell)          | `SiteShell` (app layer)   |
 * | DocsLayout               | DocsLayout                | layout hero + TOC         |
 * | DocsSection              | DocsSection               | DocSection + CSS tokens   |
 * | SectionHeader            | SectionHeader             | section-header.tsx        |
 * | ComponentHero            | ComponentHero             | hero do DocsLayout        |
 * | LivePreview              | LivePreview               | DocShowcase + tabs        |
 * | PreviewTabs              | PreviewTabs               | toolbar do showcase       |
 * | VariantGroup             | VariantGroup              | PreviewBlock + label      |
 * | PropertyTable            | PropertyTable             | PropsTable                |
 * | TokenTable               | TokenTable                | token-table.tsx           |
 * | AccessibilityChecklist   | AccessibilityChecklist    | BulletList checklist      |
 * | DoDontSection            | DoDontSection             | DoDont                    |
 * | TocSidebar               | TocSidebar                | TOC                       |
 */

export { AccessibilityChecklist } from "./accessibility-checklist";
export { ComponentHero } from "./component-hero";
export { DoDontSection } from "./do-dont-section";
export { DocPageGrid } from "./doc-page-grid";
export { DocsLayout } from "./docs-layout";
export { StandardPage } from "./standard-page";
export { DocsSection } from "./docs-section";
export { LivePreview, type LivePreviewProps } from "./live-preview";
export {
  PREVIEW_TABS,
  PreviewTabs,
  type PreviewTab,
  type PreviewTabId,
} from "./preview-tabs";
export { PropertyTable } from "./property-table";
export { SectionHeader } from "./section-header";
export { TokenTable } from "./token-table";
export { TocSidebar } from "./toc-sidebar";
export { VariantGroup } from "./variant-group";
