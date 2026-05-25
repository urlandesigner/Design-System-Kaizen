import { cn } from "@/lib/utils";

/** Figma $checkbox — Mode property. */
export type CheckboxMode = "dark" | "light";

/** Figma $checkbox — State property (Indeterminated no Figma). */
export type CheckboxState =
  | "enabled"
  | "hovered"
  | "selected"
  | "indeterminate"
  | "disabled";

const labelTypography = [
  "text-[length:var(--typography-text-md)]",
  "leading-[var(--typography-leading-label-md)]",
  "font-[number:var(--font-kz-400)]",
  "tracking-[var(--letterspacing-kz-0)]",
] as const;

const iconColor: Record<CheckboxMode, Record<CheckboxState, string>> = {
  dark: {
    enabled: "text-[var(--color-theme-icon-action-default-dark)]",
    hovered: "text-[var(--color-theme-icon-action-default-dark)]",
    selected: "text-[var(--color-theme-icon-action-default-dark)]",
    indeterminate: "text-[var(--color-theme-icon-action-default-dark)]",
    disabled: "text-[var(--color-theme-icon-action-disabled-dark)]",
  },
  light: {
    enabled: "text-[var(--color-theme-icon-action-default-light)]",
    hovered: "text-[var(--color-theme-icon-action-default-light)]",
    selected: "text-[var(--color-theme-icon-action-default-light)]",
    indeterminate: "text-[var(--color-theme-icon-action-default-light)]",
    disabled: "text-[var(--color-theme-icon-action-disabled-light)]",
  },
};

const labelColor: Record<CheckboxMode, Record<CheckboxState, string>> = {
  dark: {
    enabled: "text-[var(--color-theme-text-action-default-dark)]",
    hovered: "text-[var(--color-theme-text-action-default-dark)]",
    selected: "text-[var(--color-theme-text-action-default-dark)]",
    indeterminate: "text-[var(--color-theme-text-action-default-dark)]",
    disabled: "text-[var(--color-theme-text-action-disabled-dark)]",
  },
  light: {
    enabled: "text-[var(--color-theme-text-action-default-light)]",
    hovered: "text-[var(--color-theme-text-action-default-light)]",
    selected: "text-[var(--color-theme-text-action-default-light)]",
    indeterminate: "text-[var(--color-theme-text-action-default-light)]",
    disabled: "text-[var(--color-theme-text-action-disabled-light)]",
  },
};

function CheckboxSquareIcon({ state }: { state: CheckboxState }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-full">
      <rect
        x="2"
        y="2"
        width="12"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function CheckboxSelectedIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-full">
      <rect x="2" y="2" width="12" height="12" rx="2" fill="currentColor" />
      <path
        d="M5 8.2 7.1 10.3 11.5 5.9"
        stroke="var(--color-theme-surface-primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckboxIndeterminateIcon({ mode }: { mode: CheckboxMode }) {
  const barColor =
    mode === "light"
      ? "var(--color-theme-surface-primary)"
      : "var(--color-theme-surface-primary)";

  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-full">
      <rect x="2" y="2" width="12" height="12" rx="2" fill="currentColor" />
      <path
        d="M5 8h6"
        stroke={barColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckboxIcon({
  state,
  mode,
}: {
  state: CheckboxState;
  mode: CheckboxMode;
}) {
  const color = iconColor[mode][state];

  return (
    <span
      className={cn(
        "inline-flex size-[var(--space-kz-500)] shrink-0 items-center justify-center",
        color,
        state === "hovered" && "scale-105",
      )}
      aria-hidden
    >
      {state === "selected" ? (
        <CheckboxSelectedIcon />
      ) : state === "indeterminate" ? (
        <CheckboxIndeterminateIcon mode={mode} />
      ) : (
        <CheckboxSquareIcon state={state} />
      )}
    </span>
  );
}

export type CheckboxProps = {
  mode?: CheckboxMode;
  state?: CheckboxState;
  /** Figma: checkboxLabel1 */
  label?: string;
  /** Figma: checkboxLabel */
  showLabel?: boolean;
  className?: string;
};

/** $checkbox — espelha Mode e State do Figma Production v1.1.0 (node 3460:705). */
export function Checkbox({
  mode = "dark",
  state = "enabled",
  label = "Label",
  showLabel = true,
  className,
}: CheckboxProps) {
  const isDisabled = state === "disabled";

  return (
    <div
      className={cn(
        "checkbox",
        "inline-flex items-center gap-[var(--space-kz-200)]",
        isDisabled && "pointer-events-none",
        className,
      )}
      data-checkbox-mode={mode}
      data-checkbox-state={state}
    >
      <CheckboxIcon state={state} mode={mode} />
      {showLabel ? (
        <span className={cn("shrink-0 whitespace-nowrap", ...labelTypography, labelColor[mode][state])}>
          {label}
        </span>
      ) : null}
    </div>
  );
}
