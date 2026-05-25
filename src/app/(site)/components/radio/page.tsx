import type { Metadata } from "next";

import { RadioDoc } from "@/lib/documentation/components/radio/radio-doc";

export const metadata: Metadata = {
  title: "Radio",
  description:
    "Componente $radio — modes Dark e Light; estados Enabled, Hovered, Selected e Disabled.",
};

export default function RadioPage() {
  return <RadioDoc />;
}
