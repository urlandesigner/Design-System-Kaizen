import type { Metadata } from "next";

import { TokenFoundationLayout, TokenGroupedTables } from "@/lib/documentation/foundations/token-docs";
import { getTokensByCategory } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Border",
  description: "Espessuras de borda border-kz do Figma.",
};

export default function BorderFoundationPage() {
  const tokens = getTokensByCategory("border", { namePrefix: "border-kz/" });

  return (
    <TokenFoundationLayout
      title="Border"
      description="Espessuras border-kz. Ex.: border-[length:var(--border-kz-25)]."
      count={tokens.length}
    >
      <TokenGroupedTables tokens={tokens} showPreview="border" />
    </TokenFoundationLayout>
  );
}
