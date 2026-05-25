import { DoDont } from "@/lib/documentation/editorial/do-dont";
import type { DoDontItemConfig } from "@/lib/documentation/types/component-doc";

export type DoDontSectionProps = {
  doItems: DoDontItemConfig[];
  dontItems: DoDontItemConfig[];
};

/** Seção Do / Don't com colunas e previews padronizados. */
export function DoDontSection({ doItems, dontItems }: DoDontSectionProps) {
  return <DoDont doItems={doItems} dontItems={dontItems} />;
}
