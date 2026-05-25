import type { Metadata } from "next";

import { ChangelogView } from "@/lib/documentation/changelog/changelog-view";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Histórico de evolução do Design System.",
};

export default function ChangelogPage() {
  return <ChangelogView />;
}
