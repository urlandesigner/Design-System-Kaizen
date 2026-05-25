import { BulletList } from "@/lib/documentation/editorial/bullet-list";

export type AccessibilityChecklistProps = {
  items: string[];
};

/** Checklist compacta de acessibilidade. */
export function AccessibilityChecklist({ items }: AccessibilityChecklistProps) {
  return <BulletList items={items} variant="checklist" />;
}
