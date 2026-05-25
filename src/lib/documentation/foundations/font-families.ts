export type FontFamilyDefinition = {
  id: string;
  role: string;
  name: string;
  description: string;
  usages: string[];
  cssVariable: string;
  cssVariableFallback: string;
  tailwindClass: string;
  tokenNote: string;
  fallbackStack: string;
  previewClassName: string;
  specimenSample?: string;
};

const SPECIMEN_LINES = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "1234567890",
} as const;

export const fontSpecimenLines = SPECIMEN_LINES;

/** Famílias oficiais do Kaizen (Figma Production v1.1.0). */
export const designSystemFontFamilies: FontFamilyDefinition[] = [
  {
    id: "ui",
    role: "Primary UI",
    name: "Nunito Sans",
    description:
      "Família principal de interface. Usada em rótulos, parágrafos, botões, navegação e corpo do site (estilos Label/* no Figma).",
    usages: [
      "Interface e formulários",
      "Componentes (Button, Input, etc.)",
      "Labels e parágrafos",
      "Documentação e tabelas de tokens",
    ],
    cssVariable: "--font-family-ui",
    cssVariableFallback: "--font-nunito-sans",
    tailwindClass: "font-sans",
    tokenNote:
      "Pesos: font-kz/400 · 500 · 600 · 700. Tamanhos: typography/text/*, text-kz/*.",
    fallbackStack: '"Nunito Sans", ui-sans-serif, system-ui, sans-serif',
    previewClassName: "font-family-preview--ui",
    specimenSample: "Agendar consulta · 12 mar 2026",
  },
  {
    id: "display",
    role: "Display",
    name: "Syne",
    description:
      "Família de destaque para títulos e hierarquia editorial. Usada nos estilos Title/* do Figma.",
    usages: [
      "Títulos de página e seção",
      "Headlines e hero",
      "Hierarquia acima do corpo (Title/h4-medium, etc.)",
    ],
    cssVariable: "--font-family-display",
    cssVariableFallback: "--font-syne",
    tailwindClass: "font-display",
    tokenNote:
      "Componha com typography/text/* e leading-kz/* nos tokens de título.",
    fallbackStack: '"Syne", ui-sans-serif, system-ui, sans-serif',
    previewClassName: "font-family-preview--display",
    specimenSample: "Kaizen Design System",
  },
];
