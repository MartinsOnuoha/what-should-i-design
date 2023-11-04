<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import MdiDribbble from '@/components/Icons/MdiDribbble.vue'
import MdiBehance from '@/components/Icons/MdiBehance.vue'
import DeviconFigma from '@/components/Icons/DeviconFigma.vue'
import MdiLinkVariant from '@/components/Icons/MdiLinkVariant.vue'

const props = defineProps({
  link: { type: Object as PropType<{ url: string }>, required: true }
})

const formattedLink = computed(() => props.link.url.toLowerCase().replace('https://', ''))

const icon = computed(() => {
  switch (true) {
    case formattedLink.value.includes('dribble'):
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
  <a :href="link.url" target="_blank" :title="link.url" class="AppLink">
    <component class="AppLink__icon" :is="icon" />
    <div class="AppLink__url">
      {{ formattedLink }}
    </div>
  </a>
</template>

<style lang="scss">
@import 'AppLink';
</style>
