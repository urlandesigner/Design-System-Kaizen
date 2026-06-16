import type { ChangelogRelease } from "@/content/changelog/types";
import { changelogV100Body } from "@/content/changelog/v1.0.0.body";
import { changelogV110Body } from "@/content/changelog/v1.1.0.body";

export const changelogReleases: ChangelogRelease[] = [
  {
    id: "changelog-1-1-0",
    version: "1.1.0",
    status: "current",
    publishedAt: "2026-06-11",
    summary:
      "Refino incremental dos tokens de Foundation com ajustes de nomenclatura, escala de icones e consistencia na base visual do Kaizen.",
    categories: ["Foundations", "Tokens"],
    body: changelogV110Body,
  },
  {
    id: "changelog-1-0-0",
    version: "1.0.0",
    status: "released",
    publishedAt: "2026-05-25",
    summary:
      "Primeira base publica do Kaizen com reorganizacao de tokens, consolidacao de temas e expansao inicial da biblioteca de componentes.",
    categories: ["Foundations", "Tokens", "Theme", "Components", "Governance"],
    body: changelogV100Body,
  },
];
