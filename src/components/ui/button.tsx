import { cn } from "@/lib/utils";

/** Tipografia Label/md-semibold (Figma $button-*). */
const labelTypography = [
  "text-[length:var(--typography-text-md)]",
  "leading-[var(--typography-leading-label-md)]",
  "font-[number:var(--font-kz-600)]",
  "tracking-[var(--letterspacing-kz-0)]",
] as const;

const iconSlotClass =
  "btn-icon inline-flex size-[var(--space-kz-500)] shrink-0 items-center justify-center [&_svg]:size-full";

const variantStyles = {
  primary: [
    "border border-transparent",
    "bg-[var(--color-theme-surface-button-enabled)]",
    "text-[var(--color-theme-text-button-default)]",
    "[&_.btn-icon]:text-[var(--color-theme-icon-button-default)]",
    "hover:bg-[var(--color-theme-surface-button-hovered)]",
    "active:bg-[var(--color-theme-surface-button-selected)]",
    "disabled:bg-[var(--color-theme-surface-button-disabled)]",
    "disabled:text-[var(--color-theme-text-button-disabled)]",
    "disabled:[&_.btn-icon]:text-[var(--color-theme-icon-button-disabled)]",
  ],
  /** Figma Type=Subtle — surface/action/*-light + text/icon action default-dark */
  subtle: [
    "border border-transparent",
    "bg-[var(--color-theme-surface-action-enabled-light)]",
    "text-[var(--color-theme-text-action-default-dark)]",
    "[&_.btn-icon]:text-[var(--color-theme-icon-action-default-dark)]",
    "hover:bg-[var(--color-theme-surface-action-hovered-light)]",
    "active:bg-[var(--color-theme-surface-action-selected-light)]",
    "disabled:bg-[var(--color-theme-surface-action-disabled-light)]",
    "disabled:text-[var(--color-theme-text-action-disabled-light)]",
    "disabled:[&_.btn-icon]:text-[var(--color-theme-icon-action-disabled-light)]",
  ],
  /** Figma Type=Outlined */
  secondary: [
    "border border-solid border-[length:var(--border-kz-25)]",
    "border-[var(--color-theme-border-action-enabled)]",
    "bg-transparent",
    "text-[var(--color-theme-text-action-default-dark)]",
    "[&_.btn-icon]:text-[var(--color-theme-icon-action-default-dark)]",
    "hover:border-[var(--color-theme-border-action-hovered)]",
    "hover:bg-[var(--color-theme-surface-action-hovered-light)]",
    "active:border-[var(--color-theme-border-action-selected)]",
    "active:bg-[var(--color-theme-surface-action-selected-light)]",
    "disabled:border-[var(--color-theme-border-action-disabled)]",
    "disabled:bg-[var(--color-theme-surface-action-disabled-light)]",
    "disabled:text-[var(--color-theme-text-action-disabled-light)]",
    "disabled:[&_.btn-icon]:text-[var(--color-theme-icon-action-disabled-light)]",
  ],
  destructive: [
    "border border-transparent",
    "bg-[var(--color-theme-surface-danger-enabled)]",
    "text-[var(--color-theme-text-danger-default)]",
    "[&_.btn-icon]:text-[var(--color-theme-icon-danger-default)]",
    "hover:bg-[var(--color-theme-surface-danger-hovered)]",
    "active:bg-[var(--color-theme-surface-danger-selected)]",
    "disabled:bg-[var(--color-theme-surface-danger-disabled)]",
    "disabled:text-[var(--color-theme-text-danger-disabled)]",
    "disabled:[&_.btn-icon]:text-[var(--color-theme-icon-danger-disabled)]",
  ],
} as const;

/** Figma Size=Compact | Default — só $button-filled. */
const sizeStyles = {
  compact: ["p-[var(--space-kz-200)]"],
  default: ["p-[var(--space-kz-300)]"],
} as const;

/** $button-ghost — Figma Mode Dark | Light (node 3298:96). */
const ghostModeStyles = {
  dark: [
    "bg-transparent",
    "text-[var(--color-theme-text-ghost-enabled-dark)]",
    "[&_.btn-icon]:text-[var(--color-theme-icon-ghost-enabled-dark)]",
    "hover:text-[var(--color-theme-text-ghost-hovered-dark)]",
    "hover:[&_.btn-icon]:text-[var(--color-theme-icon-ghost-hovered-dark)]",
    "active:text-[var(--color-theme-text-ghost-selected-dark)]",
    "active:[&_.btn-icon]:text-[var(--color-theme-icon-ghost-selected-dark)]",
    "disabled:text-[var(--color-theme-text-ghost-disabled-dark)]",
    "disabled:[&_.btn-icon]:text-[var(--color-theme-icon-ghost-disabled-dark)]",
  ],
  light: [
    "bg-transparent",
    "text-[var(--color-theme-text-ghost-enabled-light)]",
    "[&_.btn-icon]:text-[var(--color-theme-icon-ghost-enabled-light)]",
    "hover:text-[var(--color-theme-text-ghost-hovered-light)]",
    "hover:[&_.btn-icon]:text-[var(--color-theme-icon-ghost-hovered-light)]",
    "active:text-[var(--color-theme-text-ghost-selected-light)]",
    "active:[&_.btn-icon]:text-[var(--color-theme-icon-ghost-selected-light)]",
    "disabled:text-[var(--color-theme-text-ghost-disabled-light)]",
    "disabled:[&_.btn-icon]:text-[var(--color-theme-icon-ghost-disabled-light)]",
  ],
} as const;

export type FilledButtonVariant = keyof typeof variantStyles;
export type ButtonVariant = FilledButtonVariant | "ghost";
export type ButtonSize = keyof typeof sizeStyles;
/** Figma $button-ghost — Mode Dark (texto escuro) | Mode Light (texto claro). */
export type ButtonGhostMode = keyof typeof ghostModeStyles;

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Apenas variant="ghost" — alinhado ao Mode do Figma. */
  mode?: ButtonGhostMode;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "default",
  mode = "dark",
  disabled,
  iconLeft,
  iconRight,
  className,
  children,
  ...props
}: ButtonProps) {
  const isGhost = variant === "ghost";
  const isFilled = !isGhost;
  const isFilledDefault = isFilled && size === "default";

  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center",
        "gap-[var(--space-kz-200)]",
        "rounded-[var(--rounded-theme-button-default)]",
        isGhost && "p-[var(--space-kz-0)] font-semibold",
        isFilledDefault && "h-10 px-[var(--space-kz-400)] font-semibold",
        "transition-[background-color,border-color,color,box-shadow] duration-150",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-[var(--color-theme-border-action-selected)]",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-theme-surface-primary)]",
        "disabled:pointer-events-none",
        ...labelTypography,
        ...(isGhost
          ? ghostModeStyles[mode]
          : variantStyles[variant as FilledButtonVariant]),
        ...(isFilled && !isFilledDefault ? sizeStyles[size] : []),
        isFilledDefault && "font-semibold",
        className,
      )}
      {...props}
    >
      {iconLeft ? <span className={iconSlotClass} aria-hidden>{iconLeft}</span> : null}
      <span
        className={
          isFilledDefault || isGhost ? undefined : "px-[var(--space-kz-100)]"
        }
      >
        {children}
      </span>
      {iconRight ? <span className={iconSlotClass} aria-hidden>{iconRight}</span> : null}
    </button>
  );
}

export { buttonTokenMap, buttonTokensMissing } from "./button-tokens";
