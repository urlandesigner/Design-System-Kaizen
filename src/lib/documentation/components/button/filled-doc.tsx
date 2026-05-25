import { ComponentDocPage } from "@/lib/documentation/renderer/component-doc-page";
import { buttonFilledDocConfig } from "@/lib/documentation/configs/button/filled.config";

export function ButtonFilledDoc() {
  return <ComponentDocPage config={buttonFilledDocConfig} />;
}
