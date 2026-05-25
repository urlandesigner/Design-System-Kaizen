import type { DocBreadcrumbItem } from "@/types/documentation";

import type { BadgeSize, BadgeType } from "@/components/ui/badge";

export function badgeBreadcrumb(): DocBreadcrumbItem[] {
  return [
    { label: "Components", href: "/components" },
    { label: "Badge" },
  ];
}

export const FIGMA_BADGE = "Kaizen Production v1.1.0 — $badge (node 3411:942)";

export const badgeTypeLabels: Record<BadgeType, string> = {
  brand: "Brand",
  red: "Red",
  amber: "Amber",
  green: "Green",
  blue: "Blue",
  purple: "Purple",
  neutral: "Neutral",
  disabled: "Disabled",
};

export const badgeSizeLabels: Record<BadgeSize, string> = {
  default: "Default",
  compact: "Compact",
};

export const FIGMA_BADGE_TYPES: BadgeType[] = [
  "brand",
  "red",
  "amber",
  "green",
  "blue",
  "purple",
  "neutral",
  "disabled",
];
