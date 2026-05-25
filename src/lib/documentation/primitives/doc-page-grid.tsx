import { cn } from "@/lib/utils";

export type DocPageGridProps = {
  /** Coluna principal (hero + conteúdo). */
  children: React.ReactNode;
  /** Coluna direita — TOC, legendas, etc. */
  rail?: React.ReactNode;
  className?: string;
};

/**
 * Grid editorial oficial do Kaizen (referência: páginas de componente).
 * - `--main`: coluna única (56rem)
 * - `--with-rail`: coluna principal + rail (TOC)
 */
export function DocPageGrid({ children, rail, className }: DocPageGridProps) {
  return (
    <div
      className={cn(
        "doc-page-layout",
        rail ? "doc-page-layout--with-rail" : "doc-page-layout--main",
        className,
      )}
    >
      <div className="doc-page-main">{children}</div>
      {rail}
    </div>
  );
}
