import { Button } from "@/components/ui/button";
import { ButtonComponentStatePreview } from "@/lib/documentation/editorial/button-doc-previews";
import { componentDocHeroDescription } from "@/lib/documentation/template/component-doc-template";
import type { ComponentDocConfig } from "@/lib/documentation/types/component-doc";

import { buttonBreadcrumb, PlusIcon } from "./shared";

export const buttonGhostDocConfig: ComponentDocConfig = {
  meta: {
    title: "Button Ghost",
    description: componentDocHeroDescription("Ação secundária discreta, sem fundo sólido."),
    category: "Components · Button",
    breadcrumb: buttonBreadcrumb("Ghost"),
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
        <Button variant="ghost" iconLeft={<PlusIcon />} iconRight={<PlusIcon />}>
          Ver detalhes
        </Button>
      ),
      code: `<Button variant="ghost" iconLeft={<PlusIcon />} iconRight={<PlusIcon />}>
  Ver detalhes
</Button>`,
      anatomy: {
        parts: [
          { id: "label", label: "Label", variant: "label" },
          { id: "icon-left", label: "Left icon", variant: "label" },
          { id: "icon-right", label: "Right icon", variant: "label" },
        ],
        notes: [
          { term: "Label", description: "Texto sem container preenchido." },
          { term: "Icons", description: "Slots opcionais — tokens ghost/*." },
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
          content: <ButtonComponentStatePreview component="ghost" />,
        },
        {
          label: "Com ícones",
          content: (
            <Button variant="ghost" iconLeft={<PlusIcon />} iconRight={<PlusIcon />}>
              Button label
            </Button>
          ),
          align: "center",
        },
      ],
    },
    {
      type: "properties",
      id: "properties",
      title: "Properties",
      rows: [
        {
          name: "mode",
          type: "light | dark",
          defaultValue: "dark",
          description: "Contraste do label em fundos claros ou escuros.",
        },
        {
          name: "disabled",
          type: "boolean",
          defaultValue: "false",
          description: "Estado inativo.",
        },
        {
          name: "iconLeft",
          type: "ReactNode",
          description: "Ícone à esquerda.",
        },
        {
          name: "iconRight",
          type: "ReactNode",
          description: "Ícone à direita.",
        },
      ],
    },
    {
      type: "tokens",
      id: "tokens",
      title: "Tokens",
      rows: [
        { token: "color-theme/text/ghost/*", usage: "Label" },
        { token: "color-theme/icon/ghost/*", usage: "Ícones" },
        { token: "typography/text/md", usage: "Tamanho do label" },
        { token: "font-kz/semibold", usage: "Peso" },
      ],
    },
    {
      type: "accessibility",
      id: "accessibility",
      title: "Accessibility",
      items: [
        "Contraste mínimo 4.5:1 em light e dark mode.",
        "Focus visível — sem depender só da cor do texto.",
        "Ícones decorativos com aria-hidden.",
        "Não use como única ação primária do fluxo.",
      ],
    },
    {
      type: "do-dont",
      id: "do-dont",
      title: "Do / Don't",
      doItems: [
        {
          label: "Secundária ao lado do filled",
          description: "Cancelar, voltar, ver mais.",
          example: (
            <>
              <Button size="compact">Confirmar</Button>
              <Button size="compact" variant="ghost">
                Cancelar
              </Button>
            </>
          ),
        },
      ],
      dontItems: [
        {
          label: "Substituir CTA principal",
          description: "Use filled para ação primária.",
          example: <Button variant="ghost">Finalizar compra</Button>,
        },
      ],
    },
  ],
};
