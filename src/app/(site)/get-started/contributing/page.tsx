import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { Callout } from "@/lib/documentation/editorial/callout";
import { StandardPage } from "@/lib/documentation/primitives/standard-page";

export const metadata: Metadata = {
  title: "Contribuição",
  description:
    "Como propor mudanças no Kaizen: fluxo de issue a changelog, critérios de aceite e convenções de commit.",
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Get Started</p>
        <h1 className="doc-title mt-4">Contribuição</h1>
        <p className="doc-description">
          O Kaizen evolui com a comunidade Ybera. Veja como propor, discutir e
          entregar mudanças que mantêm o sistema coerente.
        </p>
      </header>

      <p className="doc-body">
        Toda contribuição — um token novo, um ajuste de componente ou uma
        correção de documentação — passa por um fluxo aberto e rastreável. O
        objetivo não é burocracia, e sim garantir que cada mudança preserve a
        consistência que torna o sistema útil.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Como propor uma mudança
      </h2>
      <p className="doc-body text-muted-foreground">
        Comece sempre por uma issue descrevendo o problema ou a oportunidade —
        antes de escrever código. Isso permite alinhar a abordagem com os
        mantenedores e evita retrabalho.
      </p>
      <p className="doc-body">
        <a
          href={siteConfig.issueTrackerUrl}
          target="_blank"
          rel="noreferrer"
        >
          Abrir uma nova issue
        </a>{" "}
        ou explorar o{" "}
        <a href={siteConfig.repositoryUrl} target="_blank" rel="noreferrer">
          repositório no GitHub
        </a>
        .
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        O fluxo
      </h2>
      <BulletList
        items={[
          "Issue — descreva o problema, o contexto e o resultado esperado.",
          "Discussão — alinhe a abordagem com os mantenedores antes de implementar.",
          "PR — abra um pull request pequeno e focado, referenciando a issue.",
          "Review — passe pela revisão de código, design e acessibilidade.",
          "Changelog — toda mudança aceita é registrada na nova versão.",
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Critérios de aceite
      </h2>
      <p className="doc-body text-muted-foreground">
        Um PR só é aprovado quando atende a estes critérios:
      </p>
      <BulletList
        variant="checklist"
        items={[
          "Acessibilidade — contraste, foco, navegação por teclado e suporte a leitores de tela.",
          "Tokens — usa tokens semânticos; nada de valores hardcoded.",
          "Documentação — variantes, estados, props e exemplos atualizados.",
          "Do / Don't — orientações de uso correto e usos a evitar quando aplicável.",
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Convenção de commits e branches
      </h2>
      <p className="doc-body text-muted-foreground">
        Use Conventional Commits e nomes de branch descritivos com prefixo de
        tipo:
      </p>
      <pre className="overflow-x-auto rounded-lg border border-[var(--kz-line)] bg-[var(--surface-sunken,transparent)] p-4 font-mono text-[0.8125rem]">
        <code>{`# Commits
feat(button): adiciona variante ghost
fix(input): corrige contraste do placeholder
docs(get-started): atualiza guia de instalação

# Branches
feat/button-ghost-variant
fix/input-placeholder-contrast`}</code>
      </pre>
      <p className="doc-body text-muted-foreground">
        Os tipos mais comuns são <code>feat</code>, <code>fix</code>,{" "}
        <code>docs</code>, <code>refactor</code> e <code>chore</code>. Escopos
        ajudam a localizar a área afetada (componente, foundation, etc.).
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Relação com a Governança
      </h2>
      <p className="doc-body">
        Mudanças estruturais — novos tokens, depreciações ou alterações que
        quebram compatibilidade — seguem as regras definidas em{" "}
        <a href="/governance">Governança</a>, que descreve papéis, versionamento
        e o processo de decisão do sistema.
      </p>

      <Callout variant="info">
        Em dúvida sobre o tamanho ou o impacto de uma mudança? Abra a issue
        mesmo assim. É melhor discutir cedo do que descobrir tarde que a
        proposta conflita com uma diretriz do sistema.
      </Callout>
    </StandardPage>
  );
}
