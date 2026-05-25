import type { Metadata } from "next";

import { IconsFoundationPage } from "@/lib/documentation/foundations/icon-docs";
import { flatTokens } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Icons",
  description: "Tamanhos e cores do componente $icon (Figma Kaizen).",
};

export default function Page() {
  const iconSizeTokens = flatTokens.filter((t) => t.category === "icons");
  const iconColorTokens = flatTokens.filter((t) =>
    t.name.startsWith("color-theme/icon/"),
  );

  return (
    <IconsFoundationPage
      iconSizeTokens={iconSizeTokens}
      iconColorTokens={iconColorTokens}
    />
  );
}
