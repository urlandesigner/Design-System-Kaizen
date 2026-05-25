import type { Metadata } from "next";

import { PlaceholderPage } from "@/lib/documentation/placeholder-page";

export const metadata: Metadata = {
  title: "App Screen",
};

export default function Page() {
  return (
    <PlaceholderPage
      title={"App Screen"}
    />
  );
}
