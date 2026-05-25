import { cn } from "@/lib/utils";

export type PreviewBlockProps = {
  label?: string;
  live?: boolean;
  showcase?: boolean;
  children: React.ReactNode;
  align?: "start" | "center";
};

export function PreviewBlock({
  label,
  live = false,
  showcase = false,
  children,
  align = "start",
}: PreviewBlockProps) {
  if (showcase) {
    return (
      <figure className="doc-showcase">
        <div
          className="doc-showcase-toolbar"
          role="tablist"
          aria-label="Modos de visualização"
        >
          <span
            role="tab"
            aria-selected={true}
            className="doc-showcase-tab doc-showcase-tab--active"
          >
            Preview
          </span>
          <span
            role="tab"
            aria-selected={false}
            aria-disabled
            className="doc-showcase-tab doc-showcase-tab--disabled"
          >
            Code
          </span>
          <span
            role="tab"
            aria-selected={false}
            aria-disabled
            className="doc-showcase-tab doc-showcase-tab--disabled"
          >
            Anatomy
          </span>
        </div>
        <div
          className={cn(
            "doc-showcase-stage",
            align === "center" && "doc-showcase-stage--center",
          )}
        >
          <div className="doc-showcase-content">{children}</div>
        </div>
      </figure>
    );
  }

  return (
    <figure className="doc-preview-figure">
      {(label || live) && (
        <figcaption className="doc-preview-caption">
          {live ? <span className="doc-live-badge">Live</span> : null}
          {label ? <span>{label}</span> : null}
        </figcaption>
      )}
      <div
        className={cn(
          "doc-preview",
          align === "center" && "doc-preview--center",
        )}
      >
        {children}
      </div>
    </figure>
  );
}
