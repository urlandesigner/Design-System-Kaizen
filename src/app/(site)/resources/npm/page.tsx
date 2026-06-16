import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { Callout } from "@/lib/documentation/editorial/callout";
import { StandardPage } from "@/lib/documentation/primitives/standard-page";

export const metadata: Metadata = {
  title: "NPM — Resources",
  description: `Consumo do pacote ${siteConfig.resources.npmPackage} em código.`,
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Resources</p>
        <h1 className="doc-title mt-4">NPM</h1>
        <p className="doc-description">
          O pacote {siteConfig.resources.npmPackage} entrega os componentes do
          Kaizen prontos para uso na sua aplicação.
        </p>
      </header>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Instalação
      </h2>
      <p className="doc-body text-muted-foreground">
        Adicione o pacote ao seu projeto com o gerenciador de pacotes de sua
        preferência:
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg border border-[var(--kz-line)] bg-accent/40 px-4 py-3 text-sm">
        <code>npm install {siteConfig.resources.npmPackage}</code>
      </pre>

      <div className="mt-6">
        <a
          href={siteConfig.resources.npmUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--kz-line)] px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/50"
        >
          Ver no NPM
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Uso
      </h2>
      <p className="doc-body text-muted-foreground">
        Importe os componentes diretamente do pacote e utilize-os como qualquer
        componente React:
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg border border-[var(--kz-line)] bg-accent/40 px-4 py-3 text-sm">
        <code>{`import { Button } from "${siteConfig.resources.npmPackage}";

export function Example() {
  return <Button variant="primary">Continuar</Button>;
}`}</code>
      </pre>

      <Callout variant="warning" title="Status">
        O pacote {siteConfig.resources.npmPackage} ainda não está publicado
        publicamente no registro NPM. O comando de instalação acima passará a
        funcionar assim que a primeira versão for publicada.
      </Callout>
    </StandardPage>
  );
}
