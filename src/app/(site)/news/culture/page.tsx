import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Cultura",
  description: "Cultura de design e melhoria contínua na Ybera.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Cultura"}
      description={"Cultura de design e melhoria contínua na Ybera."}
    />
  );
}
