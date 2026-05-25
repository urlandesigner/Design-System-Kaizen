import { Button } from "@/components/ui/button";
import {
  ButtonComponentStatePreview,
  ButtonFilledTypesPreview,
} from "@/lib/documentation/editorial/button-doc-previews";
import { componentDocHeroDescription } from "@/lib/documentation/template/component-doc-template";
import type { ComponentDocConfig } from "@/lib/documentation/types/component-doc";

import { buttonBreadcrumb, PlusIcon } from "./shared";

export const buttonFilledDocConfig: ComponentDocConfig = {
  meta: {
    title: "Button Filled",
    description: componentDocHeroDescription(
      "Ação principal com fundo sólido ou contorno.",
    ),
    category: "Components · Button",
    breadcrumb: buttonBreadcrumb("Filled"),
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
        <>
          <Button iconRight={<PlusIcon />}>Continuar</Button>
          <Button variant="subtle" iconRight={<PlusIcon />}>
            Cancelar
          </Button>
        </>
      ),
      code: `<Button iconRight={<PlusIcon />}>Continuar</Button>
<Button variant="subtle" iconRight={<PlusIcon />}>Cancelar</Button>`,
      anatomy: {
        parts: [
          { id: "container", label: "Container", variant: "container" },
          { id: "label", label: "Label", variant: "label" },
          { id: "icon-right", label: "Right icon", variant: "label" },
        ],
        notes: [
          { term: "Container", description: "Superfície ou borda conforme o type visual." },
          { term: "Label", description: "Texto da ação — typography/text/md, semibold." },
          { term: "Right icon", description: "Slot opcional à direita." },
        ],
      },
    },
    {
      type: "variants",
      id: "variants",
      title: "Variants",
      groups: [
        {
          label: "Type",
          content: <ButtonFilledTypesPreview />,
          align: "center",
        },
        {
          label: "Size",
          content: (
            <>
              <Button size="default" iconRight={<PlusIcon />}>
                Default
              </Button>
              <Button size="compact" iconRight={<PlusIcon />}>
                Compact
              </Button>
            </>
          ),
          align: "center",
        },
        {
          label: "State",
          content: (
            <ButtonComponentStatePreview component="filled" visualType="primary" size="default" />
          ),
        },
      ],
    },
    {
      type: "properties",
      id: "properties",
      title: "Properties",
      rows: [
        {
          name: "variant",
          type: "primary | subtle | destructive | secondary",
          defaultValue: "primary",
          description: "Type visual do filled.",
        },
        {
          name: "size",
          type: "default | compact",
          defaultValue: "default",
          description: "Altura 40px ou 36px.",
        },
        {
          name: "disabled",
          type: "boolean",
          defaultValue: "false",
          description: "Remove interação e foco.",
        },
        {
          name: "iconRight",
          type: "ReactNode",
          description: "Ícone à direita do label.",
        },
      ],
    },
    {
      type: "tokens",
      id: "tokens",
      title: "Tokens",
      rows: [
        { token: "color-theme/surface/button/*", usage: "Fundo — type Brand" },
        { token: "color-theme/surface/action/*", usage: "Fundo — Subtle e Outline" },
        { token: "color-theme/surface/danger/*", usage: "Fundo — Danger" },
        { token: "rounded-theme/button-default", usage: "Radius do container" },
        { token: "space-kz/400", usage: "Padding horizontal" },
        { token: "typography/text/md", usage: "Label" },
      ],
    },
    {
      type: "accessibility",
      id: "accessibility",
      title: "Accessibility",
      items: [
        "Contraste mínimo 4.5:1 em todos os types.",
        "Focus visível em navegação por teclado.",
        "Labels descritivos — evite “Clique aqui”.",
        "Use elemento button para ações na página.",
        "Um CTA primário por contexto.",
      ],
    },
    {
      type: "do-dont",
      id: "do-dont",
      title: "Do / Don't",
      doItems: [
        {
          label: "Um primário por fluxo",
          description: "Brand para CTA; demais ações em subtle ou outline.",
          example: (
            <>
              <Button size="compact">Confirmar</Button>
              <Button size="compact" variant="subtle">
                Voltar
              </Button>
            </>
          ),
        },
        {
          label: "Label específica",
          description: "Descreva o resultado da ação.",
          example: <Button size="compact">Enviar convite</Button>,
        },
      ],
      dontItems: [
        {
          label: "Dois primários competindo",
          description: "Quebra hierarquia visual.",
          example: (
            <>
              <Button size="compact">Salvar</Button>
              <Button size="compact">Publicar</Button>
            </>
          ),
        },
        {
          label: "Ghost no lugar de filled",
          description: "Ghost é outro component type.",
          example: <Button variant="ghost">Finalizar</Button>,
        },
      ],
    },
  ],
};
