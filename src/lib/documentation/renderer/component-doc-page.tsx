import { ComponentFeedback } from "@/lib/documentation/editorial/component-feedback";
import { DocPage } from "@/lib/documentation/editorial/doc-page";
import { SectionRenderer } from "@/lib/documentation/renderer/section-renderer";
import { buildOfficialComponentToc } from "@/lib/documentation/template/component-doc-template";
import type { ComponentDocConfig } from "@/lib/documentation/types/component-doc";

type ComponentDocPageProps = {
  config: ComponentDocConfig;
};

export function ComponentDocPage({ config }: ComponentDocPageProps) {
  const { meta, sections } = config;
  const tocBase = config.toc ?? buildOfficialComponentToc(sections);
  const toc = tocBase.some((item) => item.id === "feedback")
    ? tocBase
    : [...tocBase, { id: "feedback", title: "Feedback" }];

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
      <ComponentFeedback componentName={meta.title} />
    </DocPage>
  );
}
