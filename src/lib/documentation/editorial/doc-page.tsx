import { DocsLayout } from "@/lib/documentation/primitives/docs-layout";
import type { DocBreadcrumbItem, DocTocItem } from "@/types/documentation";

type DocPageProps = {
  breadcrumb: DocBreadcrumbItem[];
  title: string;
  description: string;
  toc: DocTocItem[];
  className?: string;
  children: React.ReactNode;
};

/** @deprecated Preferir `DocsLayout` — mantido como alias estável. */
export function DocPage({
  breadcrumb,
  title,
  description,
  toc,
  className,
  children,
}: DocPageProps) {
  return (
    <DocsLayout
      breadcrumb={breadcrumb}
      title={title}
      description={description}
      toc={toc}
      pageClassName={className}
    >
      {children}
    </DocsLayout>
  );
}
