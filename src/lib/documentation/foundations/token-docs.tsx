import { StandardPage } from "@/lib/documentation/primitives/standard-page";
import type { FlatToken } from "@/lib/tokens";
import { CopyInlineButton } from "@/components/copy-inline-button";
import {
  familyToTitle,
  figmaShortName,
  formatTokenDisplayValue,
  groupTokensByFamily,
  tokenReference,
} from "@/lib/tokens/sort-and-group";

type TokenFoundationLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  count?: number;
};

export function TokenFoundationLayout({
  title,
  description,
  children,
  count,
}: TokenFoundationLayoutProps) {
  return (
    <StandardPage className="foundations-page">
      <header className="doc-page-header foundations-page-header">
        <p className="doc-eyebrow">Foundations · Tokens Figma</p>
        <h1 className="doc-title mt-4">{title}</h1>
        <p className="doc-description mt-3">{description}</p>
        {count !== undefined ? (
          <p className="mt-3 font-mono text-[0.75rem] text-muted-foreground">
            {count} tokens · fonte: figma-variables-2026-05-18.json
          </p>
        ) : null}
      </header>
      {children}
    </StandardPage>
  );
}

type TokenTableProps = {
  tokens: FlatToken[];
  showPreview?: "color" | "spacing" | "radius" | "border" | "typography" | "blur" | "shadow";
  groupByFamily?: boolean;
};

const previewCellClass =
  "token-table-cell token-table-col token-table-col--preview token-table-cell--preview";

function TokenTableRow({
  token,
  showPreview,
}: {
  token: FlatToken;
  showPreview?: TokenTableProps["showPreview"];
}) {
  const shortName = figmaShortName(token.name);
  const reference = tokenReference(token.cssVar);
  const displayValue = formatTokenDisplayValue(token);

  return (
    <tr className="token-table-row">
      {showPreview === "color" ? (
        <td
          className={`${previewCellClass} token-table-cell--swatch`}
        >
          <div
            className="token-table-swatch"
            style={{ backgroundColor: `var(${token.cssVar})` }}
            aria-hidden
          />
        </td>
      ) : null}
      {showPreview === "spacing" ? (
        <td className={previewCellClass}>
          <div
            className="token-table-bar"
            style={{ width: `var(${token.cssVar})` }}
            aria-hidden
          />
        </td>
      ) : null}
      {showPreview === "radius" ? (
        <td className={previewCellClass}>
          <div
            className="token-table-radius"
            style={{ borderRadius: `var(${token.cssVar})` }}
            aria-hidden
          />
        </td>
      ) : null}
      {showPreview === "border" ? (
        <td className={previewCellClass}>
          <div
            className="token-table-border"
            style={{ borderTopWidth: `var(${token.cssVar})` }}
            aria-hidden
          />
        </td>
      ) : null}
      {showPreview === "typography" ? (
        <td className={previewCellClass}>
          <span
            className="token-table-type-sample"
            style={
              token.name.startsWith("text-kz") || token.name.startsWith("typography/text")
                ? { fontSize: `var(${token.cssVar})` }
                : token.name.startsWith("leading-kz") ||
                    token.name.startsWith("typography/leading")
                  ? { lineHeight: `var(${token.cssVar})` }
                  : token.name.startsWith("font-kz")
                    ? { fontWeight: `var(${token.cssVar})` }
                    : undefined
            }
          >
            Aa
          </span>
        </td>
      ) : null}
      {showPreview === "blur" ? (
        <td className={previewCellClass}>
          <div className="token-table-blur-host" aria-hidden>
            <div className="token-table-blur-bg" />
            <div
              className="token-table-blur-fg"
              style={{ backdropFilter: `blur(var(${token.cssVar}))` }}
            />
          </div>
        </td>
      ) : null}
      {showPreview === "shadow" ? (
        <td className={previewCellClass}>
          <div
            className="token-table-shadow-sample"
            style={{ boxShadow: `var(${token.cssVar})` }}
            aria-hidden
          />
        </td>
      ) : null}
      <td className="token-table-cell token-table-col token-table-col--reference">
        <div className="copy-cell">
          <code>{reference}</code>
          <CopyInlineButton value={reference} variant="ghost" label="Ref" />
        </div>
      </td>
      <td className="token-table-cell token-table-col token-table-col--name">
        <div className="copy-cell">
          <code>{shortName}</code>
          <CopyInlineButton value={shortName} variant="ghost" label="Token" />
        </div>
      </td>
      <td className="token-table-cell token-table-col token-table-col--value">
        <div className="copy-cell copy-cell--end">
          <code>{displayValue}</code>
          <CopyInlineButton value={displayValue} variant="ghost" label="Valor" />
        </div>
      </td>
    </tr>
  );
}

function TokenTable({
  tokens,
  showPreview,
  title,
}: {
  tokens: FlatToken[];
  showPreview?: TokenTableProps["showPreview"];
  title: string;
}) {
  const hasPreview = Boolean(showPreview);

  return (
    <section className="token-doc-section">
      <h2 className="token-doc-section-title">{title}</h2>
      <div className="token-table-wrap surface-card">
        <table className="token-table">
          <thead>
            <tr>
              {hasPreview ? (
                <th className="token-table-head token-table-col token-table-col--preview">
                  Preview
                </th>
              ) : null}
              <th className="token-table-head token-table-col token-table-col--reference">
                Referência
              </th>
              <th className="token-table-head token-table-col token-table-col--name">Token</th>
              <th className="token-table-head token-table-col token-table-col--value">Valor</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token) => (
              <TokenTableRow
                key={token.figmaId}
                token={token}
                showPreview={showPreview}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function TokenGroupedTables({
  tokens,
  showPreview,
  groupByFamily = true,
  emptyMessage = "Nenhum token nesta seção.",
}: TokenTableProps & { emptyMessage?: string }) {
  if (tokens.length === 0) {
    return <p className="doc-body text-muted-foreground">{emptyMessage}</p>;
  }

  if (!groupByFamily) {
    const title = familyToTitle(getFamilyKeyFromTokens(tokens));
    return <TokenTable tokens={tokens} showPreview={showPreview} title={title} />;
  }

  const groups = groupTokensByFamily(tokens);

  return (
    <>
      {groups.map((group) => (
        <TokenTable
          key={group.family}
          title={group.title}
          tokens={group.tokens}
          showPreview={showPreview}
        />
      ))}
    </>
  );
}

function getFamilyKeyFromTokens(tokens: FlatToken[]): string {
  if (tokens.length === 0) return "Tokens";
  const first = tokens[0]!;
  const parts = first.name.split("/");
  return parts[0] ?? "Tokens";
}

export function TokenSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="foundations-token-section">
      <h2 className="foundations-token-section-title">{title}</h2>
      <div className="foundations-token-section-body">{children}</div>
    </section>
  );
}

/** @deprecated Use TokenGroupedTables */
export function ColorTokenGrid({ tokens }: { tokens: FlatToken[] }) {
  return <TokenGroupedTables tokens={tokens} showPreview="color" />;
}

/** @deprecated Use TokenGroupedTables */
export function SpacingTokenList({ tokens }: { tokens: FlatToken[] }) {
  return <TokenGroupedTables tokens={tokens} showPreview="spacing" />;
}

/** @deprecated Use TokenGroupedTables */
export function RadiusTokenList({ tokens }: { tokens: FlatToken[] }) {
  return <TokenGroupedTables tokens={tokens} showPreview="radius" />;
}

/** @deprecated Use TokenGroupedTables */
export function BorderTokenList({ tokens }: { tokens: FlatToken[] }) {
  return <TokenGroupedTables tokens={tokens} showPreview="border" />;
}

/** @deprecated Use TokenGroupedTables */
export function TypographyTokenList({ tokens }: { tokens: FlatToken[] }) {
  return <TokenGroupedTables tokens={tokens} showPreview="typography" />;
}
