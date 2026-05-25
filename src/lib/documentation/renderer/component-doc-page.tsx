import { DocPage } from "@/lib/documentation/editorial/doc-page";
import { SectionRenderer } from "@/lib/documentation/renderer/section-renderer";
import { buildOfficialComponentToc } from "@/lib/documentation/template/component-doc-template";
import type { ComponentDocConfig } from "@/lib/documentation/types/component-doc";

type ComponentDocPageProps = {
  config: ComponentDocConfig;
};

export function ComponentDocPage({ config }: ComponentDocPageProps) {
  const { meta, sections } = config;
  const toc = config.toc ?? buildOfficialComponentToc(sections);

  return (
    <DocPage
      breadcrumb={meta.breadcrumb}
      title={meta.title}
      description={meta.description}
      toc={toc}
      className="doc-component-page"
    >
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </DocPage>
  );
}
