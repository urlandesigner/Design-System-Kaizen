import { ComponentDocPage } from "@/lib/documentation/renderer/component-doc-page";
import { accordionDocConfig } from "@/lib/documentation/configs/accordion/accordion.config";

export function AccordionDoc() {
  return <ComponentDocPage config={accordionDocConfig} />;
}
