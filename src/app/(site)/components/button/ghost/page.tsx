import type { Metadata } from "next";

import { ButtonGhostDoc } from "@/lib/documentation/components/button/ghost-doc";

export const metadata: Metadata = {
  title: "Button Ghost",
  description: "Componente $button-ghost — ação secundária discreta.",
};

export default function ButtonGhostPage() {
  return <ButtonGhostDoc />;
}
