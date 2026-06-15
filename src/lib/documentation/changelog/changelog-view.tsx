import { ChangelogLegend } from "@/lib/documentation/changelog/changelog-legend";
import { ChangelogSidebar } from "@/lib/documentation/changelog/changelog-sidebar";
import { ChangelogViewClient } from "@/lib/documentation/changelog/changelog-view-client";
import { DocPageGrid } from "@/lib/documentation/primitives/doc-page-grid";

export function ChangelogView() {
  return (
    <DocPageGrid rail={<ChangelogSidebar />}>
      <article className="doc-page changelog-page">
        <div className="changelog-legend-mobile xl:hidden">
          <ChangelogLegend />
        </div>

        <ChangelogViewClient />
      </article>
    </DocPageGrid>
  );
}
