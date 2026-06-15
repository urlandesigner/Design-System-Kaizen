import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "O planejamento e os próximos passos do Kaizen.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Roadmap"}
      description={"O planejamento e os próximos passos do Kaizen."}
    />
  );
}
