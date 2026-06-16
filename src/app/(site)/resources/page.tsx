import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { StandardPage } from "@/lib/documentation/primitives/standard-page";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Materiais oficiais do Kaizen para desenhar, explorar e consumir o Design System.",
};

const resourceCards = [
  {
    title: "Figma",
    description:
      "Bibliotecas para desenhar com os componentes, variáveis e tokens do Kaizen.",
    href: "/resources/figma",
    cta: "Ver bibliotecas Figma",
    external: false,
  },
  {
    title: "Storybook",
    description:
      "Ambiente para explorar e testar os componentes interativos em isolamento.",
    href: "/resources/storybook",
    cta: "Abrir Storybook",
    external: false,
  },
  {
    title: "NPM",
    description: `Consuma o pacote ${siteConfig.resources.npmPackage} diretamente no seu código.`,
    href: "/resources/npm",
    cta: "Ver instalação",
    external: false,
  },
] as const;

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Resources</p>
        <h1 className="doc-title mt-4">Recursos do Kaizen</h1>
        <p className="doc-description">
          Aqui ficam os materiais oficiais para trabalhar com o Design System:
          desenhar no Figma, explorar componentes no Storybook e consumir tudo
          em código via NPM.
        </p>
      </header>

      <p className="doc-body text-muted-foreground">
        Cada recurso atende a uma etapa do fluxo de produto. Use o Figma para
        projetar, o Storybook para validar comportamento e o pacote NPM para
        levar os componentes para a aplicação.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resourceCards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="group flex flex-col rounded-xl border border-[var(--kz-line)] p-5 transition-colors hover:bg-accent/50"
          >
            <span className="text-base font-semibold tracking-[-0.01em] text-foreground">
              {card.title}
            </span>
            <span className="mt-2 flex-1 text-sm text-muted-foreground">
              {card.description}
            </span>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
              {card.cta}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </a>
        ))}
      </div>
    </StandardPage>
  );
}
