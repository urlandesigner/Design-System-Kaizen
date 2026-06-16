import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Assets, logos e materiais para download do Kaizen.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Downloads"}
      description={"Assets, logos e materiais para download do Kaizen."}
    />
  );
}
