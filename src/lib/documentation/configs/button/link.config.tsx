import { ButtonLinkStatePreview } from "@/lib/documentation/editorial/button-doc-previews";
import { componentDocHeroDescription } from "@/lib/documentation/template/component-doc-template";
import type { ComponentDocConfig } from "@/lib/documentation/types/component-doc";

import { buttonBreadcrumb, ExternalLinkIcon } from "./shared";

function ButtonLinkPreview() {
  return (
    <button
      type="button"
      className="button-link-doc inline-flex items-center gap-[var(--space-kz-200)] text-[length:var(--typography-text-md)] leading-[var(--typography-leading-label-md)] font-semibold text-[var(--color-theme-text-action-default-dark)] underline"
    >
      <span>Abrir documentação</span>
      <span className="inline-flex size-[var(--space-kz-500)] shrink-0 [&_svg]:size-full">
        <ExternalLinkIcon />
      </span>
    </button>
  );
}

export const buttonLinkDocConfig: ComponentDocConfig = {
  meta: {
    title: "Button Link",
    description: componentDocHeroDescription("Ação inline contextual com underline."),
    category: "Components · Button",
    breadcrumb: buttonBreadcrumb("Link"),
  },
  sections: [
    {
      type: "preview",
      id: "preview",
      title: "Live preview",
      featured: true,
      showcase: true,
      align: "center",
      content: <ButtonLinkPreview />,
      code: `<ButtonLink href="…">Abrir documentação</ButtonLink>`,
      anatomy: {
        parts: [
          { id: "label", label: "Label", variant: "label" },
          { id: "icon", label: "Icon", variant: "label" },
        ],
        notes: [
          { term: "Label", description: "Sublinhado no estado enabled." },
          { term: "Icon", description: "External-link à direita." },
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
          content: <ButtonLinkStatePreview />,
        },
      ],
    },
    {
      type: "properties",
      id: "properties",
      title: "Properties",
      rows: [
        {
          name: "State",
          type: "enabled | hovered | selected | disabled",
          defaultValue: "enabled",
          description: "Estados interativos.",
        },
        {
          name: "Label",
          type: "string",
          description: "Texto da ação.",
        },
        {
          name: "Icon",
          type: "boolean",
          defaultValue: "true",
          description: "Exibe ícone external-link.",
        },
      ],
    },
    {
      type: "tokens",
      id: "tokens",
      title: "Tokens",
      rows: [
        { token: "color-theme/text/action/*", usage: "Label e estados" },
        { token: "typography/text/md", usage: "Tamanho" },
        { token: "font-kz/semibold", usage: "Peso" },
        { token: "space-kz/200", usage: "Gap label–ícone" },
      ],
    },
    {
      type: "accessibility",
      id: "accessibility",
      title: "Accessibility",
      items: [
        "Underline mantém affordance de link.",
        "Ícone não substitui o label.",
        "button para ação na página; anchor para URL.",
        "Focus visível.",
      ],
    },
    {
      type: "do-dont",
      id: "do-dont",
      title: "Do / Don't",
      doItems: [
        {
          label: "Ação inline",
          description: "Ver mais, abrir externo em contexto de texto.",
          example: <ButtonLinkPreview />,
        },
      ],
      dontItems: [
        {
          label: "CTA principal",
          description: "Use filled para submit ou confirmação.",
          example: <ButtonLinkPreview />,
        },
      ],
    },
  ],
};
