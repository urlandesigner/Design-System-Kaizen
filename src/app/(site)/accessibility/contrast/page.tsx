import type { Metadata } from "next";

import { StandardPage } from "@/lib/documentation/primitives/standard-page";
import { Callout } from "@/lib/documentation/editorial/callout";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { AccessibilityChecklist } from "@/lib/documentation/primitives/accessibility-checklist";
import { DoDont } from "@/lib/documentation/editorial/do-dont";

export const metadata: Metadata = {
  title: "Contraste de cor",
  description:
    "Requisitos de contraste WCAG 2.1 AA para texto, ícones e componentes de interface no Kaizen.",
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Accessibility</p>
        <h1 className="doc-title mt-4">Contraste de cor</h1>
        <p className="doc-description">
          Contraste suficiente garante que o conteúdo seja legível por pessoas
          com baixa visão, daltonismo ou em condições adversas de iluminação. É
          um dos critérios mais frequentemente violados — e um dos mais fáceis de
          corrigir.
        </p>
      </header>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Requisitos WCAG
      </h2>
      <p className="doc-body">
        A razão de contraste é calculada entre a luminância do primeiro plano e
        do fundo, variando de <code>1:1</code> (sem contraste) a{" "}
        <code>21:1</code> (preto sobre branco). O Kaizen exige no mínimo o nível
        AA.
      </p>

      <h3 className="mt-8 mb-2 text-[1rem] font-medium text-foreground">
        Texto
      </h3>
      <BulletList
        items={[
          "Texto normal (até 18px, ou 14px em negrito): mínimo 4.5:1 (AA, critério 1.4.3).",
          "Texto grande (a partir de 24px, ou 18.66px em negrito): mínimo 3:1 (AA).",
          "Nível AAA (1.4.6): 7:1 para texto normal e 4.5:1 para texto grande.",
        ]}
      />

      <h3 className="mt-8 mb-2 text-[1rem] font-medium text-foreground">
        Componentes e elementos gráficos
      </h3>
      <BulletList
        items={[
          "Componentes de interface (bordas de inputs, controles, anéis de foco): mínimo 3:1 contra o entorno (1.4.11).",
          "Ícones e gráficos que transmitem informação: mínimo 3:1 (1.4.11).",
          "Elementos puramente decorativos e estados desabilitados não têm exigência de contraste.",
        ]}
      />

      <Callout variant="info" title="Matriz de contraste pronta">
        Os tokens de cor do Kaizen já foram validados em pares aprovados. A
        matriz completa de combinações de texto e fundo, com a razão de cada par,
        está documentada em{" "}
        <a
          href="/foundations/colors"
          className="font-medium underline underline-offset-4"
        >
          Foundations · Colors
        </a>
        . Sempre que possível, escolha pares dessa matriz em vez de combinar
        cores manualmente.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Cor nunca é o único indicador
      </h2>
      <p className="doc-body">
        Contraste resolve a legibilidade, mas não resolve a percepção de pessoas
        com daltonismo. O critério <strong>1.4.1</strong> exige que nenhuma
        informação seja transmitida exclusivamente por cor. Sempre combine cor
        com texto, ícone, padrão ou posição.
      </p>

      <DoDont
        doItems={[
          {
            label: "Reforce o estado com texto e ícone",
            description:
              "Combine a cor com um rótulo e/ou ícone para que o significado não dependa da percepção de cor.",
            example: (
              <div className="flex items-center gap-2 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
                <span aria-hidden="true">⚠</span>
                <span>Erro: e-mail inválido</span>
              </div>
            ),
          },
          {
            label: "Use pares de cor validados",
            description:
              "Escolha combinações da matriz de contraste dos tokens, com razão ≥ 4.5:1 para texto.",
            example: (
              <div className="rounded-md bg-slate-900 px-3 py-2 text-sm text-white">
                Texto legível
              </div>
            ),
          },
        ]}
        dontItems={[
          {
            label: "Comunicar apenas pela cor",
            description:
              "Um campo que fica só vermelho não comunica nada para quem não distingue vermelho de verde.",
            example: (
              <div className="rounded-md border-2 border-red-500 px-3 py-2 text-sm text-slate-700">
                seu@email
              </div>
            ),
          },
          {
            label: "Texto cinza-claro sobre branco",
            description:
              "Contraste abaixo de 4.5:1 é ilegível para muitas pessoas e reprova no AA.",
            example: (
              <div className="rounded-md bg-white px-3 py-2 text-sm text-gray-300">
                Texto quase invisível
              </div>
            ),
          },
        ]}
      />

      <Callout variant="warning" title="Cuidado com texto sobre imagem">
        Texto colocado sobre fotos ou gradientes precisa manter o contraste em
        toda a área. Use uma camada de sobreposição (overlay) sólida ou um
        gradiente de proteção atrás do texto para garantir a razão mínima
        independentemente da imagem.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Checklist de contraste
      </h2>
      <AccessibilityChecklist
        items={[
          "Texto normal atinge no mínimo 4.5:1 contra o fundo.",
          "Texto grande atinge no mínimo 3:1 contra o fundo.",
          "Bordas de inputs, ícones informativos e anéis de foco atingem 3:1.",
          "Nenhuma informação depende exclusivamente da cor.",
          "Pares de cor vêm da matriz validada em Foundations · Colors.",
          "Texto sobre imagem mantém contraste com overlay de proteção.",
        ]}
      />
    </StandardPage>
  );
}
