export type DocPageSection =
  | "overview"
  | "preview"
  | "anatomy"
  | "variants"
  | "properties"
  | "behavior"
  | "states"
  | "tokens"
  | "when-to-use"
  | "when-not-to-use"
  | "accessibility"
  | "examples"
  | "do-dont";

export type DocTocItem = {
  id: string;
  title: string;
};

export type DocBreadcrumbItem = {
  label: string;
  href?: string;
};

export type ComponentDocMeta = {
  slug: string;
  title: string;
  description: string;
  category: "ui" | "structural";
};
