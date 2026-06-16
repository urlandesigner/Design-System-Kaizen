import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Artigos",
  description: "Artigos e publicações sobre o Design System Kaizen.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Artigos"}
      description={"Artigos e publicações sobre o Design System Kaizen."}
    />
  );
}
