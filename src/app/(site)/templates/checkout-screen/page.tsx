import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "Checkout Screen",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"Checkout Screen"}
    />
  );
}
