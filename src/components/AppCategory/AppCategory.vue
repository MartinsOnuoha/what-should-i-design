<script lang="ts" setup>
import type { PropType } from "vue";
import type { Category } from "@/stores/db";

defineProps({
  category: { type: Object as PropType<Category> }
})

const categoryColorGroups = [
  ['bg-amber-50', 'text-amber-500', 'border-amber-500']
]
</script>

<template>
  <span :class="[
    'AppCategory',
    ...categoryColorGroups[0]
  ]">
    <span class="mr-1">{{ category.emoji }}</span>
    {{ category.name }}
  </span>
</template>


<style lang="scss">
.AppCategory {
  @apply text-center font-semibold rounded-full border font-sans;
  padding: 0.34rem 0.7rem;
  font-size: 0.75rem;
}
</style>
