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
.AppLink {
  font-family: 'Fira Mono', serif;
  @apply pl-3 pr-3 rounded-lg flex items-center;
  background: linear-gradient(
    89.84deg,
    rgba(230, 36, 174, 0.15) 0.34%,
    rgba(94, 58, 255, 0.15) 16.96%,
    rgba(10, 136, 255, 0.15) 34.66%,
    rgba(75, 191, 80, 0.15) 50.12%,
    rgba(137, 206, 0, 0.15) 66.22%,
    rgba(239, 183, 0, 0.15) 82%,
    rgba(246, 73, 0, 0.15) 99.9%
  );
  border: 1px solid #d9e1ec;
  &__url {
    @apply text-xs truncate text-ellipsis ml-2;
  }
}
</style>
