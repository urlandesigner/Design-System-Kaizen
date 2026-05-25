import type { Metadata } from "next";

import { TokenFoundationLayout, TokenGroupedTables } from "@/lib/documentation/foundations/token-docs";
import { flatTokens } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Radius",
  description: "Tokens de border-radius rounded-kz e rounded-theme.",
};

export default function RadiusFoundationPage() {
  const tokens = flatTokens.filter((t) => t.category === "radius");

  return (
    <TokenFoundationLayout
      title="Radius"
      description="Cantos arredondados ordenados por escala. Ex.: rounded-[var(--rounded-kz-300)]."
      count={tokens.length}
    >
      <TokenGroupedTables tokens={tokens} showPreview="radius" />
    </TokenFoundationLayout>
  );
}
