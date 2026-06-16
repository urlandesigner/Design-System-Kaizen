import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Como começar",
  description: "Primeiros passos para usar o Kaizen em produtos Ybera.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Como começar"}
      description={"Primeiros passos para usar o Kaizen em produtos Ybera."}
    />
  );
}
