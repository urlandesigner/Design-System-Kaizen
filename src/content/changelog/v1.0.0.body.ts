export const changelogV100Body = `Legendas:
(added) = Feature adicionada
(changed) = Feature alterada
(fixed) = Bug ajustado
(removed) = Feature removida
(deprecated) = Ira ser removida no futuro
→ = Alterado para

Tokens da Foundation
1.1 Tokens de space
(added) No Projeto, $space-kz é referenciado como $kz
(changed) $spacing → $space-kz
1.2 Tokens de border
(changed) $border-width → $border-kz
(changed) $border-radius → $rounded-kz
1.3 Tokens de texto
(added) $paragraphyspacing-kz adicionado
(changed) $body → $paragraph-kz
(changed) $font-weight → $font-kz
(changed) $font-size → $text-kz
(changed) $line-height → $leading-kz
(changed) $letter-spacing → $letterspacing-kz
(changed) $title-xl → $title-h1
(changed) $title-lg → $title-h2
(changed) $title-md → $title-h3
(changed) $title-sm → $title-h4
(changed) $title-xs → $title-h5
(changed) $title-xxs → $title-h6
1.4 Tokens de cor
(changed) O grid de cores foi invertido, começando pelas cores claras até as escuras
(changed) Os tokens de cores começam com $kz
(changed) -99 → -50
(changed) -95 → -100
(changed) -90 → -200
(changed) -80 → -300
(changed) -70 → -400
(changed) -60 → -500
(changed) -50 → -600
(changed) -40 → -700
(changed) -30 → -800
(changed) -20 → -900
(changed) -10 → -950
(changed) $kz-neutral-50 value → #FFFFFF
(changed) $kz-neutral-100 value → #FAF9FC
(changed) $kz-neutral-200 value → #ECEBF0
(changed) $kz-neutral-300 value → #E2E1E5
(changed) $kz-neutral-400 value → #C9C8CC
(changed) $kz-neutral-500 value → #B0AFB2
(changed) $kz-neutral-600 value → #6C6B6E
(changed) $kz-neutral-700 value → #505052
(changed) $kz-neutral-800 value → #373738
(changed) $kz-neutral-900 value → #1E1E1F
(changed) $kz-neutral-950 value → #050505
(removed) $group-100 removida
(removed) $group-0 removida
(removed) $club-100 removida
(removed) $club-0 removida
(removed) $esc-100 removida
(removed) $esc-0 removida
(removed) $neutral-100 removida
(removed) $neutral-0 removida
(removed) $red-100 removida
(removed) $red-0 removida
(removed) $amber-100 removida
(removed) $amber-0 removida
(removed) $green-100 removida
(removed) $green-0 removida
(removed) $blue-100 removida
(removed) $blue-0 removida
(removed) $purple-100 removida
(removed) $purple-0 removida
1.5 Tokens de effect style
(changed) $background-blur-sm → $blur-kz-sm
(changed) $background-blur-md → $blur-kz-md
(changed) $elevation-sm → $shadow-sm
(changed) $blur-kz-sm value → 8 px
(changed) $blur-kz-md value → 12 px
(changed) $shadow-sm value → 0 0px 8px 2 rgb(5 5 5 / 0.1)
Tokens do Breakpoint
(added) $modal-padding-md adicionado
(added) $card-padding-sm adicionado
(added) $card-padding-md adicionado
(added) $modal-gap-md adicionado
(added) $card-gap-md adicionado
(added) Component style $footer-size-default adicionado no component $footer
(added) Component style $footer-padding-default adicionado no component $footer
(added) Component style $header-size-default adicionado no component $header
(added) Component style $header-padding-default adicionado no component $header
(added) Component style $sidebar-padding-sm adicionado no component $sidebar
(added) Component style $sidebar-padding-md adicionado no component $sidebar
(added) Component style $sidebar-height-default adicionado no component $sidebar
(changed) $fontsize-sm → $text-sm
(changed) $fontsize-md → $text-md
(changed) $fontsize-lg → $text-lg
(changed) $lineheight-label-sm → $leading-label-sm
(changed) $lineheight-label-md → $leading-label-md
(changed) $lineheight-label-lg → $leading-label-lg
(changed) $lineheight-body-sm → $leading-paragraphy-sm
(changed) $lineheight-body-md → $leading-paragraphy-md
(changed) $lineheight-body-lg → $leading-paragraphy-lg
Tokens do Theme
(changed) $color-theme-text-primary-light → $color-theme-text-primary-dark
(changed) $color-theme-text-secondary-light → $color-theme-text-secondary-dark
(changed) $color-theme-text-tertiary-light → $color-theme-text-tertiary-dark
(changed) $color-theme-text-primary-dark → $color-theme-text-primary-light
(changed) $color-theme-text-secondary-dark → $color-theme-text-secondary-light
(changed) $color-theme-text-tertiary-dark → $color-theme-text-tertiary-light
(changed) $color-theme-text-feedback-green → $color-theme-text-feedback-positive
(changed) $color-theme-text-feedback-red → $color-theme-text-feedback-negative
(changed) $color-theme-text-feedback-amber → $color-theme-text-feedback-warning
(changed) $color-theme-text-feedback-blue → $color-theme-text-feedback-informative
(changed) $color-theme-surface-feedback-green-light → $color-theme-surface-positive-light
(changed) $color-theme-surface-feedback-red-light → $color-theme-surface-negative-light
(changed) $color-theme-surface-feedback-amber-light → $color-theme-surface-warning-light
(changed) $color-theme-surface-feedback-blue-light → $color-theme-surface-informative-light
(changed) $color-theme-surface-feedback-green-dark → $color-theme-surface-positive-dark
(changed) $color-theme-surface-feedback-red-dark → $color-theme-surface-negative-dark
(changed) $color-theme-surface-feedback-amber-dark → $color-theme-surface-warning-dark
(changed) $color-theme-surface-feedback-blue-dark → $color-theme-surface-informative-dark
(changed) $color-theme-text-action-enabled-light → $color-theme-text-action-default-dark
(changed) $color-theme-text-button-enabled → $color-theme-text-button-default
(changed) $color-theme-text-danger-enabled → $color-theme-text-danger-default
(changed) $color-theme-text-input-enabled → $color-theme-text-input-default
(changed) $color-theme-icon-feedback-information → $color-theme-icon-feedback-informative
(changed) $color-theme-icon-action-enabled-light → $color-theme-icon-action-default-light
(changed) $color-theme-icon-action-enabled-dark → $color-theme-icon-action-default-dark
(changed) $color-theme-icon-button-enabled → $color-theme-icon-button-default
(changed) $color-theme-icon-danger-enabled → $color-theme-icon-danger-default
(changed) $color-theme-icon-input-enabled → $color-theme-icon-input-default
(changed) $color-theme-action-hovered-light value → $color-kz-neutral-300
(changed) $color-theme-action-selected-light value → $color-kz-neutral-200
(changed) $color-theme-surface-badge-neutral value → $color-kz-neutral-500
(changed) $color-theme-text-primary-dark value → $color-kz-neutral-900
(changed) $color-theme-text-secondary-dark value → $color-kz-neutral-700
(changed) $color-theme-text-tertiary-dark value → $color-kz-neutral-600
(changed) $color-theme-text-action-default-light value → $color-kz-neutral-900
(changed) $color-theme-text-action-disabled-dark value → $color-kz-neutral-600
(changed) $color-theme-text-ghost-enabled-dark value → $color-kz-neutral-900
(changed) $color-theme-text-ghost-hovered-dark value → $color-kz-neutral-700
(changed) $color-theme-text-ghost-selected-dark value → $color-kz-neutral-900
(changed) $color-theme-text-input-default value → $color-kz-neutral-900
(changed) $color-theme-text-badge-neutral value → $color-kz-neutral-900
(changed) $color-theme-icon-primary-dark value → $color-kz-neutral-900
(changed) $color-theme-icon-secondary-dark value → $color-kz-neutral-700
(changed) $color-theme-icon-brand value → $color-kz-esc-900 no Escritório
(changed) $color-theme-icon-brand value → $color-kz-group-900 no Group
(changed) $color-theme-icon-action-default-light value → $color-kz-neutral-900
(changed) $color-theme-icon-action-disable-dark value → $color-kz-neutral-600
(changed) $color-theme-icon-ghost-enabled-dark value → $color-kz-neutral-900
(changed) $color-theme-icon-ghost-hovered-dark value → $color-kz-neutral-700
(changed) $color-theme-icon-ghost-selected-dark value → $color-kz-neutral-900
(changed) $color-theme-icon-input-default value → $color-kz-neutral-900
(changed) $color-theme-icon-badge-neutral value → $color-kz-neutral-900
(changed) $color-theme-border-brand value → $color-kz-esc-900 no Escritório
(changed) $color-theme-border-brand value → $color-kz-group-900 no Group
(changed) $color-theme-text-action-default-light value → $color-kz-neutral-50
(changed) $color-theme-text-action-disabled-light value → $color-kz-neutral-600
(changed) $color-theme-text-action-default-dark value → $color-kz-neutral-900
(changed) $color-theme-text-action-disabled-dark value → $color-kz-neutral-500
(changed) $color-theme-icon-action-default-light value → $color-kz-neutral-50
(changed) $color-theme-icon-action-disabled-light value → $color-kz-neutral-600
(changed) $color-theme-icon-action-default-dark value → $color-kz-neutral-900
(changed) $color-theme-icon-action-disabled-dark value → $color-kz-neutral-500
Components
(added) $card adicionado
(added) $fallback-image adicionado
(added) $modal adicionado
(added) $collapsable adicionado
(added) $dropdown adicionado
(added) $dropzone adicionado
(added) $combobox adicionado
(added) $tabs adicionado
(added) $chart adicionado
(added) $accordion → Slot
(added) $accordion → Variant com border
(added) $breadcrumb → Slot
(added) $breadcrumb → Light mode
(added) $checkbox → Light mode
(added) $radio → Light mode
(added) $dataTable → Slot
(removed) $avatar tamanhos fixos removidos
Itens gerais
(added) Tokens genéricos tem a nomenclatura de -kz
(changed) Sistema Escritório se tornou o sistema padrão do Kaizen
(changed) Sistema Escritório tem a denominação $esc
(changed) Sistema Group tem a denominação $group
(changed) Todos os tokens do menu Variables tiveram os prefixos repetitivos removidos
(changed) Todos as nomenclaturas começam com letra minúscula
(removed) Sistema Club removido`;
