import { ComponentHero } from "@/lib/documentation/primitives/component-hero";
import { DocPageGrid } from "@/lib/documentation/primitives/doc-page-grid";
import { TocSidebar } from "@/lib/documentation/primitives/toc-sidebar";
import type { DocBreadcrumbItem, DocTocItem } from "@/types/documentation";

export type DocsLayoutProps = {
  breadcrumb: DocBreadcrumbItem[];
  title: string;
  description: string;
  toc: DocTocItem[];
  /** Ex.: `doc-component-page` para páginas de componente. */
  pageClassName?: string;
  children: React.ReactNode;
};

/**
 * Layout editorial de documentação: hero + conteúdo + TOC.
 * Usado por ComponentDocPage e páginas custom (overview).
 */
export function DocsLayout({
  breadcrumb,
  title,
  description,
  toc,
  pageClassName,
  children,
}: DocsLayoutProps) {
  return (
    <DocPageGrid rail={<TocSidebar items={toc} />}>
      <article className={pageClassName ? `doc-page ${pageClassName}` : "doc-page"}>
        <ComponentHero breadcrumb={breadcrumb} title={title} description={description} />
        <div className="doc-page-sections">{children}</div>
      </article>
    </DocPageGrid>
  );
}
