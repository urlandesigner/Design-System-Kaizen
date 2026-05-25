import type { DocBreadcrumbItem } from "@/types/documentation";

import type { RadioMode, RadioState } from "@/components/ui/radio";

export function radioBreadcrumb(): DocBreadcrumbItem[] {
  return [
    { label: "Components", href: "/components" },
    { label: "Radio" },
  ];
}

export const FIGMA_RADIO = "Kaizen Production v1.1.0 — $radio (node 3602:953)";

export const radioStateLabels: Record<RadioState, string> = {
  enabled: "Enabled",
  hovered: "Hovered",
  selected: "Selected",
  disabled: "Disabled",
};

export const radioModeLabels: Record<RadioMode, string> = {
  dark: "Dark",
  light: "Light",
};
