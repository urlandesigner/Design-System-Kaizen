import { parseChangelogBody } from "@/content/changelog/parse-changelog";
import { changelogReleases } from "@/content/changelog/releases";
import type { ChangelogChangeType, ChangelogEntry } from "@/content/changelog/types";
import { ChangelogLegend } from "@/lib/documentation/changelog/changelog-legend";
import { ChangelogSidebar } from "@/lib/documentation/changelog/changelog-sidebar";
import { DocPageGrid } from "@/lib/documentation/primitives/doc-page-grid";
import { cn } from "@/lib/utils";

const changeTypeLabels: Record<ChangelogChangeType, string> = {
  added: "added",
  changed: "changed",
  fixed: "fixed",
  removed: "removed",
  deprecated: "deprecated",
};

function ChangelogEntryRow({ entry }: { entry: ChangelogEntry }) {
  return (
    <li className={cn("changelog-entry", `changelog-entry--${entry.type}`)}>
      <span className="changelog-entry-type">({changeTypeLabels[entry.type]})</span>
      <span className="changelog-entry-text">{entry.text}</span>
    </li>
  );
}

export function ChangelogView() {
  return (
    <DocPageGrid rail={<ChangelogSidebar />}>
      <article className="doc-page changelog-page">
        <header className="doc-page-header foundations-page-header pb-10">
          <p className="doc-eyebrow">Ybera Design System</p>
          <h1 className="doc-title mt-4">Changelog</h1>
          <p className="doc-description">
            Histórico de evolução do Design System — tokens, componentes e convenções.
          </p>
        </header>

        <div className="changelog-legend-mobile xl:hidden">
          <ChangelogLegend />
        </div>

        <div className="changelog-releases">
          {changelogReleases.map((release, index) => {
            const sections = parseChangelogBody(release.body);
            const isLatestRelease = index === changelogReleases.length - 1;

            return (
              <details
                key={release.id}
                id={release.id}
                className="changelog-release surface-card scroll-mt-[calc(var(--header-height)+1.5rem)]"
                open={isLatestRelease}
              >
                <summary className="changelog-release-summary">
                  <h2 className="changelog-release-heading">
                    <span className="changelog-release-title">Versão {release.version}</span>
                    <span className="changelog-version-status">({release.status})</span>
                  </h2>
                  <span className="changelog-release-chevron" aria-hidden />
                </summary>

                <div className="changelog-release-body">
                  {sections.map((section) => (
                    <div key={section.title} className="changelog-section">
                      <h3 className="changelog-section-title">{section.title}</h3>

                      {section.subsections.map((subsection) => (
                        <div key={subsection.title} className="changelog-subsection">
                          <h4 className="changelog-subsection-title">{subsection.title}</h4>
                          <ul className="changelog-entry-list">
                            {subsection.entries.map((entry) => (
                              <ChangelogEntryRow
                                key={`${subsection.title}-${entry.type}-${entry.text}`}
                                entry={entry}
                              />
                            ))}
                          </ul>
                        </div>
                      ))}

                      {section.entries.length > 0 ? (
                        <ul className="changelog-entry-list">
                          {section.entries.map((entry) => (
                            <ChangelogEntryRow
                              key={`${section.title}-${entry.type}-${entry.text}`}
                              entry={entry}
                            />
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </article>
    </DocPageGrid>
  );
}
