import type { ButtonGhostMode, ButtonVariant } from "@/components/ui/button";

/** Estados do $button-filled no Figma (node 1406:465). */
export type ButtonFigmaState = "enabled" | "hovered" | "selected" | "disabled";

/**
 * Classes estáticas para documentação — reproduz tokens de hover/selected sem interação.
 * enabled e disabled usam o componente normal (default / disabled).
 */
export const buttonFigmaStatePreviewClasses: Record<
  ButtonVariant,
  Record<Exclude<ButtonFigmaState, "enabled" | "disabled">, string>
> = {
  primary: {
    hovered:
      "bg-[var(--color-theme-surface-button-hovered)] text-[var(--color-theme-text-button-default)] [&_.btn-icon]:text-[var(--color-theme-icon-button-default)]",
    selected:
      "bg-[var(--color-theme-surface-button-selected)] text-[var(--color-theme-text-button-default)] [&_.btn-icon]:text-[var(--color-theme-icon-button-default)]",
  },
  subtle: {
    hovered:
      "bg-[var(--color-theme-surface-action-hovered-light)] text-[var(--color-theme-text-action-default-dark)] [&_.btn-icon]:text-[var(--color-theme-icon-action-default-dark)]",
    selected:
      "bg-[var(--color-theme-surface-action-selected-light)] text-[var(--color-theme-text-action-default-dark)] [&_.btn-icon]:text-[var(--color-theme-icon-action-default-dark)]",
  },
  secondary: {
    hovered:
      "border-[var(--color-theme-border-action-hovered)] bg-[var(--color-theme-surface-action-hovered-light)] text-[var(--color-theme-text-action-default-dark)] [&_.btn-icon]:text-[var(--color-theme-icon-action-default-dark)]",
    selected:
      "border-[var(--color-theme-border-action-selected)] bg-[var(--color-theme-surface-action-selected-light)] text-[var(--color-theme-text-action-default-dark)] [&_.btn-icon]:text-[var(--color-theme-icon-action-default-dark)]",
  },
  ghost: {
    hovered:
      "text-[var(--color-theme-text-ghost-hovered-dark)] [&_.btn-icon]:text-[var(--color-theme-icon-ghost-hovered-dark)]",
    selected:
      "text-[var(--color-theme-text-ghost-selected-dark)] [&_.btn-icon]:text-[var(--color-theme-icon-ghost-selected-dark)]",
  },
  destructive: {
    hovered:
      "bg-[var(--color-theme-surface-danger-hovered)] text-[var(--color-theme-text-danger-default)] [&_.btn-icon]:text-[var(--color-theme-icon-danger-default)]",
    selected:
      "bg-[var(--color-theme-surface-danger-selected)] text-[var(--color-theme-text-danger-default)] [&_.btn-icon]:text-[var(--color-theme-icon-danger-default)]",
  },
};

/** $button-ghost — preview estático por Figma Mode (node 3298:96). */
export const buttonGhostFigmaStatePreviewClasses: Record<
  ButtonGhostMode,
  Record<Exclude<ButtonFigmaState, "enabled" | "disabled">, string>
> = {
  dark: {
    hovered:
      "text-[var(--color-theme-text-ghost-hovered-dark)] [&_.btn-icon]:text-[var(--color-theme-icon-ghost-hovered-dark)]",
    selected:
      "text-[var(--color-theme-text-ghost-selected-dark)] [&_.btn-icon]:text-[var(--color-theme-icon-ghost-selected-dark)]",
  },
  light: {
    hovered:
      "text-[var(--color-theme-text-ghost-hovered-light)] [&_.btn-icon]:text-[var(--color-theme-icon-ghost-hovered-light)]",
    selected:
      "text-[var(--color-theme-text-ghost-selected-light)] [&_.btn-icon]:text-[var(--color-theme-icon-ghost-selected-light)]",
  },
};

export const buttonFigmaStateLabels: Record<ButtonFigmaState, string> = {
  enabled: "Enabled",
  hovered: "Hovered",
  selected: "Selected",
  disabled: "Disabled",
};
