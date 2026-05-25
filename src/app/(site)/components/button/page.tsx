import type { Metadata } from "next";

import { ButtonFamilyOverview } from "@/lib/documentation/components/button/button-family-overview";

export const metadata: Metadata = {
  title: "Button",
  description:
    "Família Button — Filled, Ghost, Link e Copy como componentes independentes no Design System Kaizen.",
};

export default function ButtonOverviewPage() {
  return <ButtonFamilyOverview />;
}
