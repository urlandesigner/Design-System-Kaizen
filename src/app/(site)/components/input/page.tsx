import type { Metadata } from "next";

import { InputDoc } from "@/lib/documentation/components/input/input-doc";

export const metadata: Metadata = {
  title: "Input",
  description:
    "Componente $input-field — tipos Basic, Text, Icon, Copy e Search; estados Enabled, Selected, Filled, Error e Disabled.",
};

export default function InputPage() {
  return <InputDoc />;
}
