import type { Metadata } from "next";

import { CheckboxDoc } from "@/lib/documentation/components/checkbox/checkbox-doc";

export const metadata: Metadata = {
  title: "Checkbox",
  description:
    "Componente $checkbox — modes Dark e Light; estados Enabled, Hovered, Selected, Indeterminated e Disabled.",
};

export default function CheckboxPage() {
  return <CheckboxDoc />;
}
