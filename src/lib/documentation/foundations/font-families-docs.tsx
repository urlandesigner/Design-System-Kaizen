import {
  designSystemFontFamilies,
  fontSpecimenLines,
  type FontFamilyDefinition,
} from "@/lib/documentation/foundations/font-families";

function MetaRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="font-family-meta-row">
      <dt className="font-family-meta-label">{label}</dt>
      <dd className="font-family-meta-value">{children}</dd>
    </div>
  );
}

function FontFamilyCard({ family }: { family: FontFamilyDefinition }) {
  return (
    <article className="font-family-card">
      <header className="font-family-card-header">
        <span className="font-family-role">{family.role}</span>
        <h3 className={`font-family-name ${family.previewClassName}`}>{family.name}</h3>
        <p className="font-family-description">{family.description}</p>
      </header>

      <div className={`font-family-specimen ${family.previewClassName}`}>
        <p className="font-family-specimen-line font-family-specimen-line--upper">
          {fontSpecimenLines.upper}
        </p>
        <p className="font-family-specimen-line font-family-specimen-line--lower">
          {fontSpecimenLines.lower}
        </p>
        <p className="font-family-specimen-line font-family-specimen-line--numbers">
          {fontSpecimenLines.numbers}
        </p>
        {family.specimenSample ? (
          <p className="font-family-specimen-sample">{family.specimenSample}</p>
        ) : null}
      </div>

      <div className="font-family-card-body">
        <div>
          <h4 className="font-family-uses-title">Usada para</h4>
          <ul className="font-family-uses-list">
            {family.usages.map((use) => (
              <li key={use}>{use}</li>
            ))}
          </ul>
        </div>

        <dl className="font-family-meta">
          <MetaRow label="CSS variable">
            <code>{family.cssVariable}</code>
            <span className="font-family-meta-hint">
              Carregada via <code>{family.cssVariableFallback}</code>
            </span>
          </MetaRow>
          <MetaRow label="Tailwind">
            <code>{family.tailwindClass}</code>
          </MetaRow>
          <MetaRow label="Fallback stack">
            <code className="font-family-meta-stack">{family.fallbackStack}</code>
          </MetaRow>
          <MetaRow label="Tokens Figma">
            <span className="text-muted-foreground">{family.tokenNote}</span>
          </MetaRow>
        </dl>
      </div>
    </article>
  );
}

export function FontFamiliesSection() {
  return (
    <div className="font-families-section">
      <div className="font-families-grid">
        {designSystemFontFamilies.map((family) => (
          <FontFamilyCard key={family.id} family={family} />
        ))}
      </div>
    </div>
  );
}

export function TypographyPlaceholderSection({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id?: string;
}) {
  return (
    <section id={id} className="typography-placeholder">
      <div className="typography-placeholder-inner surface-card">
        <h3 className="typography-placeholder-title">{title}</h3>
        <p className="typography-placeholder-desc">{description}</p>
        <span className="typography-placeholder-badge">Em breve</span>
      </div>
    </section>
  );
}
