import { Button } from "@/components/ui/button";
import type { ComponentDocConfig } from "@/lib/documentation/types/component-doc";

export const buttonDocConfig: ComponentDocConfig = {
  meta: {
    title: "Button",
    description:
      "Dispara ações primárias e secundárias. Use para confirmar, avançar ou executar tarefas com hierarquia clara.",
    category: "Components · UI",
    breadcrumb: [
      { label: "Components", href: "/components" },
      { label: "Button" },
    ],
  },
  sections: [
    {
      type: "preview",
      id: "preview",
      title: "Live preview",
      description: "Comportamento renderizado com os tokens atuais do sistema.",
      featured: true,
      showcase: true,
      align: "center",
      content: (
        <>
          <Button>Continuar</Button>
          <Button variant="secondary">Cancelar</Button>
          <Button variant="ghost">Saiba mais</Button>
        </>
      ),
    },
    {
      type: "variants",
      id: "variants",
      title: "Variants",
      description: "Conjunto estável — evite combinações fora desta lista.",
      groups: [
        {
          label: "Hierarchy",
          content: (
            <>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </>
          ),
        },
        {
          label: "Sizes",
          content: (
            <>
              <Button size="compact">Compact</Button>
              <Button size="default">Default</Button>
            </>
          ),
        },
        {
          label: "States",
          content: (
            <>
              <Button disabled>Disabled</Button>
              <Button variant="secondary" disabled>
                Disabled
              </Button>
            </>
          ),
        },
      ],
    },
    {
      type: "anatomy",
      id: "anatomy",
      title: "Anatomy",
      description: "Estrutura mínima do componente.",
      parts: [
        { id: "container", label: "Container", variant: "container" },
        { id: "label", label: "Label", variant: "label" },
      ],
      notes: [
        { term: "Container", description: "altura, radius, fundo" },
        { term: "Label", description: "tipografia e contraste" },
        {
          term: "Focus ring",
          description: "visível apenas no teclado",
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
          type: '"primary" | "secondary" | "ghost" | "destructive"',
          defaultValue: '"primary"',
          description: "Hierarquia visual da ação.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg"',
          defaultValue: '"md"',
          description: "Altura e padding do botão.",
        },
        {
          name: "disabled",
          type: "boolean",
          defaultValue: "false",
          description: "Remove interação.",
        },
        {
          name: "children",
          type: "ReactNode",
          description: "Rótulo ou ícone + rótulo.",
        },
      ],
    },
    {
      type: "tokens",
      id: "tokens",
      title: "Tokens",
      description: "Sempre tokens semânticos — nunca valores fixos.",
      rows: [
        { token: "color.brand", usage: "Fundo primary" },
        { token: "color.brand-foreground", usage: "Texto sobre brand" },
        { token: "color.surface-raised", usage: "Fundo secondary" },
        { token: "color.border", usage: "Contorno secondary" },
        { token: "radius.lg", usage: "Cantos do container" },
        { token: "spacing.3–5", usage: "Padding por size" },
        { token: "shadow.card", usage: "Profundidade filled" },
      ],
    },
    {
      type: "accessibility",
      id: "accessibility",
      title: "Accessibility",
      items: [
        "Use elemento button nativo para ações interativas.",
        "Rótulos descrevem a ação, não o componente.",
        "Contraste mínimo 4.5:1 em todas as variantes.",
        "Focus visible obrigatório para navegação por teclado.",
        "disabled remove interação e comunica estado ao leitor de tela.",
      ],
    },
    {
      type: "do-dont",
      id: "do-dont",
      title: "Do / Don't",
      doItems: [
        {
          label: "Uma primary por contexto",
          description: "Secundárias em secondary ou ghost.",
          example: (
            <>
              <Button size="default">Confirmar</Button>
              <Button size="default" variant="secondary">
                Voltar
              </Button>
            </>
          ),
        },
        {
          label: "Rótulo específico",
          description: "Descreva o resultado da ação.",
          example: <Button size="default">Enviar convite</Button>,
        },
      ],
      dontItems: [
        {
          label: "Duas primary competindo",
          description: "Quebra a hierarquia visual.",
          example: (
            <>
              <Button size="default">Salvar</Button>
              <Button size="default">Publicar</Button>
            </>
          ),
        },
        {
          label: "Rótulo genérico",
          description: 'Evite "OK" ou "Clique aqui".',
          example: <Button size="default">OK</Button>,
        },
      ],
    },
  ],
};
