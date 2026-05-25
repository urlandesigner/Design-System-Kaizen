import { ComponentDocPage } from "@/lib/documentation/renderer/component-doc-page";
import { badgeDocConfig } from "@/lib/documentation/configs/badge/badge.config";

export function BadgeDoc() {
  return <ComponentDocPage config={badgeDocConfig} />;
}
