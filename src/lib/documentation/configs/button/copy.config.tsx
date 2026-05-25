import { ButtonCopyStatePreview } from "@/lib/documentation/editorial/button-doc-previews";
import { DocPlaygroundScene } from "@/lib/documentation/editorial/doc-playground-scene";
import { componentDocHeroDescription } from "@/lib/documentation/template/component-doc-template";
import type { ComponentDocConfig } from "@/lib/documentation/types/component-doc";

import { buttonBreadcrumb, CopyIcon, ExternalLinkIcon } from "./shared";

function ButtonCopyPreview() {
  return (
    <button
      type="button"
      className="button-copy-doc group inline-flex items-center gap-[var(--space-kz-200)] text-[length:var(--typography-text-md)] leading-[var(--typography-leading-label-md)] font-semibold text-[var(--color-theme-text-ghost-enabled-dark)]"
    >
      <span>Copiar ID</span>
      <span className="inline-flex size-[var(--space-kz-500)] shrink-0 opacity-0 transition-opacity group-hover:opacity-100 [&_svg]:size-full">
        <CopyIcon />
      </span>
    </button>
  );
}

function ButtonCopyDontExample() {
  return (
    <div className="doc-do-dont-scene doc-do-dont-scene--dont">
      <span className="doc-do-dont-scene-hint">Copiar ID</span>
      <button
        type="button"
        className="inline-flex items-center gap-[var(--space-kz-200)] text-[length:var(--typography-text-md)] font-semibold text-[var(--color-theme-text-action-default-dark)] underline"
      >
        Abrir reserva
        <span className="inline-flex size-[var(--space-kz-500)] [&_svg]:size-full">
          <ExternalLinkIcon />
        </span>
      </button>
    </div>
  );
}

export const buttonCopyDocConfig: ComponentDocConfig = {
  meta: {
    title: "Button Copy",
    description: componentDocHeroDescription("Ação utilitária para copiar valores."),
    category: "Components · Button",
    breadcrumb: buttonBreadcrumb("Copy"),
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
        <DocPlaygroundScene contextValue="RES-28491">
          <ButtonCopyPreview />
        </DocPlaygroundScene>
      ),
      code: `<ButtonCopy value="RES-28491">Copiar ID</ButtonCopy>`,
      anatomy: {
        parts: [
          { id: "label", label: "Label", variant: "label" },
          { id: "copy-icon", label: "Copy icon", variant: "label" },
        ],
        notes: [
          { term: "Label", description: "Sem underline." },
          { term: "Copy icon", description: "Visível em hover e selected." },
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
          content: <ButtonCopyStatePreview />,
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
          description: "Texto exibido (ex.: Copiar ID).",
        },
        {
          name: "value",
          type: "string",
          description: "Conteúdo copiado para a área de transferência.",
        },
      ],
    },
    {
      type: "tokens",
      id: "tokens",
      title: "Tokens",
      rows: [
        { token: "color-theme/text/ghost/*", usage: "Label" },
        { token: "color-theme/icon/ghost/*", usage: "Ícone copy" },
        { token: "typography/text/md", usage: "Label" },
      ],
    },
    {
      type: "accessibility",
      id: "accessibility",
      title: "Accessibility",
      items: [
        "Anunciar sucesso após copiar (toast ou live region).",
        "Label indica o que será copiado.",
        "Focus visível sem depender do ícone no hover.",
        "Contraste mínimo 4.5:1.",
      ],
    },
    {
      type: "do-dont",
      id: "do-dont",
      title: "Do / Don't",
      doItems: [
        {
          label: "Copiar valor",
          description: "ID, código ou URL curta.",
          example: (
            <DocPlaygroundScene contextValue="RES-28491">
              <ButtonCopyPreview />
            </DocPlaygroundScene>
          ),
        },
      ],
      dontItems: [
        {
          label: "Navegação",
          description: "Use Link ou filled conforme hierarquia.",
          example: <ButtonCopyDontExample />,
        },
      ],
    },
  ],
};
