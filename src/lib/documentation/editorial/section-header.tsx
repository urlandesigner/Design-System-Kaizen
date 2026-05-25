type SectionHeaderProps = {
  title: string;
  description?: string;
};

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <header className="doc-section-header">
      <h2 className="doc-section-title">{title}</h2>
      {description ? (
        <p className="doc-section-description">{description}</p>
      ) : null}
    </header>
  );
}
