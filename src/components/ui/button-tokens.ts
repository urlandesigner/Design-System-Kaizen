/**
 * Mapeamento Button → tokens Figma (node 1406:465).
 * primary=Brand · secondary=Outlined · ghost=$button-ghost · destructive=Danger
 */
export const buttonTokenMap = {
  shared: {
    radius: "--rounded-theme-button-default",
    gap: "--space-kz-200",
    labelPaddingX: "--space-kz-100",
    fontSize: "--typography-text-md",
    lineHeight: "--typography-leading-label-md",
    fontWeight: "--font-kz-600",
    letterSpacing: "--letterspacing-kz-0",
    borderWidth: "--border-kz-25",
    iconSize: "--space-kz-500",
    focusRing: "--color-theme-border-action-selected",
    focusRingOffset: "--color-theme-surface-primary",
  },
  subtle: {
    background: "--color-theme-surface-action-enabled-light",
    backgroundHover: "--color-theme-surface-action-hovered-light",
    backgroundActive: "--color-theme-surface-action-selected-light",
    backgroundDisabled: "--color-theme-surface-action-disabled-light",
    text: "--color-theme-text-action-default-dark",
    textDisabled: "--color-theme-text-action-disabled-light",
    icon: "--color-theme-icon-action-default-dark",
    iconDisabled: "--color-theme-icon-action-disabled-light",
  },
  primary: {
    background: "--color-theme-surface-button-enabled",
    backgroundHover: "--color-theme-surface-button-hovered",
    backgroundActive: "--color-theme-surface-button-selected",
    backgroundDisabled: "--color-theme-surface-button-disabled",
    text: "--color-theme-text-button-default",
    textDisabled: "--color-theme-text-button-disabled",
    icon: "--color-theme-icon-button-default",
    iconDisabled: "--color-theme-icon-button-disabled",
  },
  secondary: {
    background: "transparent",
    backgroundHover: "--color-theme-surface-action-hovered-light",
    backgroundActive: "--color-theme-surface-action-selected-light",
    backgroundDisabled: "--color-theme-surface-action-disabled-light",
    text: "--color-theme-text-action-default-dark",
    textDisabled: "--color-theme-text-action-disabled-light",
    border: "--color-theme-border-action-enabled",
    borderHover: "--color-theme-border-action-hovered",
    borderActive: "--color-theme-border-action-selected",
    borderDisabled: "--color-theme-border-action-disabled",
    icon: "--color-theme-icon-action-default-dark",
    iconDisabled: "--color-theme-icon-action-disabled-light",
  },
  ghost: {
    text: "--color-theme-text-ghost-enabled-dark",
    textHover: "--color-theme-text-ghost-hovered-dark",
    textActive: "--color-theme-text-ghost-selected-dark",
    textDisabled: "--color-theme-text-ghost-disabled-dark",
    icon: "--color-theme-icon-ghost-enabled-dark",
    iconHover: "--color-theme-icon-ghost-hovered-dark",
    iconActive: "--color-theme-icon-ghost-selected-dark",
    iconDisabled: "--color-theme-icon-ghost-disabled-dark",
  },
  destructive: {
    background: "--color-theme-surface-danger-enabled",
    backgroundHover: "--color-theme-surface-danger-hovered",
    backgroundActive: "--color-theme-surface-danger-selected",
    backgroundDisabled: "--color-theme-surface-danger-disabled",
    text: "--color-theme-text-danger-default",
    textDisabled: "--color-theme-text-danger-disabled",
    icon: "--color-theme-icon-danger-default",
    iconDisabled: "--color-theme-icon-danger-disabled",
  },
  size: {
    compact: { padding: "--space-kz-200", figma: "Size=Compact (36px)" },
    default: { padding: "--space-kz-300", figma: "Size=Default (44px)" },
  },
} as const;

/** Variantes / estados no Figma ainda não expostos na API pública. */
export const buttonTokensMissing = [
  "$button-link — texto sublinhado + ícone external-link",
  "$button-copy — ghost sem underline + ícone copy no hover",
  "State=Loading — ausente no Figma Production v1.1.0",
  "space-kz/900 (36px) e /1100 (44px) — altura vem do padding 8px/12px + label 20px line-height",
] as const;
