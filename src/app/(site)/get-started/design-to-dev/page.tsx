import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { Callout } from "@/lib/documentation/editorial/callout";
import { StandardPage } from "@/lib/documentation/primitives/standard-page";

export const metadata: Metadata = {
  title: "Design → Dev",
  description:
    "Como o design vira código no Kaizen: tokens como fonte da verdade, handoff via Figma e paridade entre design e implementação.",
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Get Started</p>
        <h1 className="doc-title mt-4">Design → Dev</h1>
        <p className="doc-description">
          O caminho que uma decisão de design percorre até virar código — e como
          manter os dois lados sempre em sincronia.
        </p>
      </header>

      <p className="doc-body">
        No Kaizen, design e código não são artefatos paralelos: são duas
        representações da mesma fonte da verdade. Os tokens são o contrato entre
        as disciplinas. Quando uma decisão visual muda, ela muda no token — e
        propaga para todos os componentes, em ambos os lados.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Tokens como fonte da verdade
      </h2>
      <p className="doc-body text-muted-foreground">
        O fluxo é unidirecional e rastreável: as variáveis são definidas no
        Figma, exportadas como tokens e materializadas como CSS variables
        consumidas pelo Tailwind e pelos componentes.
      </p>
      <pre className="overflow-x-auto rounded-lg border border-[var(--kz-line)] bg-[var(--surface-sunken,transparent)] p-4 font-mono text-[0.8125rem]">
        <code>{`Figma (variables)  →  tokens.json  →  CSS vars / Tailwind  →  Componentes`}</code>
      </pre>
      <p className="doc-body text-muted-foreground">
        Nenhuma cor, espaçamento ou raio deve nascer direto no código: tudo
        começa como token. Isso garante que o que o designer vê no Figma é
        exatamente o que o desenvolvedor renderiza.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Convenção de nomes de token
      </h2>
      <p className="doc-body text-muted-foreground">
        Os tokens seguem uma nomenclatura previsível por domínio, o que torna o
        handoff legível dos dois lados:
      </p>
      <BulletList
        items={[
          "color-theme/* — cores semânticas de tema (ex.: color-theme/surface, color-theme/foreground).",
          "space-kz/* — escala de espaçamento (ex.: space-kz/2, space-kz/4).",
          "radius-kz/* — raios de borda padronizados.",
          "font-kz/* — famílias, tamanhos e pesos tipográficos.",
        ]}
      />
      <p className="doc-body text-muted-foreground">
        Prefira sempre o token <strong>semântico</strong> (o que algo significa,
        como <code>color-theme/foreground</code>) em vez do token primitivo (o
        valor cru). Tokens semânticos carregam intenção e se adaptam a tema e
        marca.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Handoff via Figma
      </h2>
      <p className="doc-body text-muted-foreground">
        A biblioteca de produção no Figma é o ponto de partida do handoff: ela
        carrega as variáveis, os componentes e os estados que correspondem 1:1
        ao código. Use-a como referência canônica de especificação.
      </p>
      <p className="doc-body">
        Acesse o arquivo em{" "}
        <a
          href={siteConfig.resources.figmaProduction}
          target="_blank"
          rel="noreferrer"
        >
          Figma (Production)
        </a>{" "}
        ou veja a página <a href="/resources/figma">Resources → Figma</a> para
        instruções de acesso.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Checklist de paridade design ↔ código
      </h2>
      <BulletList
        variant="checklist"
        items={[
          "Os valores visíveis vêm de tokens (sem cor ou espaçamento hardcoded)?",
          "Os nomes de token usados no código batem com os do Figma?",
          "Todos os estados (default, hover, focus, disabled) existem nos dois lados?",
          "As variantes do componente correspondem às do Figma?",
          "Light/dark e marcas alternativas foram verificados?",
          "Contraste e foco atendem às diretrizes de acessibilidade?",
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Boas práticas
      </h2>
      <BulletList
        items={[
          "Consuma tokens semânticos; nunca insira valores literais em componentes.",
          "Trate o token como a unidade de mudança: ajuste o token, não cada uso.",
          "Mantenha o nome do token alinhado entre Figma e código para handoff sem ambiguidade.",
          "Ao criar algo novo, verifique se um token existente já resolve antes de propor um novo.",
        ]}
      />

      <Callout variant="tip">
        Se você precisa de um valor que ainda não existe como token, isso
        normalmente é sinal de uma nova decisão de design — proponha o token via{" "}
        <a href="/get-started/contributing">Contribuição</a> em vez de
        hardcodar.
      </Callout>
    </StandardPage>
  );
}
