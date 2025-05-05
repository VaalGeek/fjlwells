import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "dashboard" | "default" | "notifications" | "verification"
declare module 'nuxt/app' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}