import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Components",
  description: "Biblioteca de componentes documentados.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Components"}
      description={"Biblioteca de componentes documentados."}
    />
  );
}
