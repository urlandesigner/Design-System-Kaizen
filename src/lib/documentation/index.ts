export * from "@/lib/documentation/editorial";
export * from "@/lib/documentation/primitives";
export { ComponentDocPage } from "@/lib/documentation/renderer/component-doc-page";
export { buttonFilledDocConfig } from "@/lib/documentation/configs/button/filled.config";
export { buttonGhostDocConfig } from "@/lib/documentation/configs/button/ghost.config";
export { buttonLinkDocConfig } from "@/lib/documentation/configs/button/link.config";
export { buttonCopyDocConfig } from "@/lib/documentation/configs/button/copy.config";
export type {
  ComponentDocConfig,
  DocSectionConfig,
} from "@/lib/documentation/types/component-doc";
export {
  buildTocFromSections,
} from "@/lib/documentation/types/component-doc";
export {
  buildOfficialComponentToc,
  KAIZEN_COMPONENT_DOC_SECTION_ORDER,
  componentDocHeroDescription,
  validateOfficialComponentSections,
} from "@/lib/documentation/template/component-doc-template";
