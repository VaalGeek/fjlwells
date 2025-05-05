
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'About': typeof import("../components/About.vue")['default']
    'AnnouncementForm': typeof import("../components/AnnouncementForm.vue")['default']
    'Announcements': typeof import("../components/Announcements.vue")['default']
    'Calendar': typeof import("../components/Calendar.vue")['default']
    'ContactBar': typeof import("../components/ContactBar.vue")['default']
    'DashboardHeader': typeof import("../components/DashboardHeader.vue")['default']
    'Donations': typeof import("../components/Donations.vue")['default']
    'EventModal': typeof import("../components/EventModal.vue")['default']
    'FAB': typeof import("../components/FAB.vue")['default']
    'FloatingButton': typeof import("../components/FloatingButton.vue")['default']
    'GlobalRightPanel': typeof import("../components/GlobalRightPanel.vue")['default']
    'Hero': typeof import("../components/Hero.vue")['default']
    'History': typeof import("../components/History.vue")['default']
    'Login': typeof import("../components/Login.vue")['default']
    'Logo': typeof import("../components/Logo.vue")['default']
    'MessageSender': typeof import("../components/MessageSender.vue")['default']
    'NavBar': typeof import("../components/NavBar.vue")['default']
    'NavDropDown': typeof import("../components/NavDropDown.vue")['default']
    'NavItem': typeof import("../components/NavItem.vue")['default']
    'NewsLetter': typeof import("../components/NewsLetter.vue")['default']
    'NewsLetters': typeof import("../components/NewsLetters.vue")['default']
    'NotificationHeader': typeof import("../components/NotificationHeader.vue")['default']
    'NotificationSetup': typeof import("../components/NotificationSetup.vue")['default']
    'OTPManager': typeof import("../components/OTPManager.vue")['default']
    'Registration': typeof import("../components/Registration.vue")['default']
    'StaffCard': typeof import("../components/StaffCard.vue")['default']
    'StaffTabs': typeof import("../components/StaffTabs.vue")['default']
    'StakeholderPrompt': typeof import("../components/StakeholderPrompt.vue")['default']
    'StakeholderTable': typeof import("../components/StakeholderTable.vue")['default']
    'Uniform': typeof import("../components/Uniform.vue")['default']
    'Values': typeof import("../components/Values.vue")['default']
    'Vision': typeof import("../components/Vision.vue")['default']
    'UAccordion': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']
    'UAlert': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']
    'UApp': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']
    'UAvatar': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']
    'UAvatarGroup': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']
    'UBadge': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']
    'UBreadcrumb': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']
    'UButton': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']
    'UButtonGroup': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue")['default']
    'UCalendar': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue")['default']
    'UCard': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']
    'UCarousel': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']
    'UCheckbox': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']
    'UCheckboxGroup': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CheckboxGroup.vue")['default']
    'UChip': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']
    'UCollapsible': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']
    'UColorPicker': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ColorPicker.vue")['default']
    'UCommandPalette': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']
    'UContainer': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']
    'UContextMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']
    'UContextMenuContent': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']
    'UDrawer': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']
    'UDropdownMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']
    'UDropdownMenuContent': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']
    'UForm': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']
    'UFormField': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']
    'UIcon': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']
    'UInput': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']
    'UInputMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']
    'UInputNumber': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']
    'UKbd': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']
    'ULink': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']
    'ULinkBase': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']
    'UModal': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']
    'UNavigationMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']
    'UOverlayProvider': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue")['default']
    'UPagination': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']
    'UPinInput': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']
    'UPopover': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']
    'UProgress': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']
    'URadioGroup': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']
    'USelect': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']
    'USelectMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']
    'USeparator': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']
    'USkeleton': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']
    'USlideover': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']
    'USlider': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']
    'UStepper': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue")['default']
    'USwitch': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']
    'UTable': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']
    'UTabs': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']
    'UTextarea': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']
    'UToast': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']
    'UToaster': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']
    'UTooltip': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']
    'UTree': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tree.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'VitePwaManifest': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
    'NuxtPwaManifest': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
    'NuxtPwaAssets': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']
    'PwaAppleImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']
    'PwaAppleSplashScreenImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']
    'PwaFaviconImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']
    'PwaMaskableImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']
    'PwaTransparentImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAbout': LazyComponent<typeof import("../components/About.vue")['default']>
    'LazyAnnouncementForm': LazyComponent<typeof import("../components/AnnouncementForm.vue")['default']>
    'LazyAnnouncements': LazyComponent<typeof import("../components/Announcements.vue")['default']>
    'LazyCalendar': LazyComponent<typeof import("../components/Calendar.vue")['default']>
    'LazyContactBar': LazyComponent<typeof import("../components/ContactBar.vue")['default']>
    'LazyDashboardHeader': LazyComponent<typeof import("../components/DashboardHeader.vue")['default']>
    'LazyDonations': LazyComponent<typeof import("../components/Donations.vue")['default']>
    'LazyEventModal': LazyComponent<typeof import("../components/EventModal.vue")['default']>
    'LazyFAB': LazyComponent<typeof import("../components/FAB.vue")['default']>
    'LazyFloatingButton': LazyComponent<typeof import("../components/FloatingButton.vue")['default']>
    'LazyGlobalRightPanel': LazyComponent<typeof import("../components/GlobalRightPanel.vue")['default']>
    'LazyHero': LazyComponent<typeof import("../components/Hero.vue")['default']>
    'LazyHistory': LazyComponent<typeof import("../components/History.vue")['default']>
    'LazyLogin': LazyComponent<typeof import("../components/Login.vue")['default']>
    'LazyLogo': LazyComponent<typeof import("../components/Logo.vue")['default']>
    'LazyMessageSender': LazyComponent<typeof import("../components/MessageSender.vue")['default']>
    'LazyNavBar': LazyComponent<typeof import("../components/NavBar.vue")['default']>
    'LazyNavDropDown': LazyComponent<typeof import("../components/NavDropDown.vue")['default']>
    'LazyNavItem': LazyComponent<typeof import("../components/NavItem.vue")['default']>
    'LazyNewsLetter': LazyComponent<typeof import("../components/NewsLetter.vue")['default']>
    'LazyNewsLetters': LazyComponent<typeof import("../components/NewsLetters.vue")['default']>
    'LazyNotificationHeader': LazyComponent<typeof import("../components/NotificationHeader.vue")['default']>
    'LazyNotificationSetup': LazyComponent<typeof import("../components/NotificationSetup.vue")['default']>
    'LazyOTPManager': LazyComponent<typeof import("../components/OTPManager.vue")['default']>
    'LazyRegistration': LazyComponent<typeof import("../components/Registration.vue")['default']>
    'LazyStaffCard': LazyComponent<typeof import("../components/StaffCard.vue")['default']>
    'LazyStaffTabs': LazyComponent<typeof import("../components/StaffTabs.vue")['default']>
    'LazyStakeholderPrompt': LazyComponent<typeof import("../components/StakeholderPrompt.vue")['default']>
    'LazyStakeholderTable': LazyComponent<typeof import("../components/StakeholderTable.vue")['default']>
    'LazyUniform': LazyComponent<typeof import("../components/Uniform.vue")['default']>
    'LazyValues': LazyComponent<typeof import("../components/Values.vue")['default']>
    'LazyVision': LazyComponent<typeof import("../components/Vision.vue")['default']>
    'LazyUAccordion': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']>
    'LazyUAlert': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']>
    'LazyUApp': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']>
    'LazyUAvatar': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']>
    'LazyUAvatarGroup': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']>
    'LazyUBadge': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']>
    'LazyUBreadcrumb': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']>
    'LazyUButton': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']>
    'LazyUButtonGroup': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue")['default']>
    'LazyUCalendar': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue")['default']>
    'LazyUCard': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']>
    'LazyUCarousel': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']>
    'LazyUCheckbox': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']>
    'LazyUCheckboxGroup': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CheckboxGroup.vue")['default']>
    'LazyUChip': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']>
    'LazyUCollapsible': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']>
    'LazyUColorPicker': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ColorPicker.vue")['default']>
    'LazyUCommandPalette': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']>
    'LazyUContainer': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']>
    'LazyUContextMenu': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']>
    'LazyUContextMenuContent': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']>
    'LazyUDrawer': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']>
    'LazyUDropdownMenu': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']>
    'LazyUDropdownMenuContent': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']>
    'LazyUForm': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']>
    'LazyUFormField': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']>
    'LazyUIcon': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']>
    'LazyUInput': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']>
    'LazyUInputMenu': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']>
    'LazyUInputNumber': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']>
    'LazyUKbd': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']>
    'LazyULink': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']>
    'LazyULinkBase': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']>
    'LazyUModal': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']>
    'LazyUNavigationMenu': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']>
    'LazyUOverlayProvider': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue")['default']>
    'LazyUPagination': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']>
    'LazyUPinInput': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']>
    'LazyUPopover': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']>
    'LazyUProgress': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']>
    'LazyURadioGroup': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']>
    'LazyUSelect': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']>
    'LazyUSelectMenu': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']>
    'LazyUSeparator': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']>
    'LazyUSkeleton': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']>
    'LazyUSlideover': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']>
    'LazyUSlider': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']>
    'LazyUStepper': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue")['default']>
    'LazyUSwitch': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']>
    'LazyUTable': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']>
    'LazyUTabs': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']>
    'LazyUTextarea': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']>
    'LazyUToast': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']>
    'LazyUToaster': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']>
    'LazyUTooltip': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']>
    'LazyUTree': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tree.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyVitePwaManifest': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
    'LazyNuxtPwaManifest': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
    'LazyNuxtPwaAssets': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']>
    'LazyPwaAppleImage': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']>
    'LazyPwaAppleSplashScreenImage': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']>
    'LazyPwaFaviconImage': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']>
    'LazyPwaMaskableImage': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']>
    'LazyPwaTransparentImage': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const About: typeof import("../components/About.vue")['default']
export const AnnouncementForm: typeof import("../components/AnnouncementForm.vue")['default']
export const Announcements: typeof import("../components/Announcements.vue")['default']
export const Calendar: typeof import("../components/Calendar.vue")['default']
export const ContactBar: typeof import("../components/ContactBar.vue")['default']
export const DashboardHeader: typeof import("../components/DashboardHeader.vue")['default']
export const Donations: typeof import("../components/Donations.vue")['default']
export const EventModal: typeof import("../components/EventModal.vue")['default']
export const FAB: typeof import("../components/FAB.vue")['default']
export const FloatingButton: typeof import("../components/FloatingButton.vue")['default']
export const GlobalRightPanel: typeof import("../components/GlobalRightPanel.vue")['default']
export const Hero: typeof import("../components/Hero.vue")['default']
export const History: typeof import("../components/History.vue")['default']
export const Login: typeof import("../components/Login.vue")['default']
export const Logo: typeof import("../components/Logo.vue")['default']
export const MessageSender: typeof import("../components/MessageSender.vue")['default']
export const NavBar: typeof import("../components/NavBar.vue")['default']
export const NavDropDown: typeof import("../components/NavDropDown.vue")['default']
export const NavItem: typeof import("../components/NavItem.vue")['default']
export const NewsLetter: typeof import("../components/NewsLetter.vue")['default']
export const NewsLetters: typeof import("../components/NewsLetters.vue")['default']
export const NotificationHeader: typeof import("../components/NotificationHeader.vue")['default']
export const NotificationSetup: typeof import("../components/NotificationSetup.vue")['default']
export const OTPManager: typeof import("../components/OTPManager.vue")['default']
export const Registration: typeof import("../components/Registration.vue")['default']
export const StaffCard: typeof import("../components/StaffCard.vue")['default']
export const StaffTabs: typeof import("../components/StaffTabs.vue")['default']
export const StakeholderPrompt: typeof import("../components/StakeholderPrompt.vue")['default']
export const StakeholderTable: typeof import("../components/StakeholderTable.vue")['default']
export const Uniform: typeof import("../components/Uniform.vue")['default']
export const Values: typeof import("../components/Values.vue")['default']
export const Vision: typeof import("../components/Vision.vue")['default']
export const UAccordion: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']
export const UAlert: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']
export const UApp: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']
export const UAvatar: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']
export const UAvatarGroup: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']
export const UBadge: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']
export const UBreadcrumb: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']
export const UButton: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']
export const UButtonGroup: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue")['default']
export const UCalendar: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue")['default']
export const UCard: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']
export const UCarousel: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']
export const UCheckbox: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']
export const UCheckboxGroup: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CheckboxGroup.vue")['default']
export const UChip: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']
export const UCollapsible: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']
export const UColorPicker: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ColorPicker.vue")['default']
export const UCommandPalette: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']
export const UContainer: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']
export const UContextMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']
export const UContextMenuContent: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']
export const UDrawer: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']
export const UDropdownMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']
export const UDropdownMenuContent: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']
export const UForm: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']
export const UFormField: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']
export const UIcon: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']
export const UInput: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']
export const UInputMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']
export const UInputNumber: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']
export const UKbd: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']
export const ULink: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']
export const ULinkBase: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']
export const UModal: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']
export const UNavigationMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']
export const UOverlayProvider: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue")['default']
export const UPagination: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']
export const UPinInput: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']
export const UPopover: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']
export const UProgress: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']
export const URadioGroup: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']
export const USelect: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']
export const USelectMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']
export const USeparator: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']
export const USkeleton: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']
export const USlideover: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']
export const USlider: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']
export const UStepper: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue")['default']
export const USwitch: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']
export const UTable: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']
export const UTabs: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']
export const UTextarea: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']
export const UToast: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']
export const UToaster: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']
export const UTooltip: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']
export const UTree: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tree.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const VitePwaManifest: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
export const NuxtPwaManifest: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
export const NuxtPwaAssets: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']
export const PwaAppleImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']
export const PwaAppleSplashScreenImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']
export const PwaFaviconImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']
export const PwaMaskableImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']
export const PwaTransparentImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAbout: LazyComponent<typeof import("../components/About.vue")['default']>
export const LazyAnnouncementForm: LazyComponent<typeof import("../components/AnnouncementForm.vue")['default']>
export const LazyAnnouncements: LazyComponent<typeof import("../components/Announcements.vue")['default']>
export const LazyCalendar: LazyComponent<typeof import("../components/Calendar.vue")['default']>
export const LazyContactBar: LazyComponent<typeof import("../components/ContactBar.vue")['default']>
export const LazyDashboardHeader: LazyComponent<typeof import("../components/DashboardHeader.vue")['default']>
export const LazyDonations: LazyComponent<typeof import("../components/Donations.vue")['default']>
export const LazyEventModal: LazyComponent<typeof import("../components/EventModal.vue")['default']>
export const LazyFAB: LazyComponent<typeof import("../components/FAB.vue")['default']>
export const LazyFloatingButton: LazyComponent<typeof import("../components/FloatingButton.vue")['default']>
export const LazyGlobalRightPanel: LazyComponent<typeof import("../components/GlobalRightPanel.vue")['default']>
export const LazyHero: LazyComponent<typeof import("../components/Hero.vue")['default']>
export const LazyHistory: LazyComponent<typeof import("../components/History.vue")['default']>
export const LazyLogin: LazyComponent<typeof import("../components/Login.vue")['default']>
export const LazyLogo: LazyComponent<typeof import("../components/Logo.vue")['default']>
export const LazyMessageSender: LazyComponent<typeof import("../components/MessageSender.vue")['default']>
export const LazyNavBar: LazyComponent<typeof import("../components/NavBar.vue")['default']>
export const LazyNavDropDown: LazyComponent<typeof import("../components/NavDropDown.vue")['default']>
export const LazyNavItem: LazyComponent<typeof import("../components/NavItem.vue")['default']>
export const LazyNewsLetter: LazyComponent<typeof import("../components/NewsLetter.vue")['default']>
export const LazyNewsLetters: LazyComponent<typeof import("../components/NewsLetters.vue")['default']>
export const LazyNotificationHeader: LazyComponent<typeof import("../components/NotificationHeader.vue")['default']>
export const LazyNotificationSetup: LazyComponent<typeof import("../components/NotificationSetup.vue")['default']>
export const LazyOTPManager: LazyComponent<typeof import("../components/OTPManager.vue")['default']>
export const LazyRegistration: LazyComponent<typeof import("../components/Registration.vue")['default']>
export const LazyStaffCard: LazyComponent<typeof import("../components/StaffCard.vue")['default']>
export const LazyStaffTabs: LazyComponent<typeof import("../components/StaffTabs.vue")['default']>
export const LazyStakeholderPrompt: LazyComponent<typeof import("../components/StakeholderPrompt.vue")['default']>
export const LazyStakeholderTable: LazyComponent<typeof import("../components/StakeholderTable.vue")['default']>
export const LazyUniform: LazyComponent<typeof import("../components/Uniform.vue")['default']>
export const LazyValues: LazyComponent<typeof import("../components/Values.vue")['default']>
export const LazyVision: LazyComponent<typeof import("../components/Vision.vue")['default']>
export const LazyUAccordion: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']>
export const LazyUAlert: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']>
export const LazyUApp: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']>
export const LazyUAvatar: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']>
export const LazyUAvatarGroup: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']>
export const LazyUBadge: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']>
export const LazyUBreadcrumb: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']>
export const LazyUButton: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']>
export const LazyUButtonGroup: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue")['default']>
export const LazyUCalendar: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue")['default']>
export const LazyUCard: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']>
export const LazyUCarousel: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']>
export const LazyUCheckbox: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']>
export const LazyUCheckboxGroup: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CheckboxGroup.vue")['default']>
export const LazyUChip: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']>
export const LazyUCollapsible: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']>
export const LazyUColorPicker: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ColorPicker.vue")['default']>
export const LazyUCommandPalette: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']>
export const LazyUContainer: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']>
export const LazyUContextMenu: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']>
export const LazyUContextMenuContent: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']>
export const LazyUDrawer: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']>
export const LazyUDropdownMenu: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']>
export const LazyUDropdownMenuContent: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']>
export const LazyUForm: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']>
export const LazyUFormField: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']>
export const LazyUIcon: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']>
export const LazyUInput: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']>
export const LazyUInputMenu: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']>
export const LazyUInputNumber: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']>
export const LazyUKbd: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']>
export const LazyULink: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']>
export const LazyULinkBase: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']>
export const LazyUModal: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']>
export const LazyUNavigationMenu: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']>
export const LazyUOverlayProvider: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue")['default']>
export const LazyUPagination: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']>
export const LazyUPinInput: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']>
export const LazyUPopover: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']>
export const LazyUProgress: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']>
export const LazyURadioGroup: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']>
export const LazyUSelect: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']>
export const LazyUSelectMenu: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']>
export const LazyUSeparator: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']>
export const LazyUSkeleton: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']>
export const LazyUSlideover: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']>
export const LazyUSlider: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']>
export const LazyUStepper: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue")['default']>
export const LazyUSwitch: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']>
export const LazyUTable: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']>
export const LazyUTabs: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']>
export const LazyUTextarea: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']>
export const LazyUToast: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']>
export const LazyUToaster: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']>
export const LazyUTooltip: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']>
export const LazyUTree: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tree.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyVitePwaManifest: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
export const LazyNuxtPwaManifest: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
export const LazyNuxtPwaAssets: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']>
export const LazyPwaAppleImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']>
export const LazyPwaAppleSplashScreenImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']>
export const LazyPwaFaviconImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']>
export const LazyPwaMaskableImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']>
export const LazyPwaTransparentImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
