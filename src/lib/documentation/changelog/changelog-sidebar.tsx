import { changelogTocItems } from "@/content/changelog/toc";
import { ChangelogLegend } from "@/lib/documentation/changelog/changelog-legend";
import { TOC } from "@/lib/documentation/editorial/toc";

/** TOC de versões + legenda fixos na coluna direita (changelog). */
export function ChangelogSidebar() {
  return (
    <aside className="doc-page-toc changelog-sidebar hidden xl:flex xl:flex-col">
      <TOC items={changelogTocItems} />
      <ChangelogLegend />
    </aside>
  );
}
