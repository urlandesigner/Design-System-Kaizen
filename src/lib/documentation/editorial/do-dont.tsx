import type { DoDontItemConfig } from "@/lib/documentation/types/component-doc";
import { cn } from "@/lib/utils";

type DoDontProps = {
  doItems: DoDontItemConfig[];
  dontItems: DoDontItemConfig[];
};

function DoDontColumn({
  title,
  variant,
  items,
}: {
  title: string;
  variant: "do" | "dont";
  items: DoDontItemConfig[];
}) {
  return (
    <div className={cn("doc-do-dont-column", `doc-do-dont-column--${variant}`)}>
      <h3 className={`doc-do-dont-heading doc-do-dont-heading--${variant}`}>
        {title}
      </h3>
      <ul className="doc-do-dont-list">
        {items.map((item) => (
          <li
            key={item.label}
            className={cn("doc-do-dont-item", `doc-do-dont-item--${variant}`)}
          >
            <div className="doc-do-dont-preview">{item.example}</div>
            <p className="doc-do-dont-label">{item.label}</p>
            <p className="doc-do-dont-description">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DoDont({ doItems, dontItems }: DoDontProps) {
  return (
    <div className="doc-do-dont-grid">
      <DoDontColumn title="Do" variant="do" items={doItems} />
      <DoDontColumn title="Don't" variant="dont" items={dontItems} />
    </div>
  );
}
