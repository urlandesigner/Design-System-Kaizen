import type { Metadata } from "next";

import { BadgeDoc } from "@/lib/documentation/components/badge/badge-doc";

export const metadata: Metadata = {
  title: "Badge",
  description:
    "Componente $badge — types Brand, Red, Amber, Green, Blue, Purple, Neutral e Disabled; sizes Default e Compact.",
};

export default function BadgePage() {
  return <BadgeDoc />;
}
