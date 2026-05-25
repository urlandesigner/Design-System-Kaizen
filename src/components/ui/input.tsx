import { cn } from "@/lib/utils";

import { Button } from "./button";

/** Figma $input-field — Type property. */
export type InputFieldType = "basic" | "text" | "icon" | "copy" | "search";

/** Figma $input-field — State property (Selected = foco). */
export type InputFieldState = "enabled" | "selected" | "filled" | "error" | "disabled";

const labelTypography = [
  "text-[length:var(--typography-text-md)]",
  "leading-[var(--typography-leading-label-md)]",
  "font-[number:var(--font-kz-400)]",
  "tracking-[var(--letterspacing-kz-0)]",
] as const;

const stateBorder: Record<InputFieldState, string> = {
  enabled: "border-[var(--color-theme-border-input-enabled)]",
  selected: "border-[var(--color-theme-border-input-selected)]",
  filled: "border-[var(--color-theme-border-input-filled)]",
  error: "border-[var(--color-theme-border-input-error)]",
  disabled: "border-[var(--color-theme-border-input-disabled)]",
};

const typeGap: Record<InputFieldType, string> = {
  basic: "gap-[var(--space-kz-0)]",
  text: "gap-[var(--space-kz-200)]",
  icon: "gap-[var(--space-kz-200)]",
  copy: "gap-[var(--space-kz-200)]",
  search: "gap-[var(--space-kz-200)]",
};

const iconSlotClass =
  "inline-flex size-[var(--space-kz-500)] shrink-0 items-center justify-center text-[var(--color-theme-icon-secondary-dark)] [&_svg]:size-full";

export type InputFieldProps = {
  type?: InputFieldType;
  state?: InputFieldState;
  placeholder?: string;
  value?: string;
  /** Figma: prefixo — Type=Text */
  prefix?: string;
  showPrefix?: boolean;
  /** Figma: sufixo — Type=Text */
  suffix?: string;
  showSuffix?: boolean;
  iconLeft?: React.ReactNode;
  showIconLeft?: boolean;
  iconRight?: React.ReactNode;
  showIconRight?: boolean;
  className?: string;
};

function FieldValue({ state, children }: { state: InputFieldState; children: React.ReactNode }) {
  const color =
    state === "disabled"
      ? "text-[var(--color-theme-text-input-disabled)]"
      : "text-[var(--color-theme-text-input-default)]";

  return <FieldText className={color}>{children}</FieldText>;
}

function FieldPlaceholder({ children }: { children: React.ReactNode }) {
  return (
    <FieldText className="text-[var(--color-theme-text-input-placeholder)]">
      {children}
    </FieldText>
  );
}

function AffixText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "shrink-0 whitespace-nowrap",
        ...labelTypography,
        "text-[var(--color-theme-text-secondary-dark)]",
      )}
    >
      {children}
    </span>
  );
}

function FieldText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("min-w-0 flex-1 truncate", ...labelTypography, className)}>
      {children}
    </span>
  );
}

function InputAction({
  type,
  state,
  children,
}: {
  type: "copy" | "search";
  state: InputFieldState;
  children: React.ReactNode;
}) {
  const label = type === "copy" ? "Copiar" : "Buscar";

  return (
    <Button
      type="button"
      variant="ghost"
      mode="dark"
      disabled={state === "disabled"}
      iconRight={children}
      className="input-field-action shrink-0 pointer-events-none gap-0 p-0"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
    </Button>
  );
}

/** Campo $input-field — espelha variantes e estados do Figma Production v1.1.0. */
export function InputField({
  type = "basic",
  state = "enabled",
  placeholder = "Placeholder",
  value = "Value",
  prefix = "Prefixo",
  showPrefix = true,
  suffix = "Sufixo",
  showSuffix = true,
  iconLeft,
  showIconLeft = true,
  iconRight,
  showIconRight = true,
  className,
}: InputFieldProps) {
  const showsValue = state === "selected" || state === "filled" || state === "error";
  const showsPlaceholder = state === "enabled";
  const showsDisabledValue = state === "disabled";
  const isText = type === "text";
  const isIcon = type === "icon";
  const isCopy = type === "copy";
  const isSearch = type === "search";
  const hasAction = isCopy || isSearch;

  return (
    <div
      className={cn(
        "input-field",
        "flex w-full max-w-[20.875rem] items-center",
        "rounded-[var(--rounded-kz-200)]",
        "border border-solid border-[length:var(--border-kz-25)]",
        "bg-[var(--color-theme-surface-input-enabled)]",
        "p-[var(--space-kz-300)]",
        typeGap[type],
        stateBorder[state],
        state === "disabled" && "pointer-events-none opacity-100",
        className,
      )}
      data-input-type={type}
      data-input-state={state}
    >
      {isText && showPrefix ? <AffixText>{prefix}</AffixText> : null}

      {isIcon && showIconLeft && iconLeft ? (
        <span className={iconSlotClass} aria-hidden>
          {iconLeft}
        </span>
      ) : null}

      {showsPlaceholder ? <FieldPlaceholder>{placeholder}</FieldPlaceholder> : null}

      {showsValue || showsDisabledValue ? <FieldValue state={state}>{value}</FieldValue> : null}

      {isText && (showsValue || showsDisabledValue) && showSuffix ? (
        <AffixText>{suffix}</AffixText>
      ) : null}

      {isText && showsPlaceholder && showSuffix ? <AffixText>{suffix}</AffixText> : null}

      {hasAction ? (
        <InputAction type={isCopy ? "copy" : "search"} state={state}>
          {iconRight}
        </InputAction>
      ) : null}

      {isIcon && showIconRight && iconRight ? (
        <span className={iconSlotClass} aria-hidden>
          {iconRight}
        </span>
      ) : null}
    </div>
  );
}
