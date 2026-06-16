import { CopyInlineButton } from "@/components/copy-inline-button";
import type { PropDefinition } from "@/lib/documentation/types/component-doc";

type PropsTableProps = {
  rows: PropDefinition[];
};

export function PropsTable({ rows }: PropsTableProps) {
  return (
    <div className="doc-table-wrap">
      <table className="props-table">
        <thead>
          <tr>
            <th>Propriedade</th>
            <th>Tipo</th>
            <th>Padrão</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>
                <div className="copy-cell">
                  <code>{row.name}</code>
                  <CopyInlineButton value={row.name} variant="ghost" label="Prop" />
                </div>
              </td>
              <td className="text-muted-foreground">
                <div className="copy-cell">
                  <code>{row.type}</code>
                  <CopyInlineButton value={row.type} variant="ghost" label="Tipo" />
                </div>
              </td>
              <td className="text-muted-foreground">
                {row.defaultValue ? (
                  <div className="copy-cell">
                    <code>{row.defaultValue}</code>
                    <CopyInlineButton
                      value={row.defaultValue}
                      variant="ghost"
                      label="Padrão"
                    />
                  </div>
                ) : (
                  "—"
                )}
              </td>
              <td className="text-muted-foreground">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
