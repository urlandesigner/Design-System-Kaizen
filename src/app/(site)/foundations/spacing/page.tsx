import type { Metadata } from "next";

import { TokenFoundationLayout, TokenGroupedTables } from "@/lib/documentation/foundations/token-docs";
import { getTokensByCategory } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Spacing",
  description: "Escala de espaçamento space-kz do Figma.",
};

export default function SpacingFoundationPage() {
  const tokens = getTokensByCategory("spacing", { namePrefix: "space-kz/" });

  return (
    <TokenFoundationLayout
      title="Spacing"
      description="Escala space-kz para padding, margin e gap. Ex.: p-[var(--space-kz-400)]."
      count={tokens.length}
    >
      <TokenGroupedTables tokens={tokens} showPreview="spacing" />
    </TokenFoundationLayout>
  );
}
