import { PreviewBlock } from "@/lib/documentation/editorial/preview-block";

export type VariantGroupProps = {
  label: string;
  align?: "start" | "center";
  children: React.ReactNode;
};

/** Grupo de variantes com label e surface de preview padronizada. */
export function VariantGroup({ label, align, children }: VariantGroupProps) {
  return (
    <PreviewBlock label={label} align={align}>
      {children}
    </PreviewBlock>
  );
}
