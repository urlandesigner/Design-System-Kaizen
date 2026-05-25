import { TOC } from "@/lib/documentation/editorial/toc";
import type { DocTocItem } from "@/types/documentation";

export type TocSidebarProps = {
  items: DocTocItem[];
};

/** TOC lateral fixo das páginas de documentação. */
export function TocSidebar({ items }: TocSidebarProps) {
  return (
    <aside className="doc-page-toc hidden xl:block">
      <TOC items={items} />
    </aside>
  );
}
