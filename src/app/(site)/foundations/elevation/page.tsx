import type { Metadata } from "next";

import { TokenFoundationLayout, TokenGroupedTables } from "@/lib/documentation/foundations/token-docs";
import { flatTokens } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Elevation",
  description: "Blur e box shadow (effect styles).",
};

export default function ElevationFoundationPage() {
  const blurTokens = flatTokens.filter((t) => t.category === "blur");
  const shadowTokens = flatTokens.filter((t) => t.category === "elevation");

  return (
    <TokenFoundationLayout
      title="Elevation"
      description="Tokens de profundidade: blur-kz (variables) e shadow-sm (effect style)."
      count={blurTokens.length + shadowTokens.length}
    >
      <TokenGroupedTables
        tokens={shadowTokens}
        showPreview="shadow"
        emptyMessage="Nenhum token de sombra."
      />
      <TokenGroupedTables
        tokens={blurTokens}
        showPreview="blur"
        emptyMessage="Nenhum token blur-kz no export."
      />
    </TokenFoundationLayout>
  );
}
