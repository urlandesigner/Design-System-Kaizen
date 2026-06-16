import type { Metadata } from "next";

import { StandardPage } from "@/lib/documentation/primitives/standard-page";
import { Callout } from "@/lib/documentation/editorial/callout";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { AccessibilityChecklist } from "@/lib/documentation/primitives/accessibility-checklist";
import { DoDont } from "@/lib/documentation/editorial/do-dont";

export const metadata: Metadata = {
  title: "Estados de foco",
  description:
    "O foco precisa estar sempre visível. Diretrizes para :focus-visible e anéis de foco com contraste suficiente no Kaizen.",
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Accessibility</p>
        <h1 className="doc-title mt-4">Estados de foco</h1>
        <p className="doc-description">
          Quem navega por teclado precisa saber, a todo momento, onde está o
          foco. Um indicador de foco visível é o equivalente do cursor para o
          mouse — sem ele, a interface fica inutilizável.
        </p>
      </header>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        O foco precisa estar sempre visível
      </h2>
      <p className="doc-body">
        O critério <strong>2.4.7</strong> exige que qualquer elemento que receba
        foco por teclado tenha um indicador visível. No Kaizen, todo componente
        interativo carrega um anel de foco consistente — nunca o remova sem
        substituir por algo igualmente claro.
      </p>

      <Callout variant="warning" title="Nunca use outline: none sozinho">
        Remover o outline padrão sem oferecer um substituto visível é a forma
        mais comum de quebrar a acessibilidade. Se o anel padrão não combina com
        o design, troque a aparência — não a presença.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Use :focus-visible
      </h2>
      <p className="doc-body">
        Prefira a pseudo-classe <code>:focus-visible</code> em vez de{" "}
        <code>:focus</code>. Ela mostra o anel de foco quando o navegador
        infere navegação por teclado, mas o omite em cliques de mouse — evitando
        o anel &quot;preso&quot; após clicar num botão, sem nunca penalizar quem
        usa teclado.
      </p>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Contraste do anel de foco
      </h2>
      <p className="doc-body">
        O indicador de foco é um componente de interface e, portanto, deve ter
        contraste de no mínimo <strong>3:1</strong> contra o fundo adjacente
        (critério 1.4.11). Um anel claro sobre fundo claro, ou escuro sobre
        escuro, não atende ao requisito. Garanta espessura suficiente (ao menos
        2px) e separação do elemento para que o anel seja perceptível.
      </p>

      <DoDont
        doItems={[
          {
            label: "Foco visível com bom contraste",
            description:
              "Anel de foco nítido, com ao menos 2px e contraste ≥ 3:1 contra o fundo.",
            example: (
              <div className="flex justify-center bg-white p-3">
                <span className="rounded-md bg-slate-900 px-3 py-1.5 text-sm text-white outline outline-2 outline-offset-2 outline-blue-600">
                  Botão focado
                </span>
              </div>
            ),
          },
          {
            label: "Use :focus-visible",
            description:
              "Mostre o anel na navegação por teclado e omita no clique de mouse, sem nunca removê-lo do teclado.",
            example: (
              <div className="rounded-md bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700">
                :focus-visible &#123; outline: 2px solid; &#125;
              </div>
            ),
          },
        ]}
        dontItems={[
          {
            label: "Outline removido",
            description:
              "Sem indicador, é impossível saber onde está o foco ao navegar por teclado.",
            example: (
              <div className="flex justify-center bg-white p-3">
                <span className="rounded-md bg-slate-900 px-3 py-1.5 text-sm text-white outline-none">
                  Botão sem foco
                </span>
              </div>
            ),
          },
          {
            label: "Anel sem contraste",
            description:
              "Um anel claro sobre fundo claro fica imperceptível e reprova no 1.4.11.",
            example: (
              <div className="flex justify-center bg-white p-3">
                <span className="rounded-md bg-white px-3 py-1.5 text-sm text-slate-700 outline outline-2 outline-offset-2 outline-gray-100">
                  Foco invisível
                </span>
              </div>
            ),
          },
        ]}
      />

      <Callout variant="tip" title="Não dependa do hover">
        Estados de <code>:hover</code> não ajudam quem usa teclado, pois não há
        ponteiro. O foco deve ser, no mínimo, tão visível quanto o hover — e
        idealmente distinto dele.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Princípios
      </h2>
      <BulletList
        items={[
          "Todo elemento focável tem um indicador visível — sem exceções.",
          "O indicador de foco se distingue claramente dos estados de hover e selecionado.",
          "Use :focus-visible para um comportamento natural entre teclado e mouse.",
          "Ao mover o foco por código (ex.: abrir modal), garanta que o destino seja visível na viewport.",
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Checklist de foco
      </h2>
      <AccessibilityChecklist
        items={[
          "Cada elemento interativo exibe um indicador de foco visível.",
          "O outline padrão nunca é removido sem um substituto claro.",
          "O anel de foco tem contraste ≥ 3:1 contra o fundo adjacente.",
          "O foco é implementado com :focus-visible quando apropriado.",
          "O indicador de foco é distinto do estado de hover.",
        ]}
      />
    </StandardPage>
  );
}
