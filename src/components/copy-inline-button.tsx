type CopyInlineButtonProps = {
  value: string;
  label?: string;
  successLabel?: string;
  errorLabel?: string;
  variant?: "pill" | "ghost";
  className?: string;
};

export function CopyInlineButton({
  value,
  label = "Copiar",
  successLabel = "Copiado",
  errorLabel = "Falhou",
  variant = "pill",
  className,
}: CopyInlineButtonProps) {
  return (
    <button
      type="button"
      className={`copy-inline-button${
        variant === "ghost" ? " copy-inline-button--ghost" : ""
      }${className ? ` ${className}` : ""}`}
      data-copy-value={value}
      data-copy-label={label}
      data-copy-success-label={successLabel}
      data-copy-error-label={errorLabel}
      aria-live="polite"
    >
      {label}
    </button>
  );
}
