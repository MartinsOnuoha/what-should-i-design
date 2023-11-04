<script lang="ts" setup>
import MdiDribbble from '@/components/Icons/MdiDribbble.vue'
import { computed, type PropType } from 'vue'

const props = defineProps({
  link: { type: Object as PropType<{ url: string }>, required: true }
})
const formattedLink = computed(() => props.link.url.replace('https://', ''))
</script>

<template>
  <a :href="link.url" target="_blank" :title="link.url" class="AppLink">
    <component class="AppLink__icon" :is="MdiDribbble" />
    <div class="AppLink__url">
      {{ formattedLink }}
    </div>
  </a>
</template>

<style lang="scss">
@import 'AppLink';
</style>
