import { CopyInlineButton } from "@/components/copy-inline-button";
import type { TokenDefinition } from "@/lib/documentation/types/component-doc";
import { isThemeAwareToken, themeTokenNote } from "@/lib/documentation/themed-tokens";

type TokenTableProps = {
  rows: TokenDefinition[];
};

export function TokenTable({ rows }: TokenTableProps) {
  const showThemeColumn = rows.some(
    (row) => row.themeNote || isThemeAwareToken(row.token),
  );

  return (
    <div className="doc-table-wrap">
      <table className="props-table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Uso</th>
            {showThemeColumn ? <th>Por tema</th> : null}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const themeNote =
              row.themeNote ??
              (isThemeAwareToken(row.token) ? themeTokenNote(row.token) : undefined);

            return (
              <tr key={row.token}>
                <td>
                  <div className="copy-cell">
                    <code>{row.token}</code>
                    <CopyInlineButton value={row.token} variant="ghost" label="Token" />
                  </div>
                </td>
                <td className="text-muted-foreground">{row.usage}</td>
                {showThemeColumn ? (
                  <td className="text-muted-foreground text-[0.875rem]">
                    {themeNote ?? "—"}
                  </td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
