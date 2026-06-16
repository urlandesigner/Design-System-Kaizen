import type { Metadata } from "next";

import { StandardPage } from "@/lib/documentation/primitives/standard-page";
import { Callout } from "@/lib/documentation/editorial/callout";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { AccessibilityChecklist } from "@/lib/documentation/primitives/accessibility-checklist";
import { DoDont } from "@/lib/documentation/editorial/do-dont";

export const metadata: Metadata = {
  title: "ARIA",
  description:
    "Como usar ARIA com responsabilidade no Kaizen — roles, states e properties sem quebrar a semântica nativa.",
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Accessibility</p>
        <h1 className="doc-title mt-4">ARIA</h1>
        <p className="doc-description">
          WAI-ARIA adiciona semântica que o HTML não oferece nativamente. É uma
          ferramenta poderosa — e perigosa: ARIA mal aplicado costuma deixar a
          interface menos acessível do que se nada tivesse sido feito.
        </p>
      </header>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        A primeira regra do ARIA
      </h2>
      <p className="doc-body">
        A primeira regra do ARIA é: <strong>não use ARIA</strong>. Se existe um
        elemento ou atributo HTML nativo que já fornece a semântica e o
        comportamento desejados, use-o. Um <code>&lt;button&gt;</code> é sempre
        melhor que <code>&lt;div role=&quot;button&quot;&gt;</code>, porque o
        nativo já entrega foco, teclado e anúncio corretos de graça.
      </p>

      <Callout variant="warning" title="Nenhum ARIA é melhor que ARIA ruim">
        ARIA não altera comportamento — só altera o que a tecnologia assistiva
        anuncia. Adicionar <code>role=&quot;button&quot;</code> a uma{" "}
        <code>&lt;div&gt;</code> faz o leitor de tela dizer &quot;botão&quot;,
        mas o elemento continua sem foco e sem resposta ao teclado, a menos que
        você reimplemente tudo manualmente.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Roles, states e properties
      </h2>
      <p className="doc-body">
        O ARIA se divide em três tipos de atributos:
      </p>
      <BulletList
        items={[
          "Roles definem o que um elemento é (role=\"dialog\", role=\"tablist\"). Não os use para recriar elementos nativos.",
          "States descrevem a condição atual e mudam com a interação (aria-expanded, aria-checked, aria-selected, aria-disabled).",
          "Properties descrevem características mais estáveis e relações (aria-label, aria-labelledby, aria-describedby, aria-controls).",
        ]}
      />

      <Callout variant="tip" title="Mantenha os states sincronizados">
        Um state de ARIA precisa refletir a realidade da interface a cada
        momento. Se um menu está aberto, <code>aria-expanded</code> deve ser{" "}
        <code>true</code>; ao fechar, volta a <code>false</code>. States
        desatualizados informam o usuário incorretamente.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Não redefina a semântica nativa
      </h2>
      <p className="doc-body">
        Nunca sobrescreva o papel implícito de um elemento nativo. Aplicar{" "}
        <code>role=&quot;heading&quot;</code> a um <code>&lt;button&gt;</code>,
        ou <code>role=&quot;presentation&quot;</code> a uma lista que carrega
        significado, confunde a tecnologia assistiva. Deixe o elemento certo
        fazer seu trabalho.
      </p>

      <DoDont
        doItems={[
          {
            label: "Botão nativo",
            description:
              "<button> já é focável, anunciado como botão e responde a teclado — sem ARIA.",
            example: (
              <div className="rounded-md bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700">
                &lt;button&gt;Salvar&lt;/button&gt;
              </div>
            ),
          },
          {
            label: "State sincronizado",
            description:
              "Um gatilho de menu reflete o estado real com aria-expanded.",
            example: (
              <div className="rounded-md bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700">
                &lt;button aria-expanded=&quot;true&quot;&gt;Menu&lt;/button&gt;
              </div>
            ),
          },
        ]}
        dontItems={[
          {
            label: "Div fingindo ser botão",
            description:
              "role=\"button\" numa div não dá foco nem teclado — você reimplementaria tudo à mão.",
            example: (
              <div className="rounded-md bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700">
                &lt;div role=&quot;button&quot;&gt;Salvar&lt;/div&gt;
              </div>
            ),
          },
          {
            label: "Redefinir semântica nativa",
            description:
              "Aplicar role=\"heading\" a um botão sobrescreve um papel que já estava correto.",
            example: (
              <div className="rounded-md bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700">
                &lt;button role=&quot;heading&quot;&gt;…&lt;/button&gt;
              </div>
            ),
          },
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Quando ARIA é a escolha certa
      </h2>
      <p className="doc-body text-muted-foreground">
        ARIA é indispensável para padrões que não têm equivalente nativo —
        diálogos modais, abas, comboboxes, regiões dinâmicas com{" "}
        <code>aria-live</code>, ou para nomear controles sem texto visível. Nesses
        casos, siga os padrões do WAI-ARIA Authoring Practices, que definem
        roles, states e o comportamento de teclado esperado para cada widget.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Checklist de ARIA
      </h2>
      <AccessibilityChecklist
        items={[
          "Verifiquei se um elemento HTML nativo resolve antes de recorrer a ARIA.",
          "Nenhuma role redefine a semântica de um elemento nativo já correto.",
          "States como aria-expanded e aria-checked refletem o estado real e atualizam na interação.",
          "Widgets compostos seguem o padrão WAI-ARIA Authoring Practices (roles + teclado).",
          "Controles sem texto visível recebem nome via aria-label ou aria-labelledby.",
          "Nenhum aria-hidden esconde um elemento focável.",
        ]}
      />
    </StandardPage>
  );
}
