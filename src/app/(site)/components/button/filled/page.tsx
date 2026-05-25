import type { Metadata } from "next";

import { ButtonFilledDoc } from "@/lib/documentation/components/button/filled-doc";

export const metadata: Metadata = {
  title: "Button Filled",
  description: "Componente $button-filled — Types Brand, Subtle, Danger e Outline.",
};

export default function ButtonFilledPage() {
  return <ButtonFilledDoc />;
}
