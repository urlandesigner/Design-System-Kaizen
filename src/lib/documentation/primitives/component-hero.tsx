import { KaizenMark } from "@/components/brand/kaizen-mark";
import { DocBreadcrumb } from "@/lib/documentation/editorial/doc-breadcrumb";
import type { DocBreadcrumbItem } from "@/types/documentation";

export type ComponentHeroProps = {
  breadcrumb: DocBreadcrumbItem[];
  title: string;
  description: string;
};

/** Hero editorial de páginas de componente (título + descrição curta). */
export function ComponentHero({ breadcrumb, title, description }: ComponentHeroProps) {
  return (
    <header className="doc-page-header doc-page-header--kaizen">
      <div className="doc-page-header-mark">
        <KaizenMark className="size-3.5" variant="decorative" />
        <span>Component</span>
      </div>
      <DocBreadcrumb items={breadcrumb} />
      <h1 className="doc-title mt-6">{title}</h1>
      <p className="doc-description">{description}</p>
    </header>
  );
}
