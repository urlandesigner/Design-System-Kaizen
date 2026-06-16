import type { Metadata } from "next";

import { StandardPage } from "@/lib/documentation/primitives/standard-page";
import { Callout } from "@/lib/documentation/editorial/callout";
import { BulletList } from "@/lib/documentation/editorial/bullet-list";
import { AccessibilityChecklist } from "@/lib/documentation/primitives/accessibility-checklist";
import { DoDont } from "@/lib/documentation/editorial/do-dont";

export const metadata: Metadata = {
  title: "Alvos de toque",
  description:
    "Tamanho mínimo e espaçamento de alvos interativos para uso confortável e acessível no toque.",
};

export default function Page() {
  return (
    <StandardPage>
      <header className="doc-page-header pb-12">
        <p className="doc-eyebrow">Accessibility</p>
        <h1 className="doc-title mt-4">Alvos de toque</h1>
        <p className="doc-description">
          Alvos pequenos demais frustram qualquer pessoa em telas sensíveis ao
          toque, e excluem quem tem tremores, baixa precisão motora ou usa o
          produto em movimento. Dimensionar bem os alvos é acessibilidade básica.
        </p>
      </header>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Tamanho mínimo
      </h2>
      <p className="doc-body">
        O Kaizen adota <strong>44×44px</strong> como tamanho recomendado para
        alvos de toque — o mesmo valor das diretrizes do iOS Human Interface
        Guidelines e amplamente reconhecido como confortável. Esse é o padrão a
        ser seguido em botões, links de menu, ícones acionáveis e controles em
        geral.
      </p>
      <p className="doc-body text-muted-foreground">
        O mínimo absoluto definido pela WCAG 2.2 no critério{" "}
        <strong>2.5.8 (AA)</strong> é <strong>24×24px</strong>. Trate-o como
        piso de conformidade, não como meta: alvos entre 24 e 44px só são
        aceitáveis quando há espaçamento suficiente ao redor e não há espaço para
        crescer.
      </p>

      <Callout variant="tip" title="Área de toque ≠ tamanho visual">
        O alvo de toque pode ser maior que o elemento visível. Um ícone de 24px
        pode ter uma área clicável de 44px usando padding ou um pseudo-elemento
        — o usuário ganha conforto sem que o layout fique pesado visualmente.
      </Callout>

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Espaçamento entre alvos
      </h2>
      <p className="doc-body">
        Tão importante quanto o tamanho é a distância entre alvos. Controles
        muito próximos geram toques acidentais. Mantenha pelo menos 8px de
        espaçamento entre alvos adjacentes; quando um alvo for menor que 44px, o
        espaçamento ao redor é o que mantém a conformidade com o 2.5.8.
      </p>

      <DoDont
        doItems={[
          {
            label: "Alvo de 44×44 com espaçamento",
            description:
              "Tamanho confortável e folga entre os botões evitam toques errados.",
            example: (
              <div className="flex gap-2">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-900 text-xs text-white">
                  A
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-900 text-xs text-white">
                  B
                </span>
              </div>
            ),
          },
          {
            label: "Área clicável ampliada",
            description:
              "Um ícone pequeno com padding atinge 44px de área de toque sem mudar o visual.",
            example: (
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-100">
                <span className="flex h-5 w-5 items-center justify-center text-slate-700">
                  ✕
                </span>
              </span>
            ),
          },
        ]}
        dontItems={[
          {
            label: "Alvos minúsculos",
            description:
              "Alvos de ~20px são difíceis de acertar e reprovam no critério 2.5.8.",
            example: (
              <div className="flex gap-1">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-slate-900 text-[8px] text-white">
                  A
                </span>
                <span className="flex h-5 w-5 items-center justify-center rounded bg-slate-900 text-[8px] text-white">
                  B
                </span>
              </div>
            ),
          },
          {
            label: "Alvos colados",
            description:
              "Sem espaçamento, o usuário toca no controle errado com frequência.",
            example: (
              <div className="flex">
                <span className="flex h-9 w-9 items-center justify-center bg-slate-900 text-xs text-white">
                  A
                </span>
                <span className="flex h-9 w-9 items-center justify-center bg-slate-700 text-xs text-white">
                  B
                </span>
              </div>
            ),
          },
        ]}
      />

      <BulletList
        items={[
          "Use 44×44px como padrão para qualquer alvo interativo.",
          "24×24px é o mínimo absoluto do WCAG 2.2 (critério 2.5.8) — apenas com espaçamento adequado.",
          "Garanta ao menos 8px entre alvos adjacentes.",
          "Amplie a área de toque com padding sem necessariamente aumentar o visual.",
        ]}
      />

      <h2 className="mt-12 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground">
        Checklist de alvos de toque
      </h2>
      <AccessibilityChecklist
        items={[
          "Alvos interativos têm pelo menos 44×44px (ou 24×24px com espaçamento).",
          "Há no mínimo 8px de espaçamento entre alvos adjacentes.",
          "Ícones pequenos têm a área de toque ampliada por padding.",
          "Controles em listas e barras de ação não ficam colados uns aos outros.",
        ]}
      />
    </StandardPage>
  );
}
