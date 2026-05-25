import type { Metadata } from "next";

import { AccordionDoc } from "@/lib/documentation/components/accordion/accordion-doc";

export const metadata: Metadata = {
  title: "Accordion",
  description:
    "Componente $accordion-cells-default — estados Enabled, Hovered, Selected e Disabled; copy expansível e divider opcional.",
};

export default function AccordionPage() {
  return <AccordionDoc />;
}
