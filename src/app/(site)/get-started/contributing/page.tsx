import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Como contribuir",
  description: "Diretrizes para contribuir com o Design System Kaizen.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Como contribuir"}
      description={"Diretrizes para contribuir com o Design System Kaizen."}
    />
  );
}
