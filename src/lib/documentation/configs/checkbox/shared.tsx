import type { DocBreadcrumbItem } from "@/types/documentation";

import type { CheckboxMode, CheckboxState } from "@/components/ui/checkbox";

export function checkboxBreadcrumb(): DocBreadcrumbItem[] {
  return [
    { label: "Components", href: "/components" },
    { label: "Checkbox" },
  ];
}

export const FIGMA_CHECKBOX =
  "Kaizen Production v1.1.0 — $checkbox (node 3460:705)";

export const checkboxStateLabels: Record<CheckboxState, string> = {
  enabled: "Enabled",
  hovered: "Hovered",
  selected: "Selected",
  indeterminate: "Indeterminated",
  disabled: "Disabled",
};

export const checkboxModeLabels: Record<CheckboxMode, string> = {
  dark: "Dark",
  light: "Light",
};
