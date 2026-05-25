import type { DocBreadcrumbItem } from "@/types/documentation";

import type { AccordionCellState } from "@/components/ui/accordion";

export function accordionBreadcrumb(): DocBreadcrumbItem[] {
  return [
    { label: "Components", href: "/components" },
    { label: "Accordion" },
  ];
}

export const FIGMA_ACCORDION_CELL =
  "Kaizen Production v1.1.0 — $accordion-cells-default (node 3431:4729)";

export const accordionStateLabels: Record<AccordionCellState, string> = {
  enabled: "Enabled",
  hovered: "Hovered",
  selected: "Selected",
  disabled: "Disabled",
};

export const DEFAULT_ACCORDION_COPY =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.";
