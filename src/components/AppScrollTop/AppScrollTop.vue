<script setup lang="ts">
import MdiArrowUpThin from '@/components/Icons/MdiChevronUp.vue'

const scrollToTop = () => {
  document.getElementById('AppFilter')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <button @click="scrollToTop" class="AppScrollTop">
    <MdiArrowUpThin />
  </button>
</template>

<style lang="scss">
.AppScrollTop {
  @apply p-2 rounded-full shadow-lg text-3xl absolute bottom-5 right-5 bg-amber-100 transition-all;
}
</style>
