import type { ChangelogRelease } from "@/content/changelog/types";
import { changelogV100Body } from "@/content/changelog/v1.0.0.body";
import { changelogV110Body } from "@/content/changelog/v1.1.0.body";

export const changelogReleases: ChangelogRelease[] = [
  {
    id: "changelog-1-0-0",
    version: "1.0.0",
    status: "unreleased",
    body: changelogV100Body,
  },
  {
    id: "changelog-1-1-0",
    version: "1.1.0",
    status: "unreleased",
    body: changelogV110Body,
  },
];
