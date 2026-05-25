import { ComponentDocPage } from "@/lib/documentation/renderer/component-doc-page";
import { radioDocConfig } from "@/lib/documentation/configs/radio/radio.config";

export function RadioDoc() {
  return <ComponentDocPage config={radioDocConfig} />;
}
