import type {
  ChangelogChangeType,
  ChangelogEntry,
  ChangelogSection,
} from "@/content/changelog/types";

const ENTRY_RE = /^\((added|changed|fixed|removed|deprecated)\)\s+(.+)$/;
const SUBSECTION_RE = /^(\d+\.\d+)\s+(.+)$/;

function isLegendLine(line: string): boolean {
  return line.includes(" = ");
}

export function parseChangelogBody(body: string): ChangelogSection[] {
  const sections: ChangelogSection[] = [];
  let currentSection: ChangelogSection | null = null;
  let currentSubsection: ChangelogSection["subsections"][number] | null = null;
  let inLegend = false;

  for (const rawLine of body.split("\n")) {
    const line = rawLine.trim();
    if (!line) {
      continue;
    }

    if (line === "Legendas:") {
      inLegend = true;
      continue;
    }

    if (inLegend) {
      if (isLegendLine(line) || line.startsWith("→")) {
        continue;
      }
      inLegend = false;
    }

    const entryMatch = line.match(ENTRY_RE);
    if (entryMatch && !isLegendLine(line)) {
      const entry: ChangelogEntry = {
        type: entryMatch[1] as ChangelogChangeType,
        text: entryMatch[2],
      };

      if (currentSubsection) {
        currentSubsection.entries.push(entry);
      } else if (currentSection) {
        currentSection.entries.push(entry);
      }
      continue;
    }

    const subsectionMatch = line.match(SUBSECTION_RE);
    if (subsectionMatch && currentSection) {
      currentSubsection = {
        title: `${subsectionMatch[1]} ${subsectionMatch[2]}`,
        entries: [],
      };
      currentSection.subsections.push(currentSubsection);
      continue;
    }

    currentSection = { title: line, subsections: [], entries: [] };
    currentSubsection = null;
    sections.push(currentSection);
  }

  return sections;
}
