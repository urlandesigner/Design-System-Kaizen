import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Diretrizes de acessibilidade do Design System.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Accessibility"}
      description={"Diretrizes de acessibilidade do Design System."}
    />
  );
}
