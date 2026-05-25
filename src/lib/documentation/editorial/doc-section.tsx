import { cn } from "@/lib/utils";

import { SectionHeader } from "@/lib/documentation/editorial/section-header";

type DocSectionProps = {
  id: string;
  title: string;
  description?: string;
  featured?: boolean;
  children: React.ReactNode;
};

export function DocSection({
  id,
  title,
  description,
  featured = false,
  children,
}: DocSectionProps) {
  return (
    <section
      id={id}
      className={cn("doc-section", featured && "doc-section--featured")}
    >
      <SectionHeader title={title} description={description} />
      <div className="doc-section-body">{children}</div>
    </section>
  );
}
