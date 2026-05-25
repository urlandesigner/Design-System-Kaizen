import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "ARIA",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"ARIA"}
    />
  );
}
