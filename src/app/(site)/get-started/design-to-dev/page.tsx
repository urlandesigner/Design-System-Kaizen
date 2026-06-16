import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Fluxo Design → Desenvolvimento",
  description: "Como o trabalho flui do design para a implementação no Kaizen.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Fluxo Design → Desenvolvimento"}
      description={"Como o trabalho flui do design para a implementação no Kaizen."}
    />
  );
}
