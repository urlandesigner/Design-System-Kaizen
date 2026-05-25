import { cn } from "@/lib/utils";

export type KaizenMarkProps = {
  className?: string;
  /** decorative | branded — branded uses foreground ink */
  variant?: "decorative" | "branded";
  title?: string;
};

/** Emblema modular Kaizen — precisão editorial, sem ornamento oriental. */
export function KaizenMark({
  className,
  variant = "branded",
  title = "Kaizen",
}: KaizenMarkProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={cn(
        "size-4 shrink-0",
        variant === "decorative" && "text-muted-foreground/35",
        variant === "branded" && "text-foreground",
        className,
      )}
    >
      {title ? <title>{title}</title> : null}
      <rect
        x="2"
        y="2"
        width="12"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M5 6.25h4.5M5 8h6M5 9.75h3.25"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
