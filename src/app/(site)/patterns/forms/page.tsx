import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Forms",
  description: "Padrões de formulários e composição de campos no Kaizen.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Forms"}
      description={"Padrões de formulários e composição de campos no Kaizen."}
    />
  );
}
