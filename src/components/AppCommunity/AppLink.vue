<script lang="ts" setup>
import { computed, defineAsyncComponent, type PropType } from 'vue'

const MdiDribbble = defineAsyncComponent(() => import('@/components/Icons/MdiDribbble.vue'))
const MdiBehance = defineAsyncComponent(() => import('@/components/Icons/MdiBehance.vue'))
const DeviconFigma = defineAsyncComponent(() => import('@/components/Icons/DeviconFigma.vue'))
const MdiLinkVariant = defineAsyncComponent(() => import('@/components/Icons/MdiLinkVariant.vue'))

const props = defineProps({
  link: { type: Object as PropType<{ url: string }>, required: true }
})

const formattedLink = computed(() => props.link.url.toLowerCase().replace(/^https?:\/\//i, ''))

const icon = computed(() => {
  switch (true) {
    case formattedLink.value.includes('dribbble'):
      return MdiDribbble
    case formattedLink.value.includes('behance'):
      return MdiBehance
    case formattedLink.value.includes('figma'):
      return DeviconFigma
    default:
      return MdiLinkVariant
  }
})
</script>

<template>
  <a :href="link.url" target="_blank" :title="link.url" class="AppLink font--fira">
    <component class="AppLink__icon" :is="icon" />
    <div class="AppLink__url">
      {{ formattedLink }}
    </div>
  </a>
</template>

<style lang="scss">
@use 'AppLink' as *;
</style>
