import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Evolução do Design System",
  description: "A jornada e a evolução contínua do Kaizen.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Evolução do Design System"}
      description={"A jornada e a evolução contínua do Kaizen."}
    />
  );
}
