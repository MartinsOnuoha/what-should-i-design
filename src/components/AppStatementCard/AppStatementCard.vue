<script setup lang="ts">
import type { PropType } from 'vue'
import AppCategory from '@/components/AppCategory/AppCategory.vue'
import { truncate } from '@/utils/util'
import type { Statement } from '@/entities/Statement'
import UilCommentShare from '@/components/Icons/UilCommentShare.vue'

defineProps({
  statement: { type: Object as PropType<Statement>, required: false }
})
</script>

<template>
  <div class="AppStatementCardContainer" tabindex="0">
    <div class="AppStatementCard">
      <div class="AppStatementCard__content">
        <span v-if="statement?.description">{{ truncate(statement?.description) }}</span>
        <div class="AppStatementCard__skeleton AppStatementCard__skeleton--bg" v-else></div>
      </div>
      <div class="AppStatementCard__categories">
        <AppCategory v-if="statement?.category" :category="statement.category" />
        <div v-else class="AppStatementCard__skeleton AppStatementCard__skeleton--sm"></div>

        <div class="flex text-gray-500 font--fira">
          <span class="text-xs mr-1">{{ statement?.samples?.length }}</span>
          <UilCommentShare />
        </div>
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
