import { ComponentDocPage } from "@/lib/documentation/renderer/component-doc-page";
import { checkboxDocConfig } from "@/lib/documentation/configs/checkbox/checkbox.config";

export function CheckboxDoc() {
  return <ComponentDocPage config={checkboxDocConfig} />;
}
