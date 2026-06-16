import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { Callout } from "@/lib/documentation/editorial/callout";
import { StandardPage } from "@/lib/documentation/primitives/standard-page";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Visão geral do Kaizen — a camada de alinhamento entre produto, design e engenharia da Ybera.",
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Get Started</p>
        <h1 className="doc-title mt-4">O que é o Kaizen</h1>
        <p className="doc-description">
          O Kaizen é o Design System da Ybera: uma camada compartilhada de
          decisões, código e documentação que mantém produto, design e
          engenharia falando a mesma língua.
        </p>
      </header>

      <p className="doc-body">
        Kaizen significa <em>melhoria contínua</em>. O sistema existe para que
        cada equipe construa sobre uma base consistente em vez de reinventar
        cores, espaçamentos, componentes ou padrões a cada novo projeto. Ele
        traduz intenção de design em código testável e documenta as regras que
        garantem coerência entre os produtos Ybera.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        A camada de alinhamento
      </h2>
      <p className="doc-body text-muted-foreground">
        O Kaizen fica entre quem decide o produto, quem desenha e quem
        implementa. Em vez de cada disciplina manter sua própria fonte da
        verdade, todas convergem para o mesmo conjunto de tokens, componentes e
        diretrizes — reduzindo retrabalho, divergência visual e ambiguidade no
        handoff.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        O que você encontra aqui
      </h2>
      <BulletList
        items={[
          "Foundations — tokens de cor, tipografia, espaçamento, raio, elevação e motion que dão base a tudo.",
          "Components — biblioteca documentada de interface, com variantes, estados, props e acessibilidade.",
          "Patterns — composições reutilizáveis (checkout, dashboard, empty states) que resolvem problemas recorrentes.",
          "Accessibility — diretrizes práticas para interfaces inclusivas: contraste, foco, teclado, leitores de tela.",
          "Resources — Figma, pacote NPM e demais materiais de apoio para começar a produzir.",
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Para quem é
      </h2>
      <p className="doc-body text-muted-foreground">
        Para <strong>designers</strong>, o Kaizen é a biblioteca viva do Figma e
        a referência de regras visuais. Para <strong>desenvolvedores</strong>, é
        a fonte de tokens e componentes prontos para consumo. Os dois lados
        compartilham a mesma documentação, então as decisões ficam visíveis para
        toda a equipe.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Como navegar
      </h2>
      <p className="doc-body text-muted-foreground">
        Use a navegação lateral para circular entre as seções. Se você está
        começando agora, siga as rotas de entrada abaixo na ordem sugerida —
        elas levam da instalação ao fluxo de contribuição.
      </p>

      <h3 className="mt-8 mb-2 text-[1rem] font-medium text-foreground">
        Rotas de entrada
      </h3>
      <BulletList
        items={[
          "Instalação — configure o pacote e renderize seu primeiro componente.",
          "Design → Dev — entenda como o design vira código via tokens.",
          "Contribuição — proponha mudanças e ajude o sistema a evoluir.",
        ]}
      />
      <p className="doc-body">
        Comece pela <a href="/get-started/installation">Instalação</a>, depois
        entenda o fluxo de{" "}
        <a href="/get-started/design-to-dev">Design → Dev</a> e, quando quiser
        propor melhorias, veja a{" "}
        <a href="/get-started/contributing">Contribuição</a>.
      </p>

      <Callout variant="info" title={`Versão atual: ${siteConfig.version}`}>
        Esta documentação reflete a versão {siteConfig.version} do Kaizen. O
        sistema está em evolução contínua — consulte o{" "}
        <a href="/changelog">changelog</a> para acompanhar mudanças entre
        versões.
      </Callout>
    </StandardPage>
  );
}
