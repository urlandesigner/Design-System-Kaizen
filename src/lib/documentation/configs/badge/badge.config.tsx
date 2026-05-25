import { Badge } from "@/components/ui/badge";
import {
  BadgeAnatomyVisual,
  BadgePlaygroundPreview,
  BadgeSizePreview,
  BadgeTypeCompactPreview,
  BadgeTypeDefaultPreview,
  BadgeWithoutClosePreview,
  BadgeWithoutLeftIconPreview,
} from "@/lib/documentation/editorial/badge-doc-previews";
import { DocPlaygroundScene } from "@/lib/documentation/editorial/doc-playground-scene";
import { componentDocHeroDescription } from "@/lib/documentation/template/component-doc-template";
import type { ComponentDocConfig } from "@/lib/documentation/types/component-doc";

import { badgeBreadcrumb } from "./shared";

export const badgeDocConfig: ComponentDocConfig = {
  meta: {
    title: "Badge",
    description: componentDocHeroDescription(
      "Rótulo compacto para status, categorias e filtros removíveis.",
    ),
    category: "Components · Badge",
    breadcrumb: badgeBreadcrumb(),
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
        <DocPlaygroundScene contextLabel="Componente" contextValue="$badge">
          <BadgePlaygroundPreview />
        </DocPlaygroundScene>
      ),
      code: `<Badge type="brand" value="Premium" />
<Badge type="green" value="Ativo" />
<Badge type="red" value="Cancelado" size="compact" />`,
      anatomy: {
        parts: [
          { id: "container", label: "Container", variant: "container" },
          { id: "left-icon", label: "Left icon", variant: "label" },
          { id: "value", label: "Value", variant: "label" },
          { id: "close", label: "Close button", variant: "label" },
        ],
        notes: [
          { term: "Container", description: "Pill — rounded/full, surface e border por Type." },
          { term: "Left icon", description: "Dot sólido — opcional via leftIcon." },
          { term: "Close button", description: "Ícone close — opcional via closeButton." },
        ],
      },
    },
    {
      type: "variants",
      id: "variants",
      title: "Variants",
      groups: [
        {
          label: "Type · Size=Default",
          content: <BadgeTypeDefaultPreview />,
          align: "start",
        },
        {
          label: "Type · Size=Compact",
          content: <BadgeTypeCompactPreview />,
          align: "start",
        },
        {
          label: "Size · Type=Brand",
          content: <BadgeSizePreview type="brand" />,
          align: "start",
        },
        {
          label: "Sem leftIcon",
          content: <BadgeWithoutLeftIconPreview />,
          align: "start",
        },
        {
          label: "Sem closeButton",
          content: <BadgeWithoutClosePreview />,
          align: "start",
        },
      ],
    },
    {
      type: "anatomy",
      id: "anatomy",
      title: "Anatomy",
      description:
        "Partes do $badge (Figma node 3411:942). Listas de badges são composição de layout.",
      visual: <BadgeAnatomyVisual />,
      parts: [
        { id: "container", label: "Container", variant: "container" },
        { id: "left-icon", label: "Left icon (dot)", variant: "label" },
        { id: "value", label: "Value", variant: "label" },
        { id: "close", label: "Close button", variant: "label" },
      ],
      notes: [
        { term: "Container", description: "inline-flex, border-kz/25, rounded-kz/full." },
        { term: "Left icon", description: "20px — dot sólido, icon/badge/* por Type." },
        { term: "Value", description: "Label/md-regular ou sm-regular conforme Size." },
        { term: "Close button", description: "20px — ícone close, mesma cor do icon/badge." },
      ],
    },
    {
      type: "properties",
      id: "properties",
      title: "Properties",
      rows: [
        {
          name: "type",
          type: "Brand | Red | Amber | Green | Blue | Purple | Neutral | Disabled",
          defaultValue: "Brand",
          description: "Paleta semântica de superfície, borda, texto e ícones.",
        },
        {
          name: "size",
          type: "Default | Compact",
          defaultValue: "Default",
          description: "Default — text/md; Compact — text/sm e padding reduzido.",
        },
        {
          name: "value",
          type: "string",
          defaultValue: "Value",
          description: "Texto exibido no centro do badge.",
        },
        {
          name: "leftIcon",
          type: "boolean",
          defaultValue: "true",
          description: "Exibe o dot à esquerda.",
        },
        {
          name: "closeButton",
          type: "boolean",
          defaultValue: "true",
          description: "Exibe o botão de fechar à direita.",
        },
      ],
    },
    {
      type: "tokens",
      id: "tokens",
      title: "Tokens",
      rows: [
        { token: "color-theme/surface/badge/*", usage: "Fundo por Type" },
        { token: "color-theme/border/badge/*", usage: "Borda por Type" },
        { token: "color-theme/text/badge/*", usage: "Valor (label)" },
        { token: "color-theme/icon/badge/*", usage: "Dot e close" },
        { token: "border-kz/25", usage: "Espessura da borda" },
        { token: "rounded-kz/full", usage: "Formato pill" },
        { token: "space-kz/100", usage: "Padding horizontal — Default; label frame" },
        { token: "space-kz/50", usage: "Padding — Default vertical; Compact horizontal" },
        { token: "space-kz/500", usage: "Slot de ícone (20px)" },
        { token: "typography/text/md", usage: "Valor — Size=Default" },
        { token: "typography/text/sm", usage: "Valor — Size=Compact" },
        { token: "typography/leading/label/md", usage: "Line height — Default" },
        { token: "typography/leading/label/sm", usage: "Line height — Compact" },
        { token: "font-kz/400", usage: "Peso — Label/md-regular e sm-regular" },
        { token: "letterspacing-kz/0", usage: "Tracking" },
      ],
    },
    {
      type: "accessibility",
      id: "accessibility",
      title: "Accessibility",
      items: [
        "Badge informativo: preferir <span> sem interação; não usar role=\"button\" no container.",
        "closeButton: <button> com aria-label descritivo (ex.: \"Remover Premium\").",
        "Type=Disabled: botão close com disabled; container com pointer-events-none.",
        "Contraste mínimo 4.5:1 entre texto/ícones e superfície em todos os Types.",
        "Não depender só da cor — o value deve comunicar o significado.",
        "Em listas removíveis, anunciar remoção com aria-live quando aplicável.",
        "Foco visível apenas no botão close, não no pill inteiro.",
        "Evitar badges clicáveis inteiros quando há close — duas ações competindo.",
      ],
    },
    {
      type: "do-dont",
      id: "do-dont",
      title: "Do / Don't",
      doItems: [
        {
          label: "Type semântico",
          description: "Cor alinhada ao significado (ex.: Green = sucesso).",
          example: (
            <div className="badge-composition badge-composition--do">
              <Badge type="green" value="Confirmado" />
              <Badge type="red" value="Erro" />
            </div>
          ),
        },
        {
          label: "Texto curto",
          description: "Uma ou duas palavras no value.",
          example: <Badge type="blue" value="Novo" closeButton={false} />,
        },
      ],
      dontItems: [
        {
          label: "Value genérico",
          description: "Evite \"Value\" em produção.",
          example: <Badge type="brand" value="Value" />,
        },
        {
          label: "Type errado",
          description: "Não use Red para estado neutro.",
          example: <Badge type="red" value="Rascunho" />,
        },
      ],
    },
  ],
};
