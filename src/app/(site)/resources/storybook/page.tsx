import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { Callout } from "@/lib/documentation/editorial/callout";
import { StandardPage } from "@/lib/documentation/primitives/standard-page";

export const metadata: Metadata = {
  title: "Storybook — Resources",
  description:
    "Ambiente para explorar e testar os componentes interativos do Kaizen.",
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Resources</p>
        <h1 className="doc-title mt-4">Storybook</h1>
        <p className="doc-description">
          O Storybook é o ambiente para explorar e testar os componentes do
          Kaizen de forma interativa e isolada.
        </p>
      </header>

      <p className="doc-body">
        Nele você visualiza cada componente em seus diferentes estados e
        variantes, ajusta propriedades em tempo real e valida comportamento de
        interação antes de levar para a aplicação.
      </p>

      <div className="mt-6">
        <a
          href={siteConfig.resources.storybook}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--kz-line)] px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/50"
        >
          Abrir Storybook
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <Callout variant="info" title="Status">
        O Storybook está em preparação. Por enquanto o link aponta para o
        repositório do Design System; assim que o ambiente publicado estiver
        disponível, este recurso será atualizado.
      </Callout>
    </StandardPage>
  );
}
