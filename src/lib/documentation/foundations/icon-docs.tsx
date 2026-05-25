import type { FlatToken } from "@/lib/tokens";
import { iconSpecMeta } from "@/lib/tokens/icon-spec-meta";
import { formatTokenDisplayValue, tokenReference } from "@/lib/tokens/sort-and-group";

import { TokenFoundationLayout, TokenGroupedTables, TokenSection } from "./token-docs";

const SIZE_ORDER = ["sm", "md", "lg"] as const;

function groupIconSizeTokens(tokens: FlatToken[]) {
  const bySize = new Map<string, FlatToken[]>();
  for (const token of tokens) {
    const match = /^icon-size\/(sm|md|lg)\//.exec(token.name);
    if (!match) continue;
    const size = match[1]!;
    const list = bySize.get(size) ?? [];
    list.push(token);
    bySize.set(size, list);
  }
  return SIZE_ORDER.filter((s) => bySize.has(s)).map((size) => ({
    size,
    tokens: bySize.get(size)!.sort((a, b) => a.name.localeCompare(b.name)),
  }));
}

function IconSizePreview({ size }: { size: (typeof SIZE_ORDER)[number] }) {
  const containerVar = `--icon-size-${size}-container`;
  const glyphVar = `--icon-size-${size}-glyph`;
  const colorVar = iconSpecMeta.defaultColorCssVar;

  return (
    <div
      className="icon-size-preview"
      style={{
        width: `var(${containerVar})`,
        height: `var(${containerVar})`,
        color: `var(${colorVar})`,
        fontSize: `var(${glyphVar})`,
      }}
      aria-hidden
    >
      +
    </div>
  );
}

function IconSizeTable({ tokens }: { tokens: FlatToken[] }) {
  const groups = groupIconSizeTokens(tokens);

  return (
    <div className="token-table-wrap surface-card">
      <table className="token-table">
        <thead>
          <tr>
            <th className="token-table-head token-table-col token-table-col--preview">Preview</th>
            <th className="token-table-head token-table-col token-table-col--name">Figma</th>
            <th className="token-table-head token-table-col token-table-col--reference">Container</th>
            <th className="token-table-head token-table-col token-table-col--reference">Glyph</th>
            <th className="token-table-head token-table-col token-table-col--value">Line height</th>
          </tr>
        </thead>
        <tbody>
          {groups.map(({ size, tokens: sizeTokens }) => {
            const container = sizeTokens.find((t) => t.name.endsWith("/container"));
            const glyph = sizeTokens.find((t) => t.name.endsWith("/glyph"));
            const leading = sizeTokens.find((t) => t.name.endsWith("/line-height"));
            const figmaLabel =
              size === "sm" ? "Size=Small" : size === "md" ? "Size=Medium" : "Size=Large";

            return (
              <tr key={size} className="token-table-row">
                <td className="token-table-cell token-table-col token-table-col--preview token-table-cell--preview">
                  <IconSizePreview size={size} />
                </td>
                <td className="token-table-cell token-table-col token-table-col--name">{figmaLabel}</td>
                <td className="token-table-cell token-table-col token-table-col--reference text-[0.75rem]">
                  {container ? (
                    <>
                      <span className="text-muted-foreground">{tokenReference(container.cssVar)}</span>
                      <br />
                      {formatTokenDisplayValue(container)}
                    </>
                  ) : (
                    "—"
                  )}
                </td>
                <td className="token-table-cell token-table-col token-table-col--reference text-[0.75rem]">
                  {glyph ? (
                    <>
                      <span className="text-muted-foreground">{tokenReference(glyph.cssVar)}</span>
                      <br />
                      {formatTokenDisplayValue(glyph)}
                    </>
                  ) : (
                    "—"
                  )}
                </td>
                <td className="token-table-cell token-table-col token-table-col--value text-[0.75rem]">
                  {leading ? (
                    <>
                      <span className="text-muted-foreground">{tokenReference(leading.cssVar)}</span>
                      <br />
                      {formatTokenDisplayValue(leading)}
                    </>
                  ) : (
                    "—"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

type IconsFoundationPageProps = {
  iconSizeTokens: FlatToken[];
  iconColorTokens: FlatToken[];
};

export function IconsFoundationPage({
  iconSizeTokens,
  iconColorTokens,
}: IconsFoundationPageProps) {
  return (
    <TokenFoundationLayout
      title="Icons"
      description="Componente $icon do Figma — tamanhos, variantes e tokens semânticos de cor."
      count={iconSizeTokens.length + iconColorTokens.length}
    >
      <section className="token-doc-section">
        <h2 className="token-doc-section-title">Componente Figma</h2>
        <p className="doc-body max-w-2xl text-muted-foreground">
          Fonte:{" "}
          <a
            href={iconSpecMeta.figma.url}
            className="font-mono text-[0.8125rem] text-foreground underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            $icon · node {iconSpecMeta.figma.nodeId}
          </a>
          . Variantes: Size ({iconSpecMeta.variants.size.join(", ")}), Style (
          {iconSpecMeta.variants.style.join(", ")}), Type ({iconSpecMeta.variants.type.join(", ")}
          ).
        </p>
      </section>

      <TokenSection title="Tamanhos (icon-size/*)">
        <IconSizeTable tokens={iconSizeTokens} />
      </TokenSection>

      <TokenSection title="Cores (color-theme/icon/*)">
        <p className="mb-4 text-[0.8125rem] text-muted-foreground">
          Cor padrão do componente:{" "}
          <code className="font-mono">{iconSpecMeta.defaultColorToken}</code> (
          <code className="font-mono">{iconSpecMeta.defaultColorCssVar}</code>)
        </p>
        <TokenGroupedTables tokens={iconColorTokens} showPreview="color" />
      </TokenSection>
    </TokenFoundationLayout>
  );
}
