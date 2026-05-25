import { PropsTable } from "@/lib/documentation/editorial/props-table";
import type { PropDefinition } from "@/lib/documentation/types/component-doc";

export type PropertyTableProps = {
  rows: PropDefinition[];
};

/** Tabela de properties (API / Figma) — alias editorial de PropsTable. */
export function PropertyTable({ rows }: PropertyTableProps) {
  return <PropsTable rows={rows} />;
}
