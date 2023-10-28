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
@import 'AppSideBanner';

@media (prefers-color-scheme: dark) {
  @import 'AppSideBanner.dark';
}
</style>
