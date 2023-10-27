<script setup lang="ts">
import type { PropType } from 'vue'
import type { Statement } from '@/stores/db'
import { useDBStore } from '@/stores/db'
import AppCategory from '@/components/AppCategory/AppCategory.vue'

const props = defineProps({
  statement: { type: Object as PropType<Statement>, required: true }
})

const getCategories = useDBStore().categories.filter(
  (category) => props.statement?.categories.includes(category.id)
)
</script>

<template>
  <div class="AppStatementCardContainer" tabindex="0">
    <div class="AppStatementCard">
      <div class="AppStatementCard__content">
        {{ statement.description }}
      </div>
      <div class="AppStatementCard__categories">
        <AppCategory v-for="(category, index) in getCategories" :key="index" :category="category" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'AppStatementCard';
@media (prefers-color-scheme: dark) {
  @import 'AppStatementCard.dark';
}
</style>
