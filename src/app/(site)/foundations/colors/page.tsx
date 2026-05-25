import type { Metadata } from "next";

import {
  TokenFoundationLayout,
  TokenGroupedTables,
  TokenSection,
} from "@/lib/documentation/foundations/token-docs";
import { getTokensByCategory } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Colors",
  description: "Tokens de cor primitivos e semânticos exportados do Figma.",
};

export default function ColorsFoundationPage() {
  const primitives = getTokensByCategory("color", {
    collection: "primitive",
    namePrefix: "color-kz/",
  });
  const semantic = getTokensByCategory("color", {
    collection: "semantic",
    namePrefix: "color-theme/",
  });

  return (
    <TokenFoundationLayout
      title="Colors"
      description="Paleta primitiva e tokens semânticos, agrupados por família e ordenados por escala."
      count={primitives.length + semantic.length}
    >
      <TokenSection title="Primitives · color-kz">
        <TokenGroupedTables tokens={primitives} showPreview="color" />
      </TokenSection>
      <TokenSection title="Semantic · color-theme">
        <TokenGroupedTables tokens={semantic} showPreview="color" />
      </TokenSection>
    </TokenFoundationLayout>
  );
}
