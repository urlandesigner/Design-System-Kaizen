import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Patterns",
  description: "Combinações reutilizáveis de componentes.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Patterns"}
      description={"Combinações reutilizáveis de componentes."}
    />
  );
}
