<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Statement } from '@/stores/db'
import MdiClose from '@/components/Icons/MdiClose.vue'
import AppCategory from '@/components/AppCategory/AppCategory.vue'
import { useDBStore } from '@/stores/db'

const emit = defineEmits(['panel:close'])

const props = defineProps({
  open: { type: Boolean, default: false },
  statement: { type: Object as PropType<Statement | null> }
})

const closePanel = () => {
  emit('panel:close')
}
const getCategories = useDBStore().categories.filter(
  (category) => props.statement?.categories.includes(category.id)
)
</script>

<template>
  <div v-if="statement" v-show="open" class="AppSidePanel">
    <div class="AppSidePanel__overlay" @click="closePanel"></div>
    <div class="AppSidePanel__content">
      <div class="AppSidePanel__header">
        <button @click="closePanel"><MdiClose /></button>
      </div>
      <h2 class="AppSidePanel__title">{{ statement.description }}</h2>
      <div class="mt-3 mb-3">
        <AppCategory v-for="(category, index) in getCategories" :key="index" :category="category" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'AppSidePanel';
@media (prefers-color-scheme: dark) {
  @import 'AppSidePanel.dark';
}
</style>
