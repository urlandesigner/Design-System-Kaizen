import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Loading States",
  description: "Padrões de carregamento, skeletons e estados de espera.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Loading States"}
      description={"Padrões de carregamento, skeletons e estados de espera."}
    />
  );
}
