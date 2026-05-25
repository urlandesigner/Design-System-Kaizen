import { StandardPage } from "@/lib/documentation/primitives/standard-page";

type PlaceholderPageProps = {
  title: string;
  description?: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Ybera Design System</p>
        <h1 className="doc-title mt-4">{title}</h1>
        {description ? <p className="doc-description">{description}</p> : null}
      </header>
      <p className="doc-body">
        Documentação em construção. Esta página seguirá o template oficial de
        componentes do Kaizen.
      </p>
    </StandardPage>
  );
}
