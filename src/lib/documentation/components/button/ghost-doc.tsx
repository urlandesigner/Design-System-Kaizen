import { ComponentDocPage } from "@/lib/documentation/renderer/component-doc-page";
import { buttonGhostDocConfig } from "@/lib/documentation/configs/button/ghost.config";

export function ButtonGhostDoc() {
  return <ComponentDocPage config={buttonGhostDocConfig} />;
}
