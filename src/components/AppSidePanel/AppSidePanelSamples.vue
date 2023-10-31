<script setup lang="ts">
import AppLink from '@/components/AppCommunity/AppLink.vue'
import type { PropType } from 'vue'
import type { Sample } from '@/entities/Sample'

defineProps({
  samples: { type: Array as PropType<Sample[]>, default: () => [] }
})
</script>

<template>
  <div class="AppSidePanelSamples__links">
    <AppLink v-for="(link, index) in samples" :key="index" :link="link" />
  </div>
  <div class="AppSidePanelSamples__nolinks font--fira" v-if="!samples.length">
    <img width="80" class="grayscale" src="@/assets/logo.png" alt="no samples yet" />
    <div class="mt-3">Be the first to Inspire ✨.</div>
  </div>
</template>

<style lang="scss">
.AppSidePanelSamples {
  &__links {
    @apply grid grid-cols-2 gap-4;
  }
  &__nolinks {
    @apply flex flex-col items-center p-5 w-full;
  }
}
</style>
