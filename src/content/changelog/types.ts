export type ChangelogChangeType =
  | "added"
  | "changed"
  | "fixed"
  | "removed"
  | "deprecated";

export type ChangelogEntry = {
  type: ChangelogChangeType;
  text: string;
};

export type ChangelogSubsection = {
  title: string;
  entries: ChangelogEntry[];
};

export type ChangelogSection = {
  title: string;
  subsections: ChangelogSubsection[];
  entries: ChangelogEntry[];
};

export type ChangelogRelease = {
  id: string;
  version: string;
  status: "current" | "released" | "planned";
  publishedAt: string;
  summary: string;
  categories: string[];
  body: string;
};

export const changelogLegend: { type: ChangelogChangeType | "arrow"; label: string }[] = [
  { type: "added", label: "Feature adicionada" },
  { type: "changed", label: "Feature alterada" },
  { type: "fixed", label: "Bug ajustado" },
  { type: "removed", label: "Feature removida" },
  { type: "deprecated", label: "Irá ser removida no futuro" },
  { type: "arrow", label: "Alterado para" },
];
