import type { Metadata } from "next";

import { ButtonLinkDoc } from "@/lib/documentation/components/button/link-doc";

export const metadata: Metadata = {
  title: "Button Link",
  description: "Componente $button-link — ação inline com underline e ícone.",
};

export default function ButtonLinkPage() {
  return <ButtonLinkDoc />;
}
