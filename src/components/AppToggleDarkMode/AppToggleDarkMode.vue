<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import MdiWhiteBalanceSunny from '@/components/Icons/MdiWhiteBalanceSunny.vue'
import MdiMoonWaningCrescent from '@/components/Icons/MdiMoonWaningCrescent.vue'

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light'
})

const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    @click="toggleDark()"
    aria-label="toggle dark-mode"
    title="toggle dark-mode"
    class="ToggleDarkMode"
  >
    <MdiWhiteBalanceSunny v-show="isDark" />
    <MdiMoonWaningCrescent v-show="!isDark" />
  </button>
</template>

<style scoped lang="scss">
@use 'AppToggleDarkMode' as *;
@use 'AppToggleDarkMode.dark' as AppToggleDarkMode;

@media (prefers-color-scheme: dark) {
  @include AppToggleDarkMode.darkTheme;
}
</style>
