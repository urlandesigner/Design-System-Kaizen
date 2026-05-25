import { cn } from "@/lib/utils";

/** Figma $radio — Mode property. */
export type RadioMode = "dark" | "light";

/** Figma $radio — State property. */
export type RadioState = "enabled" | "hovered" | "selected" | "disabled";

const labelTypography = [
  "text-[length:var(--typography-text-md)]",
  "leading-[var(--typography-leading-label-md)]",
  "font-[number:var(--font-kz-400)]",
  "tracking-[var(--letterspacing-kz-0)]",
] as const;

const iconColor: Record<RadioMode, Record<RadioState, string>> = {
  dark: {
    enabled: "text-[var(--color-theme-icon-action-default-dark)]",
    hovered: "text-[var(--color-theme-icon-action-default-dark)]",
    selected: "text-[var(--color-theme-icon-action-default-dark)]",
    disabled: "text-[var(--color-theme-icon-action-disabled-dark)]",
  },
  light: {
    enabled: "text-[var(--color-theme-icon-action-default-light)]",
    hovered: "text-[var(--color-theme-icon-action-default-light)]",
    selected: "text-[var(--color-theme-icon-action-default-light)]",
    disabled: "text-[var(--color-theme-icon-action-disabled-light)]",
  },
};

const labelColor: Record<RadioMode, Record<RadioState, string>> = {
  dark: {
    enabled: "text-[var(--color-theme-text-action-default-dark)]",
    hovered: "text-[var(--color-theme-text-action-default-dark)]",
    selected: "text-[var(--color-theme-text-action-default-dark)]",
    disabled: "text-[var(--color-theme-text-action-disabled-dark)]",
  },
  light: {
    enabled: "text-[var(--color-theme-text-action-default-light)]",
    hovered: "text-[var(--color-theme-text-action-default-light)]",
    selected: "text-[var(--color-theme-text-action-default-light)]",
    disabled: "text-[var(--color-theme-text-action-disabled-light)]",
  },
};

function RadioCircleIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-full">
      <circle cx="8" cy="8" r="5.75" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function RadioSelectedIcon({ mode }: { mode: RadioMode }) {
  const ringFill =
    mode === "light"
      ? "var(--color-theme-surface-primary)"
      : "var(--color-theme-surface-primary)";

  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-full">
      <circle cx="8" cy="8" r="5.75" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="8" cy="8" r="3.75" fill={ringFill} />
      <circle cx="8" cy="8" r="2.25" fill="currentColor" />
    </svg>
  );
}

function RadioIcon({
  state,
  mode,
}: {
  state: RadioState;
  mode: RadioMode;
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
        <RadioSelectedIcon mode={mode} />
      ) : (
        <RadioCircleIcon />
      )}
    </span>
  );
}

export type RadioProps = {
  mode?: RadioMode;
  state?: RadioState;
  /** Figma: label1 */
  label?: string;
  /** Figma: label */
  showLabel?: boolean;
  className?: string;
};

/** $radio — Figma Production v1.1.0 (node 3602:953). */
export function Radio({
  mode = "dark",
  state = "enabled",
  label = "Label",
  showLabel = true,
  className,
}: RadioProps) {
  const isDisabled = state === "disabled";

  return (
    <div
      className={cn(
        "radio",
        "inline-flex items-center gap-[var(--space-kz-200)]",
        isDisabled && "pointer-events-none",
        className,
      )}
      data-radio-mode={mode}
      data-radio-state={state}
    >
      <RadioIcon state={state} mode={mode} />
      {showLabel ? (
        <span
          className={cn(
            "shrink-0 whitespace-nowrap",
            ...labelTypography,
            labelColor[mode][state],
          )}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
