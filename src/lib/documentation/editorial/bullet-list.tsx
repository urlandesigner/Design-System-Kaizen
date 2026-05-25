type BulletListProps = {
  items: string[];
  variant?: "default" | "checklist";
};

export function BulletList({ items, variant = "default" }: BulletListProps) {
  if (variant === "checklist") {
    return (
      <ul className="doc-a11y-checklist" role="list">
        {items.map((item) => (
          <li key={item} className="doc-a11y-checklist-item">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="doc-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
