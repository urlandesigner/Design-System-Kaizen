import { cn } from "@/lib/utils";

/** Figma $accordion-cells-default — State property. */
export type AccordionCellState = "enabled" | "hovered" | "selected" | "disabled";

const DEFAULT_COPY =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.";

const labelTypography = [
  "text-[length:var(--typography-text-md)]",
  "leading-[var(--typography-leading-label-md)]",
  "font-[number:var(--font-kz-600)]",
  "tracking-[var(--letterspacing-kz-0)]",
  "text-left",
  "break-words",
] as const;

const copyTypography = [
  "text-[length:var(--typography-text-md)]",
  "leading-[var(--typography-leading-paragraphy-md)]",
  "font-[number:var(--font-kz-400)]",
  "tracking-[var(--letterspacing-kz-0)]",
  "text-left",
  "break-words",
] as const;

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-full">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-full">
      <path
        d="M4 10l4-4 4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccordionDivider() {
  return (
    <hr
      className="m-0 w-full shrink-0 border-0 border-t border-[var(--color-theme-border-primary)]"
      aria-hidden
    />
  );
}

export type AccordionCellProps = {
  state?: AccordionCellState;
  /** Figma: label */
  label?: string;
  /** Figma: copy — visível em State=Selected */
  copy?: string;
  /** Figma: divider */
  divider?: boolean;
  className?: string;
};

/** $accordion-cells-default — Figma Production v1.1.0 (node 3431:4729). */
export function AccordionCell({
  state = "enabled",
  label = "Accordion label",
  copy = DEFAULT_COPY,
  divider = true,
  className,
}: AccordionCellProps) {
  const isExpanded = state === "selected";
  const isDisabled = state === "disabled";
  const isHovered = state === "hovered";

  const labelColor = isDisabled
    ? "text-[var(--color-theme-text-action-disabled-dark)]"
    : "text-[var(--color-theme-text-action-default-dark)]";

  const iconColor = isDisabled
    ? "text-[var(--color-theme-icon-action-disabled-dark)]"
    : "text-[var(--color-theme-icon-action-default-dark)]";

  const headerContent = (
    <>
      <span
        className={cn(
          "min-w-0 flex-1",
          ...labelTypography,
          labelColor,
          isHovered && "underline decoration-solid underline-offset-[6%]",
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "inline-flex size-[var(--space-kz-500)] shrink-0 items-center justify-center",
          iconColor,
        )}
        aria-hidden
      >
        {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </span>
    </>
  );

  const headerClassName =
    "flex w-full items-center gap-[var(--space-kz-600)] px-0 py-[var(--space-kz-500)]";

  return (
    <div
      className={cn(
        "accordion-cell flex w-full max-w-[18.75rem] flex-col",
        isDisabled && "pointer-events-none",
        className,
      )}
      data-accordion-state={state}
    >
      <div
        className={cn(
          headerClassName,
          (isHovered || isExpanded) && !isDisabled && "cursor-pointer",
        )}
        aria-expanded={isExpanded || undefined}
      >
        {headerContent}
      </div>

      <div
        className="accordion-cell-panel"
        data-state={isExpanded ? "open" : "closed"}
      >
        <div className="accordion-cell-panel-inner w-full pb-[var(--space-kz-500)] pt-0">
          <p
            className={cn(
              ...copyTypography,
              "text-[var(--color-theme-text-secondary-dark)]",
            )}
          >
            {copy}
          </p>
        </div>
      </div>

      {divider ? <AccordionDivider /> : null}
    </div>
  );
}
