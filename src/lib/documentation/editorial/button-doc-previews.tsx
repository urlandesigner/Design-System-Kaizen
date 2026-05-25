import { cn } from "@/lib/utils";

import {
  buttonFigmaStateLabels,
  buttonFigmaStatePreviewClasses,
  buttonGhostFigmaStatePreviewClasses,
  type ButtonFigmaState,
} from "@/components/ui/button-figma-states";
import {
  Button,
  type ButtonGhostMode,
  type ButtonVariant,
} from "@/components/ui/button";
import { CopyIcon, ExternalLinkIcon, PlusIcon } from "@/lib/documentation/configs/button/shared";

const FIGMA_STATES: ButtonFigmaState[] = [
  "enabled",
  "hovered",
  "selected",
  "disabled",
];

/** Preview estático dos 4 estados — $button-filled ou $button-ghost. */
export function ButtonComponentStatePreview({
  component,
  visualType = "primary",
  size = "default",
  ghostMode = "dark",
}: {
  component: "filled" | "ghost";
  visualType?: ButtonVariant;
  size?: "default" | "compact";
  ghostMode?: ButtonGhostMode;
}) {
  const variant = component === "ghost" ? "ghost" : visualType;
  const ghostPreviewClasses = buttonGhostFigmaStatePreviewClasses[ghostMode];

  return (
    <div className="button-figma-states">
      {FIGMA_STATES.map((state) => (
        <div key={state} className="button-figma-state-cell">
          <span className="button-figma-state-label">
            {buttonFigmaStateLabels[state]}
          </span>
          <Button
            variant={variant}
            mode={component === "ghost" ? ghostMode : undefined}
            size={component === "filled" ? size : undefined}
            disabled={state === "disabled"}
            iconLeft={component === "ghost" ? <PlusIcon /> : undefined}
            iconRight={<PlusIcon />}
            className={cn(
              component === "ghost" &&
                (state === "hovered" || state === "selected")
                ? ghostPreviewClasses[state]
                : component !== "ghost" &&
                    (state === "hovered" || state === "selected")
                  ? buttonFigmaStatePreviewClasses[variant as Exclude<
                      ButtonVariant,
                      "ghost"
                    >][state]
                  : undefined,
              "pointer-events-none",
            )}
          >
            Button label
          </Button>
        </div>
      ))}
    </div>
  );
}

/** Tipos visuais do $button-filled (não confundir com component type). */
export function ButtonFilledTypesPreview() {
  const types = ["primary", "subtle", "destructive", "secondary"] as const;
  const labels: Record<(typeof types)[number], string> = {
    primary: "Brand",
    subtle: "Subtle",
    destructive: "Danger",
    secondary: "Outline",
  };

  return (
    <div className="button-family-types-preview">
      {types.map((type) => (
        <Button key={type} variant={type} iconRight={<PlusIcon />}>
          {labels[type]}
        </Button>
      ))}
    </div>
  );
}

const linkStateClasses: Record<
  Exclude<ButtonFigmaState, "enabled" | "disabled">,
  string
> = {
  hovered: "text-[var(--color-theme-text-action-default-dark)] underline",
  selected:
    "text-[var(--color-theme-text-action-default-dark)] underline decoration-2",
};

/** $button-link — preview documental (componente independente no Figma). */
export function ButtonLinkStatePreview() {
  return (
    <div className="button-figma-states">
      {FIGMA_STATES.map((state) => (
        <div key={state} className="button-figma-state-cell">
          <span className="button-figma-state-label">
            {buttonFigmaStateLabels[state]}
          </span>
          <button
            type="button"
            disabled={state === "disabled"}
            className={cn(
              "button-link-doc inline-flex items-center gap-[var(--space-kz-200)]",
              "text-[length:var(--typography-text-md)] leading-[var(--typography-leading-label-md)]",
              "font-semibold text-[var(--color-theme-text-action-default-dark)] underline",
              "disabled:text-[var(--color-theme-text-action-disabled-light)] disabled:no-underline",
              state === "hovered" || state === "selected"
                ? linkStateClasses[state]
                : undefined,
              "pointer-events-none",
            )}
          >
            <span>Button label</span>
            <span className="inline-flex size-[var(--space-kz-500)] shrink-0 [&_svg]:size-full">
              <ExternalLinkIcon />
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}

const copyStateClasses: Record<
  Exclude<ButtonFigmaState, "enabled" | "disabled">,
  string
> = {
  hovered:
    "text-[var(--color-theme-text-ghost-hovered-dark)] [&_.btn-copy-icon]:opacity-100",
  selected:
    "text-[var(--color-theme-text-ghost-selected-dark)] [&_.btn-copy-icon]:opacity-100",
};

/** $button-copy — preview documental (componente independente no Figma). */
export function ButtonCopyStatePreview() {
  return (
    <div className="button-figma-states button-figma-states--doc">
      {FIGMA_STATES.map((state) => (
        <div key={state} className="button-figma-state-cell">
          <span className="button-figma-state-label">
            {buttonFigmaStateLabels[state]}
          </span>
          <button
            type="button"
            disabled={state === "disabled"}
            className={cn(
              "button-copy-doc inline-flex items-center gap-[var(--space-kz-200)]",
              "text-[length:var(--typography-text-md)] leading-[var(--typography-leading-label-md)]",
              "font-semibold text-[var(--color-theme-text-ghost-enabled-dark)]",
              "disabled:text-[var(--color-theme-text-ghost-disabled-dark)]",
              state === "hovered" || state === "selected"
                ? copyStateClasses[state]
                : undefined,
              "pointer-events-none",
            )}
          >
            <span>Button label</span>
            <span
              className="btn-copy-icon inline-flex size-[var(--space-kz-500)] shrink-0 opacity-0 transition-opacity [&_svg]:size-full"
              aria-hidden
            >
              <CopyIcon />
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}
