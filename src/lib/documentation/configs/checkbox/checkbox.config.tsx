import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckboxAnatomyVisual,
  CheckboxDarkStatePreview,
  CheckboxLightStatePreview,
  CheckboxPlaygroundPreview,
  CheckboxWithoutLabelPreview,
} from "@/lib/documentation/editorial/checkbox-doc-previews";
import { DocPlaygroundScene } from "@/lib/documentation/editorial/doc-playground-scene";
import { componentDocHeroDescription } from "@/lib/documentation/template/component-doc-template";
import type { ComponentDocConfig } from "@/lib/documentation/types/component-doc";

import { checkboxBreadcrumb } from "./shared";

export const checkboxDocConfig: ComponentDocConfig = {
  meta: {
    title: "Checkbox",
    description: componentDocHeroDescription(
      "Controle de seleção binária ou indeterminada com rótulo opcional.",
    ),
    category: "Components · Checkbox",
    breadcrumb: checkboxBreadcrumb(),
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
        <DocPlaygroundScene contextLabel="Componente" contextValue="$checkbox">
          <CheckboxPlaygroundPreview />
        </DocPlaygroundScene>
      ),
      code: `<Checkbox mode="dark" state="enabled" label="Aceito os termos" />
<Checkbox mode="dark" state="selected" label="Notificações por e-mail" />
<Checkbox mode="dark" state="indeterminate" label="Selecionar todos" />`,
      anatomy: {
        parts: [
          { id: "icon", label: "Icon", variant: "label" },
          { id: "label", label: "Label", variant: "label" },
        ],
        notes: [
          { term: "Icon", description: "20px — square, square-check ou square-minus conforme o state." },
          { term: "Label", description: "Label/md-regular — opcional via checkboxLabel." },
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
          content: <CheckboxDarkStatePreview />,
          align: "start",
        },
        {
          label: "State · Mode=Light",
          content: <CheckboxLightStatePreview />,
          align: "start",
        },
        {
          label: "Sem label",
          content: <CheckboxWithoutLabelPreview />,
          align: "start",
        },
      ],
    },
    {
      type: "anatomy",
      id: "anatomy",
      title: "Anatomy",
      description:
        "Partes do $checkbox (Figma node 3460:705). Agrupamentos de formulário ficam fora deste componente.",
      visual: <CheckboxAnatomyVisual />,
      parts: [
        { id: "icon", label: "Icon", variant: "label" },
        { id: "label", label: "Label (checkboxLabel1)", variant: "label" },
      ],
      notes: [
        { term: "Icon", description: "size space-kz/500 (20px) — ícone de ação por state." },
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
          type: "Enabled | Hovered | Selected | Indeterminated | Disabled",
          defaultValue: "Enabled",
          description: "Estado visual do controle (Indeterminated no Figma).",
        },
        {
          name: "checkboxLabel",
          type: "boolean",
          defaultValue: "true",
          description: "Exibe o rótulo ao lado do ícone.",
        },
        {
          name: "checkboxLabel1",
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
        { token: "color-theme/icon/action/default-dark", usage: "Ícone — Mode=Dark (Enabled, Hovered, Selected, Indeterminated)" },
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
        "Em produção, usar <input type=\"checkbox\"> nativo ou role=\"checkbox\" com estado checked/indeterminate.",
        "Associar <label htmlFor> ao input — não depender só do texto visual.",
        "Focus visível no controle nativo; Hovered é apenas feedback visual no Figma.",
        "aria-checked=\"mixed\" para State=Indeterminated.",
        "aria-disabled ou disabled no input quando State=Disabled.",
        "Área clicável inclui label e ícone (label envolve o controle).",
        "Contraste mínimo 4.5:1 entre label e fundo em ambos os modes.",
        "Grupos: fieldset + legend ou aria-labelledby para listas de checkboxes.",
      ],
    },
    {
      type: "do-dont",
      id: "do-dont",
      title: "Do / Don't",
      doItems: [
        {
          label: "Label descritivo",
          description: "Texto que descreve a opção — associado ao input nativo em produção.",
          example: (
            <div className="checkbox-composition checkbox-composition--do">
              <Checkbox mode="dark" state="selected" label="Aceito os termos de uso" />
            </div>
          ),
        },
        {
          label: "Indeterminado explícito",
          description: "Estado mixed para seleção parcial em listas.",
          example: <Checkbox mode="dark" state="indeterminate" label="Selecionar todos" />,
        },
      ],
      dontItems: [
        {
          label: "Ícone sem semântica",
          description: "Não usar apenas o ícone decorativo sem input ou role.",
          example: (
            <div className="checkbox-composition checkbox-composition--dont" role="presentation">
              <Checkbox mode="dark" state="enabled" showLabel={false} />
            </div>
          ),
        },
        {
          label: "Label genérico",
          description: "Evite \"Label\" ou texto que não descreve a opção.",
          example: <Checkbox mode="dark" state="enabled" label="Label" />,
        },
      ],
    },
  ],
};
