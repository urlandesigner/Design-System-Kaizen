import { DocPageGrid } from "@/lib/documentation/primitives/doc-page-grid";
import { cn } from "@/lib/utils";

type StandardPageProps = {
  children: React.ReactNode;
  className?: string;
};

/** Página de documentação em coluna única (mesma largura das docs de componente). */
export function StandardPage({ children, className }: StandardPageProps) {
  return (
    <DocPageGrid>
      <article className={cn("doc-page", className)}>{children}</article>
    </DocPageGrid>
  );
}
