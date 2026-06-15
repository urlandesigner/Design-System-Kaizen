import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Tables",
  description: "Componentes de tabela e exibição de dados do Kaizen.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Tables"}
      description={"Componentes de tabela e exibição de dados do Kaizen."}
    />
  );
}
