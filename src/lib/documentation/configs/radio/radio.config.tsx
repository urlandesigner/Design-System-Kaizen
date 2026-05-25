import { Radio } from "@/components/ui/radio";
import {
  RadioAnatomyVisual,
  RadioDarkStatePreview,
  RadioLightStatePreview,
  RadioPlaygroundPreview,
  RadioWithoutLabelPreview,
} from "@/lib/documentation/editorial/radio-doc-previews";
import { RadioInteractivePreview } from "@/lib/documentation/editorial/radio-playground-interactive";
import { DocPlaygroundScene } from "@/lib/documentation/editorial/doc-playground-scene";
import { componentDocHeroDescription } from "@/lib/documentation/template/component-doc-template";
import type { ComponentDocConfig } from "@/lib/documentation/types/component-doc";

import { radioBreadcrumb } from "./shared";

export const radioDocConfig: ComponentDocConfig = {
  meta: {
    title: "Radio",
    description: componentDocHeroDescription(
      "Controle de seleção única em um grupo — uma opção ativa por vez.",
    ),
    category: "Components · Radio",
    breadcrumb: radioBreadcrumb(),
  },
  sections: [
    {
      type: "preview",
      id: "preview",
      title: "Live preview",
      featured: true,
      showcase: true,
      align: "center",
      content: (
        <DocPlaygroundScene contextLabel="Componente" contextValue="$radio">
          <RadioInteractivePreview />
        </DocPlaygroundScene>
      ),
      code: `<Radio mode="dark" state="selected" label="Cartão de crédito" />
<Radio mode="dark" state="enabled" label="PIX" />
<Radio mode="light" state="enabled" label="Boleto" />`,
      anatomy: {
        parts: [
          { id: "icon", label: "Icon", variant: "label" },
          { id: "label", label: "Label", variant: "label" },
        ],
        notes: [
          { term: "Icon", description: "20px — circle (vazio) ou circle-dot (Selected)." },
          { term: "Label", description: "Label/md-regular — opcional via label." },
        ],
      },
    },
    {
      type: "variants",
      id: "variants",
      title: "Variants",
      groups: [
        {
          label: "State · Mode=Dark",
          content: <RadioDarkStatePreview />,
          align: "start",
        },
        {
          label: "State · Mode=Light",
          content: <RadioLightStatePreview />,
          align: "start",
        },
        {
          label: "Sem label",
          content: <RadioWithoutLabelPreview />,
          align: "start",
        },
        {
          label: "Grupo (estático)",
          content: <RadioPlaygroundPreview />,
          align: "start",
        },
      ],
    },
    {
      type: "anatomy",
      id: "anatomy",
      title: "Anatomy",
      description:
        "Partes do $radio (Figma node 3602:953). Grupos radio com mesmo name ficam fora deste componente.",
      visual: <RadioAnatomyVisual />,
      parts: [
        { id: "icon", label: "Icon", variant: "label" },
        { id: "label", label: "Label (label1)", variant: "label" },
      ],
      notes: [
        { term: "Icon", description: "size space-kz/500 (20px) — circle ou circle-dot por state." },
        { term: "Label", description: "typography/text/md, font-kz/400, leading/label/md." },
        { term: "Layout", description: "flex row, gap space-kz/200, alinhamento central." },
      ],
    },
    {
      type: "properties",
      id: "properties",
      title: "Properties",
      rows: [
        {
          name: "mode",
          type: "Dark | Light",
          defaultValue: "Dark",
          description: "Tema de ícone e texto — superfícies claras ou escuras.",
        },
        {
          name: "state",
          type: "Enabled | Hovered | Selected | Disabled",
          defaultValue: "Enabled",
          description: "Selected = opção ativa no grupo.",
        },
        {
          name: "label",
          type: "boolean",
          defaultValue: "true",
          description: "Exibe o rótulo ao lado do ícone.",
        },
        {
          name: "label1",
          type: "string",
          defaultValue: "Label",
          description: "Texto do rótulo.",
        },
      ],
    },
    {
      type: "tokens",
      id: "tokens",
      title: "Tokens",
      rows: [
        { token: "color-theme/icon/action/default-dark", usage: "Ícone — Mode=Dark (Enabled, Hovered, Selected)" },
        { token: "color-theme/icon/action/disabled-dark", usage: "Ícone — Mode=Dark, Disabled" },
        { token: "color-theme/icon/action/default-light", usage: "Ícone — Mode=Light" },
        { token: "color-theme/icon/action/disabled-light", usage: "Ícone — Mode=Light, Disabled" },
        { token: "color-theme/text/action/default-dark", usage: "Label — Mode=Dark" },
        { token: "color-theme/text/action/disabled-dark", usage: "Label — Mode=Dark, Disabled" },
        { token: "color-theme/text/action/default-light", usage: "Label — Mode=Light" },
        { token: "color-theme/text/action/disabled-light", usage: "Label — Mode=Light, Disabled" },
        { token: "space-kz/200", usage: "Gap entre ícone e label" },
        { token: "space-kz/500", usage: "Tamanho do slot de ícone (20px)" },
        { token: "typography/text/md", usage: "Tipografia do label" },
        { token: "typography/leading/label/md", usage: "Line height do label" },
        { token: "font-kz/400", usage: "Peso — Label/md-regular" },
        { token: "letterspacing-kz/0", usage: "Tracking do label" },
      ],
    },
    {
      type: "accessibility",
      id: "accessibility",
      title: "Accessibility",
      items: [
        "Em produção, usar <input type=\"radio\"> nativo com o mesmo name no grupo.",
        "Associar <label htmlFor> ao input — área clicável inclui ícone e texto.",
        "Apenas um item Selected por grupo; aria-checked no item ativo.",
        "Focus visível no input nativo; Hovered é feedback visual no Figma.",
        "Disabled: input disabled ou aria-disabled no item correspondente.",
        "Grupos: fieldset + legend descrevendo o conjunto de opções.",
        "Contraste mínimo 4.5:1 entre label e fundo em ambos os modes.",
        "Não usar div clicável sem role radio — preferir input nativo.",
      ],
    },
    {
      type: "do-dont",
      id: "do-dont",
      title: "Do / Don't",
      doItems: [
        {
          label: "Grupo com name único",
          description: "Opções mutuamente exclusivas no mesmo name.",
          example: <RadioPlaygroundPreview />,
        },
        {
          label: "Label descritivo",
          description: "Texto identifica a opção sem ambiguidade.",
          example: <Radio mode="dark" state="selected" label="Entrega expressa" />,
        },
      ],
      dontItems: [
        {
          label: "Múltiplos Selected",
          description: "Radio não permite mais de uma seleção no grupo.",
          example: (
            <div className="radio-composition radio-composition--dont">
              <Radio mode="dark" state="selected" label="Opção A" />
              <Radio mode="dark" state="selected" label="Opção B" />
            </div>
          ),
        },
        {
          label: "Label genérico",
          description: "Evite \"Label\" em produção.",
          example: <Radio mode="dark" state="enabled" label="Label" />,
        },
      ],
    },
  ],
};
