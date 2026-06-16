"use client";

import { useDeferredValue, useState } from "react";

import { parseChangelogBody } from "@/content/changelog/parse-changelog";
import { changelogReleases } from "@/content/changelog/releases";
import type {
  ChangelogChangeType,
  ChangelogEntry,
  ChangelogRelease,
} from "@/content/changelog/types";

type ChangeBucketItem = {
  context: string;
  text: string;
};

const releaseOrder = [...changelogReleases].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

const changeTypeMeta: {
  type: ChangelogChangeType;
  label: string;
  emptyLabel: string;
}[] = [
  { type: "added", label: "Adicionados", emptyLabel: "Nada novo nesta categoria." },
  { type: "changed", label: "Alterados", emptyLabel: "Sem alteracoes registradas." },
  { type: "fixed", label: "Corrigidos", emptyLabel: "Nenhum ajuste registrado." },
  { type: "removed", label: "Removidos", emptyLabel: "Nenhuma remocao registrada." },
];

const allCategories = [
  "Tudo",
  ...Array.from(new Set(releaseOrder.flatMap((release) => release.categories))),
];

function formatReleaseDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

function bucketReleaseEntries(release: ChangelogRelease) {
  const buckets: Record<ChangelogChangeType, ChangeBucketItem[]> = {
    added: [],
    changed: [],
    fixed: [],
    removed: [],
    deprecated: [],
  };

  const sections = parseChangelogBody(release.body);

  for (const section of sections) {
    for (const entry of section.entries) {
      buckets[entry.type].push({
        context: section.title,
        text: entry.text,
      });
    }

    for (const subsection of section.subsections) {
      for (const entry of subsection.entries) {
        buckets[entry.type].push({
          context: `${section.title} / ${subsection.title}`,
          text: entry.text,
        });
      }
    }
  }

  return buckets;
}

function ChangelogListItem({ entry }: { entry: ChangeBucketItem }) {
  return (
    <li className="changelog-change-item">
      <span className="changelog-change-context">{entry.context}</span>
      <span className="changelog-change-text">{entry.text}</span>
    </li>
  );
}

function ChangelogChangeColumn({
  label,
  entries,
  emptyLabel,
  tone,
}: {
  label: string;
  entries: ChangeBucketItem[];
  emptyLabel: string;
  tone: ChangelogChangeType;
}) {
  return (
    <section className={`changelog-change-card changelog-change-card--${tone}`}>
      <div className="changelog-change-card-header">
        <h3>{label}</h3>
        <span>{entries.length}</span>
      </div>

      {entries.length > 0 ? (
        <ul className="changelog-change-list">
          {entries.map((entry, index) => (
            <ChangelogListItem key={`${entry.context}-${entry.text}-${index}`} entry={entry} />
          ))}
        </ul>
      ) : (
        <p className="changelog-empty-note">{emptyLabel}</p>
      )}
    </section>
  );
}

function ChangelogReleaseCard({
  release,
  featured = false,
}: {
  release: ChangelogRelease;
  featured?: boolean;
}) {
  const buckets = bucketReleaseEntries(release);
  const totalChanges = Object.values(buckets).reduce((sum, entries) => sum + entries.length, 0);

  return (
    <article
      id={release.id}
      className={`changelog-release-card scroll-mt-[calc(var(--header-height)+1.5rem)]${
        featured ? " changelog-release-card--featured" : ""
      }`}
    >
      <div className="changelog-release-topline">
        <span
          className={`changelog-release-badge ${
            release.status === "current"
              ? "changelog-release-badge--current"
              : "changelog-release-badge--released"
          }`}
        >
          {release.status === "current" ? "Release atual" : "Release publicada"}
        </span>
        <span className="changelog-release-date">{formatReleaseDate(release.publishedAt)}</span>
      </div>

      <div className="changelog-release-header-block">
        <div>
          <h2 className="changelog-release-version">v{release.version}</h2>
          <p className="changelog-release-summary-text">{release.summary}</p>
        </div>

        <div className="changelog-release-meta">
          <div className="changelog-release-stat">
            <strong>{totalChanges}</strong>
            <span>mudancas registradas</span>
          </div>
          <div className="changelog-release-tags">
            {release.categories.map((category) => (
              <span key={category} className="changelog-filter-chip changelog-filter-chip--static">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="changelog-change-grid">
        {changeTypeMeta.map((meta) => (
          <ChangelogChangeColumn
            key={meta.type}
            label={meta.label}
            entries={buckets[meta.type]}
            emptyLabel={meta.emptyLabel}
            tone={meta.type}
          />
        ))}
      </div>

      {buckets.deprecated.length > 0 ? (
        <section className="changelog-deprecated-block">
          <div className="changelog-deprecated-header">
            <h3>Deprecados</h3>
            <span>{buckets.deprecated.length}</span>
          </div>
          <ul className="changelog-change-list">
            {buckets.deprecated.map((entry, index) => (
              <ChangelogListItem key={`${entry.context}-${entry.text}-${index}`} entry={entry} />
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}

export function ChangelogViewClient() {
  const [activeCategory, setActiveCategory] = useState("Tudo");
  const deferredCategory = useDeferredValue(activeCategory);

  const filteredReleases = releaseOrder.filter((release) => {
    if (deferredCategory === "Tudo") {
      return true;
    }

    return release.categories.includes(deferredCategory);
  });

  const featuredRelease = filteredReleases[0];
  const remainingReleases = filteredReleases.slice(1);

  return (
    <>
      <div className="changelog-toolbar">
        <div>
          <p className="doc-eyebrow">Ybera Design System</p>
          <h1 className="doc-title mt-4">Changelog</h1>
          <p className="doc-description">
            Um historico vivo do Kaizen com releases organizadas por impacto,
            categoria e tipo de mudanca.
          </p>
        </div>

        <div className="changelog-filters" aria-label="Filtros de categoria">
          {allCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`changelog-filter-chip${
                activeCategory === category ? " changelog-filter-chip--active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {featuredRelease ? (
        <>
          <section className="changelog-featured-section">
            <div className="changelog-featured-label">
              {featuredRelease.status === "current" ? "Atual" : "Em destaque"}
            </div>
            <ChangelogReleaseCard release={featuredRelease} featured />
          </section>

          {remainingReleases.length > 0 ? (
            <section className="changelog-history-section">
              <div className="changelog-history-heading">
                <h2>Historico de releases</h2>
                <p>Versoes anteriores continuam acessiveis com o mesmo nivel de detalhe.</p>
              </div>

              <div className="changelog-release-stack">
                {remainingReleases.map((release) => (
                  <ChangelogReleaseCard key={release.id} release={release} />
                ))}
              </div>
            </section>
          ) : null}
        </>
      ) : (
        <div className="changelog-empty-state">
          <h2>Nenhuma release encontrada</h2>
          <p>O filtro atual nao encontrou versoes com essa categoria.</p>
        </div>
      )}
    </>
  );
}
