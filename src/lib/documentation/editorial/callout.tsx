import { cn } from "@/lib/utils";

type CalloutVariant = "info" | "tip" | "warning";

type CalloutProps = {
  title?: string;
  variant?: CalloutVariant;
  children: React.ReactNode;
};

const variantLabel: Record<CalloutVariant, string> = {
  info: "Info",
  tip: "Tip",
  warning: "Atenção",
};

export function Callout({
  title,
  variant = "info",
  children,
}: CalloutProps) {
  return (
    <aside
      className={cn("doc-callout", `doc-callout--${variant}`)}
      role="note"
    >
      <p className="doc-callout-label">{title ?? variantLabel[variant]}</p>
      <div className="doc-callout-body">{children}</div>
    </aside>
  );
}
