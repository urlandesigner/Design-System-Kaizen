import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Error States",
  description: "Padrões para comunicar erros e falhas ao usuário.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Error States"}
      description={"Padrões para comunicar erros e falhas ao usuário."}
    />
  );
}
