import { ComponentDocPage } from "@/lib/documentation/renderer/component-doc-page";
import { buttonLinkDocConfig } from "@/lib/documentation/configs/button/link.config";

export function ButtonLinkDoc() {
  return <ComponentDocPage config={buttonLinkDocConfig} />;
}
