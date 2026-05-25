import type {
  AnatomyNoteConfig,
  AnatomyPartConfig,
} from "@/lib/documentation/types/component-doc";
import { cn } from "@/lib/utils";

type AnatomyBlockProps = {
  parts: AnatomyPartConfig[];
  notes: AnatomyNoteConfig[];
  visual?: React.ReactNode;
};

const partVariantClass: Record<
  NonNullable<AnatomyPartConfig["variant"]>,
  string
> = {
  container: "doc-anatomy-part--container",
  label: "doc-anatomy-part--label",
  default: "",
};

export function AnatomyBlock({ parts, notes, visual }: AnatomyBlockProps) {
  return (
    <div className="doc-anatomy">
      {visual ? <div className="doc-anatomy-showcase">{visual}</div> : null}
      <div className="doc-anatomy-visual" aria-hidden>
        {parts.map((part) => (
          <span
            key={part.id}
            className={cn(
              "doc-anatomy-part",
              part.variant ? partVariantClass[part.variant] : undefined,
            )}
          >
            {part.label}
          </span>
        ))}
      </div>
      <ul className="doc-anatomy-list">
        {notes.map((note) => (
          <li key={note.term}>
            <strong>{note.term}</strong> — {note.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
