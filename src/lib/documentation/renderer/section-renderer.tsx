import { AnatomyBlock } from "@/lib/documentation/editorial/anatomy-block";
import { PreviewBlock } from "@/lib/documentation/editorial/preview-block";
import { AccessibilityChecklist } from "@/lib/documentation/primitives/accessibility-checklist";
import { DocsSection } from "@/lib/documentation/primitives/docs-section";
import { DoDontSection } from "@/lib/documentation/primitives/do-dont-section";
import { LivePreview } from "@/lib/documentation/primitives/live-preview";
import { PropertyTable } from "@/lib/documentation/primitives/property-table";
import { TokenTable } from "@/lib/documentation/primitives/token-table";
import { VariantGroup } from "@/lib/documentation/primitives/variant-group";
import type { DocSectionConfig } from "@/lib/documentation/types/component-doc";

type SectionRendererProps = {
  section: DocSectionConfig;
};

/** Mapeia `ComponentDocConfig.sections` → primitivos editoriais reutilizáveis. */
export function SectionRenderer({ section }: SectionRendererProps) {
  const { id, title, description, featured } = section;

  switch (section.type) {
    case "preview":
      return (
        <DocsSection
          id={id}
          title={title}
          description={description}
          featured={featured}
        >
          {section.showcase ? (
            <LivePreview
              align={section.align}
              code={section.code}
              anatomy={section.anatomy}
            >
              {section.content}
            </LivePreview>
          ) : (
            <PreviewBlock align={section.align}>{section.content}</PreviewBlock>
          )}
        </DocsSection>
      );

    case "variants":
      return (
        <DocsSection id={id} title={title} description={description}>
          <div className="doc-variant-stack">
            {section.groups.map((group) => (
              <VariantGroup key={group.label} label={group.label} align={group.align}>
                {group.content}
              </VariantGroup>
            ))}
          </div>
        </DocsSection>
      );

    case "anatomy":
      return (
        <DocsSection id={id} title={title} description={description}>
          <AnatomyBlock
            parts={section.parts}
            notes={section.notes}
            visual={section.visual}
          />
        </DocsSection>
      );

    case "properties":
      return (
        <DocsSection id={id} title={title} description={description}>
          <PropertyTable rows={section.rows} />
        </DocsSection>
      );

    case "tokens":
      return (
        <DocsSection id={id} title={title} description={description}>
          <TokenTable rows={section.rows} />
        </DocsSection>
      );

    case "accessibility":
      return (
        <DocsSection id={id} title={title} description={description}>
          <AccessibilityChecklist items={section.items} />
        </DocsSection>
      );

    case "do-dont":
      return (
        <DocsSection id={id} title={title} description={description}>
          <DoDontSection doItems={section.doItems} dontItems={section.dontItems} />
        </DocsSection>
      );

    case "callout":
      return null;

    case "custom":
      return (
        <DocsSection id={id} title={title} description={description}>
          {section.content}
        </DocsSection>
      );

    default:
      return null;
  }
}
