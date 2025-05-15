<template>
  <transition name="fade">
    <div v-if="visible" class="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md text-sm text-gray-700 space-y-4">
        <h2 class="text-lg font-semibold text-gray-800 text-center">Device Setup Instructions</h2>
        
        <div class="text-center text-gray-600 text-sm mb-2">
          <p><strong>Detected Device:</strong> {{ deviceInfo.os }}</p>
          <p><strong>Browser:</strong> {{ deviceInfo.browser }}</p>
        </div>

        <ul class="list-disc space-y-2 pl-5">
          <li v-for="(line, i) in instructions" :key="i" v-html="line" />
        </ul>

        <button
          @click="$emit('dismiss')"
          class="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Continue to Verification
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const emit = defineEmits(['dismiss'])

const visible = ref(true)
const instructions = ref<string[]>([])

const deviceInfo = ref({
  os: 'Unknown',
  browser: 'Unknown',
  isPushSupported: false,
  isIphone13: false,
  isOppo: false
})

function detectDevice(): typeof deviceInfo.value {
  const ua = navigator.userAgent.toLowerCase()

  const isIOS = /iphone|ipad|ipod/.test(ua)
  const isIphone13 = ua.includes('iphone') && window.screen.height === 844 && window.screen.width === 390
  const isAndroid = ua.includes('android')
  const isOppo = ua.includes('oppo')
  const isChrome = ua.includes('chrome') && !ua.includes('edg')
  const isSafari = ua.includes('safari') && !ua.includes('chrome')
  const pushSupported = 'Notification' in window && 'serviceWorker' in navigator

  return {
    os: isIOS ? 'iOS' : isAndroid ? 'Android' : 'Other',
    browser: isChrome ? 'Chrome' : isSafari ? 'Safari' : 'Other',
    isPushSupported: pushSupported,
    isIphone13,
    isOppo
  }
}

onMounted(() => {
  deviceInfo.value = detectDevice()
  const { os, browser, isPushSupported, isIphone13, isOppo } = deviceInfo.value

  if (!isPushSupported) {
    instructions.value.push(
      '<strong>Notifications are not supported</strong> on this browser or device.',
      'Please try using a modern browser like <strong>Chrome</strong> or <strong>Safari</strong> instead.'
    )
    return
  }

  if (os === 'iOS') {
    instructions.value.push(
      '1. Tap the <strong>Share icon (📤)</strong> at the bottom.',
      '2. Select <strong>"Add to Home Screen"</strong>.'
    )

    if (isIphone13) {
      instructions.value.push(
        '<strong>Note:</strong> iPhone 13 may not show the "Add to Home Screen" option immediately.',
        'Please make sure you are using Safari browser and have no screen zoom or content blockers enabled.'
      )
    }
  }

  if (os === 'Android') {
    if (isOppo) {
      instructions.value.push(
        '<strong>Oppo devices</strong> may block notifications by default.',
        '1. Go to <strong>Settings > App Management > Chrome > Notifications</strong> and enable them.',
        '2. Also open <strong>Chrome > Settings > Site Settings > Notifications</strong> and allow notification requests.'
      )
    } else if (browser === 'Chrome') {
      instructions.value.push(
        '1. Go to your <strong>Phone Settings > Notifications > Chrome</strong> and ensure <strong>Allow Notifications</strong> is ON.',
        '2. Open <strong>Chrome</strong>, tap the 3-dot menu (⋮), then go to <strong>Settings > Site Settings > Notifications</strong>.',
        '3. Make sure <strong>"Sites can ask to send notifications"</strong> is enabled.'
      )
    }
  }

  if (instructions.value.length === 0) {
    instructions.value.push(
      'We could not detect your device. Please ensure notifications are enabled for your browser in device settings.'
    )
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
