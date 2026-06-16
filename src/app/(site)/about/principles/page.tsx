import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Princípios",
  description: "Os princípios que guiam o Design System Kaizen.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Princípios"}
      description={"Os princípios que guiam o Design System Kaizen."}
    />
  );
}
