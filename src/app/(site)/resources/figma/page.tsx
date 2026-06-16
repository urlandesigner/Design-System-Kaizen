import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { Callout } from "@/lib/documentation/editorial/callout";
import { StandardPage } from "@/lib/documentation/primitives/standard-page";

export const metadata: Metadata = {
  title: "Figma — Resources",
  description:
    "Bibliotecas Figma do Kaizen: Beta para evolução e Produção como fonte da verdade.",
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Resources</p>
        <h1 className="doc-title mt-4">Figma</h1>
        <p className="doc-description">
          As bibliotecas Figma do Kaizen reúnem componentes, variáveis e tokens
          para desenhar interfaces consistentes com o Design System.
        </p>
      </header>

      <p className="doc-body">
        Existem duas bibliotecas distintas. A versão Beta é onde o sistema
        evolui antes de estabilizar; a versão Produção é a referência estável
        para qualquer projeto em andamento.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={siteConfig.resources.figmaBeta}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--kz-line)] px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/50"
        >
          Kaizen | Beta v1.1.0
          <span aria-hidden="true">↗</span>
        </a>
        <a
          href={siteConfig.resources.figmaProduction}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--kz-line)] px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/50"
        >
          Kaizen | Production v1.1.0
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <Callout variant="info" title="Beta ou Produção?">
        Use a biblioteca <strong>Beta</strong> para explorar o que ainda está em
        evolução e dar feedback antes de virar padrão. Para telas que vão para
        desenvolvimento ou produção, use sempre a biblioteca de{" "}
        <strong>Produção</strong>, que é a fonte da verdade estável do Kaizen.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Variáveis e tokens
      </h2>
      <p className="doc-body text-muted-foreground">
        As bibliotecas expõem as variáveis de cor, tipografia e espaçamento como
        tokens vinculados aos componentes. Isso mantém o design alinhado ao
        código e facilita a troca de temas (claro e escuro) diretamente no
        Figma.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Handoff
      </h2>
      <p className="doc-body text-muted-foreground">
        No handoff, os componentes da biblioteca de Produção correspondem aos
        componentes disponíveis em código, reduzindo ambiguidade entre design e
        implementação. Prefira instâncias da biblioteca em vez de elementos
        soltos para preservar essa correspondência.
      </p>
    </StandardPage>
  );
}
