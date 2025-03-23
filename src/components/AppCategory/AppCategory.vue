<script lang="ts" setup>
import type { PropType } from 'vue'
import { randomChoice, truncate } from '@/utils/util'
import type { Category } from '@/entities/Category'

defineProps({
  category: { type: Object as PropType<Category>, required: true }
})

const categoryColorGroups = [
  ['bg-amber-50', 'text-amber-500', 'border-amber-500'],
  ['bg-purple-50', 'text-purple-500', 'border-purple-500'],
  ['bg-green-50', 'text-green-500', 'border-green-500'],
  ['bg-red-50', 'text-red-500', 'border-red-500'],
  ['bg-blue-50', 'text-blue-500', 'border-blue-500']
]
const selectedGroup: Array<string> = randomChoice(categoryColorGroups)
</script>

<template>
  <span
    :class="['AppCategory', ...selectedGroup]"
    :title="category.name"
    :aria-label="category.name"
  >
    <span class="mr-1">{{ category.emoji }}</span>
    {{ truncate(category.name, 20) }}
  </span>
</template>

<style lang="scss">
@use 'AppCategory.scss' as *;
</style>
