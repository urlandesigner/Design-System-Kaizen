import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Storybook",
  description: "Componentes interativos do Kaizen no Storybook.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Storybook"}
      description={"Componentes interativos do Kaizen no Storybook."}
    />
  );
}
