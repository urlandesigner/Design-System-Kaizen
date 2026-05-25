import { buttonDocConfig } from "@/lib/documentation/configs/button.config";
import { ComponentDocPage } from "@/lib/documentation/renderer/component-doc-page";

export function ButtonDoc() {
  return <ComponentDocPage config={buttonDocConfig} />;
}
