import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Foundations",
  description: "Tokens e fundamentos visuais do Design System.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Foundations"}
      description={"Tokens e fundamentos visuais do Design System."}
    />
  );
}
