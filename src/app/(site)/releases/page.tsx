import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Releases",
  description: "Histórico de versões e lançamentos do Kaizen.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Releases"}
      description={"Histórico de versões e lançamentos do Kaizen."}
    />
  );
}
