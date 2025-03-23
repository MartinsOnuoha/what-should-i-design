<template>
  <aside class="AppSideBanner">
    <div class="AppSideBanner__overlay"></div>
  </aside>
</template>

<script setup lang="ts">
defineProps({
  alt: {
    type: String,
    default: 'Banner image'
  }
})
</script>

<style lang="scss" scoped>
@use 'AppSideBanner' as *;
@use 'AppSideBanner.dark' as AppSideBanner;

@media (prefers-color-scheme: dark) {
  @include AppSideBanner.darkTheme;
}
</style>
