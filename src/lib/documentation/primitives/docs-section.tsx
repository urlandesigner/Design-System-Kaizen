import { DocSection } from "@/lib/documentation/editorial/doc-section";

export type DocsSectionProps = {
  id: string;
  title: string;
  description?: string;
  featured?: boolean;
  children: React.ReactNode;
};

/**
 * Section editorial com spacing e header padronizados (via CSS `.doc-section`).
 * Wrapper estável para todas as páginas de documentação.
 */
export function DocsSection({
  id,
  title,
  description,
  featured,
  children,
}: DocsSectionProps) {
  return (
    <DocSection id={id} title={title} description={description} featured={featured}>
      {children}
    </DocSection>
  );
}
