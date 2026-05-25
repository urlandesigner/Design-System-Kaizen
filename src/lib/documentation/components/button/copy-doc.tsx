import { ComponentDocPage } from "@/lib/documentation/renderer/component-doc-page";
import { buttonCopyDocConfig } from "@/lib/documentation/configs/button/copy.config";

export function ButtonCopyDoc() {
  return <ComponentDocPage config={buttonCopyDocConfig} />;
}
