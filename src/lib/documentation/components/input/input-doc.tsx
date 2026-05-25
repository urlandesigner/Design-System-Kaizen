import { ComponentDocPage } from "@/lib/documentation/renderer/component-doc-page";
import { inputDocConfig } from "@/lib/documentation/configs/input/input.config";

export function InputDoc() {
  return <ComponentDocPage config={inputDocConfig} />;
}
