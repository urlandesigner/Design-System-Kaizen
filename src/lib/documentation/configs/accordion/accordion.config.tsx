import { AccordionCell } from "@/components/ui/accordion";
import {
  AccordionAnatomyVisual,
  AccordionListPreview,
  AccordionPlaygroundPreview,
  AccordionStatePreview,
  AccordionWithoutDividerPreview,
} from "@/lib/documentation/editorial/accordion-doc-previews";
import { AccordionInteractivePreview } from "@/lib/documentation/editorial/accordion-playground-interactive";
import { DocPlaygroundScene } from "@/lib/documentation/editorial/doc-playground-scene";
import { componentDocHeroDescription } from "@/lib/documentation/template/component-doc-template";
import type { ComponentDocConfig } from "@/lib/documentation/types/component-doc";

import { accordionBreadcrumb } from "./shared";

export const accordionDocConfig: ComponentDocConfig = {
  meta: {
    title: "Accordion",
    description: componentDocHeroDescription(
      "Célula expansível para revelar conteúdo secundário sob um rótulo acionável.",
    ),
    category: "Components · Accordion",
    breadcrumb: accordionBreadcrumb(),
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
        <DocPlaygroundScene contextLabel="Componente" contextValue="$accordion-cells-default">
          <AccordionInteractivePreview />
        </DocPlaygroundScene>
      ),
      code: `<AccordionCell state="enabled" label="Política de cancelamento" />
<AccordionCell state="selected" label="Detalhes da reserva" copy="…" />
<AccordionCell state="disabled" label="Indisponível" />`,
      anatomy: {
        parts: [
          { id: "content", label: "Content", variant: "container" },
          { id: "label", label: "Label", variant: "label" },
          { id: "icon", label: "Icon", variant: "label" },
          { id: "copy", label: "Copy", variant: "label" },
          { id: "divider", label: "Divider", variant: "container" },
        ],
        notes: [
          { term: "Content", description: "Cabeçalho — label + chevron, py space-kz/500." },
          { term: "Copy", description: "Paragraphy/md-regular — visível em State=Selected." },
          { term: "Divider", description: "$divider horizontal Primary — opcional." },
        ],
      },
    },
    {
      type: "variants",
      id: "variants",
      title: "Variants",
      groups: [
        {
          label: "State",
          content: <AccordionStatePreview />,
          align: "start",
        },
        {
          label: "Lista composta",
          content: <AccordionListPreview />,
          align: "start",
        },
        {
          label: "Sem divider",
          content: <AccordionWithoutDividerPreview />,
          align: "start",
        },
        {
          label: "Playground estático",
          content: <AccordionPlaygroundPreview />,
          align: "start",
        },
      ],
    },
    {
      type: "anatomy",
      id: "anatomy",
      title: "Anatomy",
      description:
        "Partes do $accordion-cells-default (Figma node 3431:4729). Agrupamentos de múltiplas células são composição de lista.",
      visual: <AccordionAnatomyVisual />,
      parts: [
        { id: "content", label: "Content", variant: "container" },
        { id: "label", label: "Label", variant: "label" },
        { id: "icon", label: "Icon (chevron)", variant: "label" },
        { id: "copy", label: "Copy", variant: "label" },
        { id: "divider", label: "Divider", variant: "container" },
      ],
      notes: [
        { term: "Content", description: "flex row, gap space-kz/600, py space-kz/500." },
        { term: "Label", description: "Label/md-semibold — font-kz/600, typography/text/md." },
        { term: "Icon", description: "20px — chevron-down (colapsado) ou chevron-up (Selected)." },
        { term: "Copy", description: "Paragraphy/md-regular — text/secondary-dark, pb space-kz/500." },
        { term: "Divider", description: "$divider Direction=Horizontal, Tone=Primary." },
      ],
    },
    {
      type: "properties",
      id: "properties",
      title: "Properties",
      rows: [
        {
          name: "state",
          type: "Enabled | Hovered | Selected | Disabled",
          defaultValue: "Enabled",
          description: "Selected expande o copy; Hovered sublinha o label.",
        },
        {
          name: "label",
          type: "string",
          defaultValue: "Accordion label",
          description: "Rótulo do cabeçalho.",
        },
        {
          name: "copy",
          type: "string",
          defaultValue: "Lorem ipsum…",
          description: "Conteúdo expandido — visível em State=Selected.",
        },
        {
          name: "divider",
          type: "boolean",
          defaultValue: "true",
          description: "Exibe o divisor horizontal abaixo da célula.",
        },
      ],
    },
    {
      type: "tokens",
      id: "tokens",
      title: "Tokens",
      rows: [
        { token: "color-theme/text/action/default-dark", usage: "Label — Enabled, Hovered, Selected" },
        { token: "color-theme/text/action/disabled-dark", usage: "Label — Disabled" },
        { token: "color-theme/text/secondary-dark", usage: "Copy — State=Selected" },
        { token: "color-theme/icon/action/default-dark", usage: "Chevron — Enabled, Hovered, Selected" },
        { token: "color-theme/icon/action/disabled-dark", usage: "Chevron — Disabled" },
        { token: "color-theme/border/primary", usage: "Divider — Tone=Primary" },
        { token: "space-kz/600", usage: "Gap entre label e ícone" },
        { token: "space-kz/500", usage: "Padding vertical do cabeçalho e copy" },
        { token: "typography/text/md", usage: "Tamanho do label e copy" },
        { token: "typography/leading/label/md", usage: "Line height do label" },
        { token: "typography/leading/paragraphy/md", usage: "Line height do copy" },
        { token: "font-kz/600", usage: "Peso — Label/md-semibold" },
        { token: "font-kz/400", usage: "Peso — Paragraphy/md-regular" },
        { token: "letterspacing-kz/0", usage: "Tracking" },
      ],
    },
    {
      type: "accessibility",
      id: "accessibility",
      title: "Accessibility",
      items: [
        "Em produção, o cabeçalho deve ser <button> com aria-expanded e aria-controls apontando para o painel.",
        "O painel expandido usa id único referenciado por aria-controls.",
        "Teclado: Enter/Space alterna expansão; setas opcionais em accordion com múltiplos itens.",
        "State=Disabled: aria-disabled ou botão disabled — sem interação.",
        "Não aninhar botões (cabeçalho interativo + célula estática).",
        "Contraste mínimo 4.5:1 no label e no copy sobre o fundo.",
        "Evitar expandir apenas com ícone — toda a área do cabeçalho é clicável.",
        "Listas: agrupar com role=\"group\" ou estrutura de headings quando fizer sentido.",
      ],
    },
    {
      type: "do-dont",
      id: "do-dont",
      title: "Do / Don't",
      doItems: [
        {
          label: "Label descritivo",
          description: "O rótulo resume o conteúdo oculto.",
          example: (
            <div className="accordion-composition accordion-composition--do">
              <AccordionCell state="enabled" label="Política de cancelamento" />
            </div>
          ),
        },
        {
          label: "Copy conciso",
          description: "Texto de apoio direto quando expandido.",
          example: (
            <AccordionCell
              state="selected"
              label="Check-in"
              copy="A partir das 15h. Documento com foto na recepção."
            />
          ),
        },
      ],
      dontItems: [
        {
          label: "Label genérico",
          description: "Evite \"Accordion label\" em produção.",
          example: <AccordionCell state="enabled" label="Accordion label" />,
        },
        {
          label: "Múltiplos abertos sem intenção",
          description: "Em fluxos lineares, prefira um item expandido por vez.",
          example: (
            <div className="accordion-composition accordion-composition--dont">
              <AccordionCell state="selected" label="Item A" />
              <AccordionCell state="selected" label="Item B" />
            </div>
          ),
        },
      ],
    },
  ],
};
