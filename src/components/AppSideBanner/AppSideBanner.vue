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
.AppSideBanner {
  @apply h-screen bg-contain relative;
  background-image: url("@/assets/banner.webp");

  &__overlay {
    @apply h-screen absolute w-full bg-gradient-to-t opacity-60;
    @apply from-yellow-500 via-purple-900 to-transparent;
  }
}
</style>
