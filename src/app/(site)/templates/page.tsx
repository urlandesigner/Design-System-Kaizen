import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Templates",
  description: "Estruturas completas de tela.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Templates"}
      description={"Estruturas completas de tela."}
    />
  );
}
