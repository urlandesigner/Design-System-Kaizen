import { cn } from "@/lib/utils";

/** Figma $badge — Type property. */
export type BadgeType =
  | "brand"
  | "red"
  | "amber"
  | "green"
  | "blue"
  | "purple"
  | "neutral"
  | "disabled";

/** Figma $badge — Size property. */
export type BadgeSize = "default" | "compact";

type BadgeTheme = {
  surface: string;
  border: string;
  text: string;
  icon: string;
};

const badgeThemes: Record<BadgeType, BadgeTheme> = {
  brand: {
    surface: "bg-[var(--color-theme-surface-badge-brand)]",
    border: "border-[var(--color-theme-border-badge-brand)]",
    text: "text-[var(--color-theme-text-badge-brand)]",
    icon: "text-[var(--color-theme-icon-badge-brand)]",
  },
  red: {
    surface: "bg-[var(--color-theme-surface-badge-red)]",
    border: "border-[var(--color-theme-border-badge-red)]",
    text: "text-[var(--color-theme-text-badge-red)]",
    icon: "text-[var(--color-theme-icon-badge-red)]",
  },
  amber: {
    surface: "bg-[var(--color-theme-surface-badge-amber)]",
    border: "border-[var(--color-theme-border-badge-amber)]",
    text: "text-[var(--color-theme-text-badge-amber)]",
    icon: "text-[var(--color-theme-icon-badge-amber)]",
  },
  green: {
    surface: "bg-[var(--color-theme-surface-badge-green)]",
    border: "border-[var(--color-theme-border-badge-green)]",
    text: "text-[var(--color-theme-text-badge-green)]",
    icon: "text-[var(--color-theme-icon-badge-green)]",
  },
  blue: {
    surface: "bg-[var(--color-theme-surface-badge-blue)]",
    border: "border-[var(--color-theme-border-badge-blue)]",
    text: "text-[var(--color-theme-text-badge-blue)]",
    icon: "text-[var(--color-theme-icon-badge-blue)]",
  },
  purple: {
    surface: "bg-[var(--color-theme-surface-badge-purple)]",
    border: "border-[var(--color-theme-border-badge-purple)]",
    text: "text-[var(--color-theme-text-badge-purple)]",
    icon: "text-[var(--color-theme-icon-badge-purple)]",
  },
  neutral: {
    surface: "bg-[var(--color-theme-surface-badge-neutral)]",
    border: "border-[var(--color-theme-border-badge-neutral)]",
    text: "text-[var(--color-theme-text-badge-neutral)]",
    icon: "text-[var(--color-theme-icon-badge-neutral)]",
  },
  disabled: {
    surface: "bg-[var(--color-theme-surface-badge-disabled)]",
    border: "border-[var(--color-theme-border-badge-disabled)]",
    text: "text-[var(--color-theme-text-badge-disabled)]",
    icon: "text-[var(--color-theme-icon-badge-badge-disabled)]",
  },
};

const sizeStyles: Record<
  BadgeSize,
  { shell: string; label: string }
> = {
  default: {
    shell: "px-[var(--space-kz-100)] py-[var(--space-kz-50)]",
    label:
      "text-[length:var(--typography-text-md)] leading-[var(--typography-leading-label-md)]",
  },
  compact: {
    shell: "px-[var(--space-kz-50)] py-[var(--space-kz-0)]",
    label:
      "text-[length:var(--typography-text-sm)] leading-[var(--typography-leading-label-sm)]",
  },
};

function BadgeDotIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-full">
      <circle cx="8" cy="8" r="3.5" fill="currentColor" />
    </svg>
  );
}

function BadgeCloseIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-full">
      <path
        d="M4.5 4.5 11.5 11.5M11.5 4.5 4.5 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export type BadgeProps = {
  type?: BadgeType;
  size?: BadgeSize;
  /** Figma: value */
  value?: string;
  /** Figma: leftIcon */
  leftIcon?: boolean;
  /** Figma: closeButton */
  closeButton?: boolean;
  className?: string;
  onClose?: () => void;
};

/** $badge — Figma Production v1.1.0 (node 3411:942). */
export function Badge({
  type = "brand",
  size = "default",
  value = "Value",
  leftIcon = true,
  closeButton = true,
  className,
  onClose,
}: BadgeProps) {
  const theme = badgeThemes[type];
  const sizing = sizeStyles[size];
  const isDisabled = type === "disabled";

  return (
    <span
      className={cn(
        "badge inline-flex items-center justify-center",
        "rounded-[var(--rounded-kz-full)] border border-solid border-[length:var(--border-kz-25)]",
        theme.surface,
        theme.border,
        sizing.shell,
        isDisabled && "pointer-events-none",
        className,
      )}
      data-badge-type={type}
      data-badge-size={size}
    >
      {leftIcon ? (
        <span
          className={cn(
            "inline-flex size-[var(--space-kz-500)] shrink-0 items-center justify-center",
            theme.icon,
          )}
          aria-hidden
        >
          <BadgeDotIcon />
        </span>
      ) : null}

      <span
        className={cn(
          "shrink-0 whitespace-nowrap px-[var(--space-kz-100)] py-0 text-center",
          "font-[number:var(--font-kz-400)] tracking-[var(--letterspacing-kz-0)]",
          sizing.label,
          theme.text,
        )}
      >
        {value}
      </span>

      {closeButton ? (
        <button
          type="button"
          className={cn(
            "inline-flex size-[var(--space-kz-500)] shrink-0 items-center justify-center border-0 bg-transparent p-0",
            theme.icon,
            !isDisabled &&
              "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-theme-border-input-selected)]",
          )}
          aria-label={`Remover ${value}`}
          disabled={isDisabled}
          onClick={onClose}
        >
          <BadgeCloseIcon />
        </button>
      ) : null}
    </span>
  );
}
