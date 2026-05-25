import type { Metadata } from "next";

import { ButtonCopyDoc } from "@/lib/documentation/components/button/copy-doc";

export const metadata: Metadata = {
  title: "Button Copy",
  description: "Componente $button-copy — ação utilitária de cópia.",
};

export default function ButtonCopyPage() {
  return <ButtonCopyDoc />;
}
