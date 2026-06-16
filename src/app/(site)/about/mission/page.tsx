import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Missão",
  description: "A missão do Design System Kaizen na Ybera.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Missão"}
      description={"A missão do Design System Kaizen na Ybera."}
    />
  );
}
