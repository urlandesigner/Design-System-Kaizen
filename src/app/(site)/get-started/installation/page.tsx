import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { Callout } from "@/lib/documentation/editorial/callout";
import { StandardPage } from "@/lib/documentation/primitives/standard-page";

export const metadata: Metadata = {
  title: "Instalação",
  description:
    "Como instalar o pacote do Kaizen, importar os tokens e renderizar seu primeiro componente.",
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Get Started</p>
        <h1 className="doc-title mt-4">Instalação</h1>
        <p className="doc-description">
          Adicione o Kaizen ao seu projeto, conecte os tokens e renderize um
          componente em poucos minutos.
        </p>
      </header>

      <Callout variant="warning" title="Pacote em distribuição interna">
        O pacote <code>{siteConfig.resources.npmPackage}</code> ainda não está
        publicado publicamente no registro NPM. Por enquanto ele é distribuído
        internamente na Ybera — solicite acesso ao registro privado da
        organização antes de instalar. Veja{" "}
        <a href="/resources/npm">Resources → NPM</a> para detalhes.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Pré-requisitos
      </h2>
      <BulletList
        items={[
          "Node.js 18 ou superior e um gerenciador de pacotes (npm, pnpm ou yarn).",
          "Um projeto React 18+ (Next.js App Router é o ambiente de referência).",
          "Acesso ao registro privado @ybera da organização.",
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Instalando o pacote
      </h2>
      <p className="doc-body text-muted-foreground">
        Instale o pacote com o gerenciador de sua preferência:
      </p>
      <pre className="overflow-x-auto rounded-lg border border-[var(--kz-line)] bg-[var(--surface-sunken,transparent)] p-4 font-mono text-[0.8125rem]">
        <code>{`# npm
npm install ${siteConfig.resources.npmPackage}

# pnpm
pnpm add ${siteConfig.resources.npmPackage}

# yarn
yarn add ${siteConfig.resources.npmPackage}`}</code>
      </pre>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Importando os tokens
      </h2>
      <p className="doc-body text-muted-foreground">
        Os tokens do Kaizen são distribuídos como CSS variables. Importe a folha
        de estilos uma única vez no ponto de entrada da aplicação (por exemplo,
        no <code>layout.tsx</code> raiz de um app Next.js). Isso registra as
        variáveis de tema e a base do Tailwind utilizadas pelos componentes.
      </p>
      <pre className="overflow-x-auto rounded-lg border border-[var(--kz-line)] bg-[var(--surface-sunken,transparent)] p-4 font-mono text-[0.8125rem]">
        <code>{`// app/layout.tsx
import "${siteConfig.resources.npmPackage}/styles.css";`}</code>
      </pre>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Uso mínimo
      </h2>
      <p className="doc-body text-muted-foreground">
        Com os estilos carregados, importe um componente e use-o diretamente.
        Exemplo com o <a href="/components/button">Button</a>:
      </p>
      <pre className="overflow-x-auto rounded-lg border border-[var(--kz-line)] bg-[var(--surface-sunken,transparent)] p-4 font-mono text-[0.8125rem]">
        <code>{`import { Button } from "${siteConfig.resources.npmPackage}";

export function Example() {
  return <Button variant="filled">Continuar</Button>;
}`}</code>
      </pre>

      <Callout variant="tip">
        Os componentes já consomem os tokens semânticos do tema, então
        respeitam automaticamente light/dark e a marca ativa. Você não precisa
        configurar cores manualmente — apenas garanta que o CSS de tokens foi
        importado.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Próximos passos
      </h2>
      <p className="doc-body">
        Veja a página de <a href="/resources/npm">NPM</a> para versões e notas de
        release, ou entenda como o design chega até esse código em{" "}
        <a href="/get-started/design-to-dev">Design → Dev</a>.
      </p>
    </StandardPage>
  );
}
