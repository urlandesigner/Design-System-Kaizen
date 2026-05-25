import type { Metadata } from "next";

import {
  FontFamiliesSection,
  TypographyPlaceholderSection,
} from "@/lib/documentation/foundations/font-families-docs";
import {
  TokenFoundationLayout,
  TokenGroupedTables,
  TokenSection,
} from "@/lib/documentation/foundations/token-docs";
import { flatTokens } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Typography",
  description:
    "Famílias tipográficas, tamanhos, pesos e tokens de texto do Design System Kaizen.",
};

function filterByPrefix(tokens: typeof flatTokens, prefixes: string[]) {
  return tokens.filter((t) => prefixes.some((p) => t.name.startsWith(p)));
}

export default function TypographyFoundationPage() {
  const typography = flatTokens.filter((t) => t.category === "typography");

  const textSizes = filterByPrefix(typography, ["text-kz/", "typography/text"]);
  const lineHeights = filterByPrefix(typography, [
    "leading-kz/",
    "typography/leading/",
  ]);
  const fontWeights = flatTokens.filter((t) => t.name.startsWith("font-kz/"));
  const letterSpacing = flatTokens.filter((t) =>
    t.name.startsWith("letterspacing-kz/"),
  );

  return (
    <TokenFoundationLayout
      title="Typography"
      description="Nunito Sans e Syne no produto; escala de tamanhos, pesos e espaçamento de letras dos tokens Figma."
      count={typography.length + fontWeights.length + letterSpacing.length}
    >
      <TokenSection title="Font Families">
        <FontFamiliesSection />
      </TokenSection>

      <TokenSection title="Font sizes">
        <TokenGroupedTables
          tokens={textSizes}
          showPreview="typography"
          emptyMessage="Nenhum token de tamanho."
        />
      </TokenSection>

      <TokenSection title="Line heights">
        <TokenGroupedTables
          tokens={lineHeights}
          showPreview="typography"
          emptyMessage="Nenhum token de line height."
        />
      </TokenSection>

      <TokenSection title="Font weights">
        <TokenGroupedTables
          tokens={fontWeights}
          showPreview="typography"
          groupByFamily={false}
          emptyMessage="Nenhum token de peso."
        />
      </TokenSection>

      <TokenSection title="Letter spacing">
        <TokenGroupedTables
          tokens={letterSpacing}
          showPreview="typography"
          groupByFamily={false}
          emptyMessage="Nenhum token de letter spacing."
        />
      </TokenSection>

      <TokenSection title="Text styles">
        <TypographyPlaceholderSection
          id="text-styles"
          title="Estilos compostos (Title/*, Label/*, Paragraph/*)"
          description="Mapeamento dos estilos de texto do Figma para família + tamanho + peso + line-height. Esta seção documentará cada estilo com preview composto."
        />
      </TokenSection>
    </TokenFoundationLayout>
  );
}
