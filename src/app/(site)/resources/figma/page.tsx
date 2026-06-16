import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Figma",
  description: "Bibliotecas e arquivos do Kaizen no Figma.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Figma"}
      description={"Bibliotecas e arquivos do Kaizen no Figma."}
    />
  );
}
