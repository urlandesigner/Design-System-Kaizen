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
                <code>{row.name}</code>
              </td>
              <td className="text-muted-foreground">
                <code>{row.type}</code>
              </td>
              <td className="text-muted-foreground">
                {row.defaultValue ? <code>{row.defaultValue}</code> : "—"}
              </td>
              <td className="text-muted-foreground">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
