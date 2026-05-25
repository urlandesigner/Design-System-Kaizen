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

export function SearchIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-full">
      <path
        d="M7 11.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM12 12l2.5 2.5"
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

export function inputBreadcrumb(): DocBreadcrumbItem[] {
  return [
    { label: "Components", href: "/components" },
    { label: "Input" },
  ];
}

export const FIGMA_INPUT_FIELD =
  "Kaizen Production v1.1.0 — $input-field (node 3410:3391)";

export const inputStateLabels: Record<
  import("@/components/ui/input").InputFieldState,
  string
> = {
  enabled: "Enabled",
  selected: "Selected",
  filled: "Filled",
  error: "Error",
  disabled: "Disabled",
};

export const inputTypeLabels: Record<
  import("@/components/ui/input").InputFieldType,
  string
> = {
  basic: "Basic",
  text: "Text",
  icon: "Icon",
  copy: "Copy",
  search: "Search",
};
