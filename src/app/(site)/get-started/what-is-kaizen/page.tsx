import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "O que é o Kaizen",
  description: "Visão geral do Design System Kaizen da Ybera.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"O que é o Kaizen"}
      description={"Visão geral do Design System Kaizen da Ybera."}
    />
  );
}
