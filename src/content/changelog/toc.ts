import { changelogReleases } from "@/content/changelog/releases";
import type { DocTocItem } from "@/types/documentation";

export const changelogTocItems: DocTocItem[] = changelogReleases.map((release) => ({
  id: release.id,
  title: `v${release.version}`,
}));
