import { InputField } from "@/components/ui/input";
import {
  InputAnatomyVisual,
  InputBasicStatePreview,
  InputPlaygroundPreview,
  InputTypesPreview,
} from "@/lib/documentation/editorial/input-doc-previews";
import { DocPlaygroundScene } from "@/lib/documentation/editorial/doc-playground-scene";
import { componentDocHeroDescription } from "@/lib/documentation/template/component-doc-template";
import type { ComponentDocConfig } from "@/lib/documentation/types/component-doc";

import { inputBreadcrumb } from "./shared";

export const inputDocConfig: ComponentDocConfig = {
  meta: {
    title: "Input",
    description: componentDocHeroDescription(
      "Campo de entrada para captura e edição de dados.",
    ),
    category: "Components · Input",
    breadcrumb: inputBreadcrumb(),
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
        <DocPlaygroundScene contextLabel="Componente" contextValue="$input-field">
          <InputPlaygroundPreview />
        </DocPlaygroundScene>
      ),
      code: `<InputField type="text" state="enabled" prefix="R$" suffix=",00" />
<InputField type="search" state="enabled" placeholder="Buscar…" iconRight={<SearchIcon />} />`,
      anatomy: {
        parts: [
          { id: "container", label: "Container", variant: "container" },
          { id: "prefix", label: "Prefix", variant: "label" },
          { id: "value", label: "Value / Placeholder", variant: "label" },
          { id: "suffix", label: "Suffix", variant: "label" },
          { id: "action", label: "Action ($button-ghost)", variant: "label" },
        ],
        notes: [
          { term: "Container", description: "Superfície, borda e padding — state define a cor da borda." },
          { term: "Prefix / Suffix", description: "Afixos de texto — Type=Text (Figma: prefixo, sufixo)." },
          { term: "Value / Placeholder", description: "Label/md-regular — typography/text/md." },
          { term: "Action", description: "Copy ou Search — $button-ghost + ícone à direita." },
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
          content: <InputTypesPreview />,
          align: "start",
        },
        {
          label: "State · Basic",
          content: <InputBasicStatePreview />,
          align: "start",
        },
        {
          label: "State · Text",
          content: (
            <div className="input-figma-states input-figma-states--doc input-figma-states--row">
              <InputField type="text" state="enabled" />
              <InputField type="text" state="selected" />
              <InputField type="text" state="filled" />
              <InputField type="text" state="error" />
              <InputField type="text" state="disabled" />
            </div>
          ),
          align: "start",
        },
      ],
    },
    {
      type: "anatomy",
      id: "anatomy",
      title: "Anatomy",
      description:
        "Partes do $input-field (Figma node 3410:3391). Label e mensagens de apoio são composição de formulário, fora deste componente.",
      visual: <InputAnatomyVisual />,
      parts: [
        { id: "container", label: "Container", variant: "container" },
        { id: "border", label: "Border", variant: "container" },
        { id: "prefix", label: "Prefix (prefixo)", variant: "label" },
        { id: "field", label: "Field", variant: "label" },
        { id: "placeholder", label: "Placeholder", variant: "label" },
        { id: "value", label: "Input value", variant: "label" },
        { id: "suffix", label: "Suffix (sufixo)", variant: "label" },
        { id: "icon-left", label: "Icon left", variant: "label" },
        { id: "icon-right", label: "Icon right", variant: "label" },
        { id: "action", label: "Ghost action", variant: "label" },
      ],
      notes: [
        { term: "Container", description: "surface/input/enabled, padding space-kz/300, radius rounded-kz/200." },
        { term: "Border", description: "border/input/* — Enabled, Selected, Filled, Error, Disabled." },
        { term: "Prefix / Suffix", description: "text/secondary-dark — apenas Type=Text." },
        { term: "Field", description: "Área flexível do valor ou placeholder." },
        { term: "Placeholder", description: "text/input/placeholder — State=Enabled." },
        { term: "Input value", description: "text/input/default ou disabled conforme o state." },
        { term: "Icon left / right", description: "icon/secondary-dark — Type=Icon." },
        { term: "Ghost action", description: "$button-ghost — Type=Copy (copy) ou Search (magnifying-glass)." },
      ],
    },
    {
      type: "properties",
      id: "properties",
      title: "Properties",
      rows: [
        {
          name: "type",
          type: "Basic | Text | Icon | Copy | Search",
          defaultValue: "Basic",
          description: "Variante estrutural do $input-field.",
        },
        {
          name: "state",
          type: "Enabled | Selected | Filled | Error | Disabled",
          defaultValue: "Enabled",
          description: "Selected = foco; Error = validação.",
        },
        {
          name: "placeholder",
          type: "string",
          defaultValue: "Placeholder",
          description: "Exibido em State=Enabled.",
        },
        {
          name: "value",
          type: "string",
          defaultValue: "Value",
          description: "Conteúdo em Selected, Filled, Error e Disabled.",
        },
        {
          name: "prefixo",
          type: "string",
          description: "Texto à esquerda — Type=Text.",
        },
        {
          name: "prefixo1",
          type: "boolean",
          defaultValue: "true",
          description: "Exibe prefixo (Type=Text).",
        },
        {
          name: "sufixo",
          type: "string",
          description: "Texto à direita — Type=Text.",
        },
        {
          name: "sufixo1",
          type: "boolean",
          defaultValue: "true",
          description: "Exibe sufixo (Type=Text).",
        },
        {
          name: "iconLeft",
          type: "boolean",
          defaultValue: "true",
          description: "Slot de ícone esquerdo — Type=Icon.",
        },
        {
          name: "iconRight",
          type: "boolean",
          defaultValue: "true",
          description: "Slot de ícone direito — Type=Icon.",
        },
      ],
    },
    {
      type: "tokens",
      id: "tokens",
      title: "Tokens",
      rows: [
        { token: "color-theme/surface/input/enabled", usage: "Fundo do container" },
        { token: "color-theme/border/input/*", usage: "Borda por state" },
        { token: "color-theme/text/input/placeholder", usage: "Placeholder — Enabled" },
        { token: "color-theme/text/input/default", usage: "Valor digitado" },
        { token: "color-theme/text/input/disabled", usage: "Valor — Disabled" },
        { token: "color-theme/text/secondary-dark", usage: "Prefix e suffix (Text)" },
        { token: "color-theme/icon/secondary-dark", usage: "Ícones — Type=Icon" },
        { token: "color-theme/icon/ghost/*", usage: "Ícone da ação Copy/Search" },
        { token: "space-kz/300", usage: "Padding interno" },
        { token: "space-kz/200", usage: "Gap entre afixos e campo" },
        { token: "rounded-kz/200", usage: "Radius do container" },
        { token: "border-kz/25", usage: "Espessura da borda" },
        { token: "typography/text/md", usage: "Tipografia do campo" },
        { token: "typography/leading/label/md", usage: "Line height" },
        { token: "font-kz/400", usage: "Peso — Label/md-regular" },
      ],
    },
    {
      type: "accessibility",
      id: "accessibility",
      title: "Accessibility",
      items: [
        "Associar <label htmlFor> ao input nativo em implementação.",
        "Focus visível — Selected mapeia borda border/input/selected.",
        "aria-invalid e aria-describedby para Error e mensagem de erro.",
        "Teclado: Tab para foco; não bloquear navegação em Disabled.",
        "Anunciar helper/erro com aria-live ou id referenciado.",
        "Contraste mínimo 4.5:1 em valor e placeholder.",
        "autocomplete e name adequados ao tipo de dado (email, tel, etc.).",
      ],
    },
    {
      type: "do-dont",
      id: "do-dont",
      title: "Do / Don't",
      doItems: [
        {
          label: "Label visível",
          description: "Composição de formulário com label dedicada.",
          example: (
            <div className="input-field-composition input-field-composition--do">
              <label className="input-field-composition-label" htmlFor="input-email-do">
                E-mail
              </label>
              <InputField type="basic" state="enabled" placeholder="nome@empresa.com" />
              <p className="input-field-composition-helper">Usamos apenas para contato da reserva.</p>
            </div>
          ),
        },
        {
          label: "Erro específico",
          description: "State=Error com mensagem clara abaixo do campo.",
          example: (
            <div className="input-field-composition input-field-composition--do">
              <label className="input-field-composition-label">CPF</label>
              <InputField type="basic" state="error" value="123" />
              <p className="input-field-composition-error">Informe os 11 dígitos do CPF.</p>
            </div>
          ),
        },
      ],
      dontItems: [
        {
          label: "Placeholder como label",
          description: "Placeholder não substitui label acessível.",
          example: (
            <div className="input-field-composition input-field-composition--dont">
              <InputField type="basic" state="enabled" placeholder="E-mail" />
            </div>
          ),
        },
        {
          label: "Mensagem vaga",
          description: "Evite erro genérico sem orientação.",
          example: (
            <div className="input-field-composition input-field-composition--dont">
              <InputField type="basic" state="error" value="abc" />
              <p className="input-field-composition-error">Dado inválido.</p>
            </div>
          ),
        },
      ],
    },
  ],
};
