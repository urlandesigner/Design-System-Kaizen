import type { DocBreadcrumbItem } from "@/types/documentation";

export function PlusIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-full">
      <path
        d="M8 3.5v9M3.5 8h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-full">
      <path
        d="M6.5 9.5 11 5M11 5H7.5M11 5v3.5M5 4.5h4a2 2 0 0 1 2 2V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CopyIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-full">
      <path
        d="M5.5 10.5H4a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 4 2.5h5A1.5 1.5 0 0 1 10.5 4V5.5M6 5.5h5A1.5 1.5 0 0 1 12.5 7v5A1.5 1.5 0 0 1 11 13.5H6A1.5 1.5 0 0 1 4.5 12V7A1.5 1.5 0 0 1 6 5.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function buttonBreadcrumb(page: string): DocBreadcrumbItem[] {
  return [
    { label: "Components", href: "/components" },
    { label: "Button", href: "/components/button" },
    { label: page },
  ];
}

export const FIGMA_BUTTON_FAMILY =
  "Kaizen Production v1.1.0 — família Button (node 1406:465)";
