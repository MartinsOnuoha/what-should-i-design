<script lang="ts" setup>
import type { PropType } from 'vue'
import MdiClose from '@/components/Icons/MdiClose.vue'
import AppCategory from '@/components/AppCategory/AppCategory.vue'
import type { Statement } from '@/entities/Statement'

const emit = defineEmits(['panel:close'])

defineProps({
  open: { type: Boolean, default: false },
  statement: { type: Object as PropType<Statement | null> }
})

const closePanel = () => {
  emit('panel:close')
}
</script>

<template>
  <div v-if="statement" v-show="open" class="AppSidePanel">
    <div class="AppSidePanel__overlay" @click="closePanel"></div>
    <div class="AppSidePanel__content">
      <div class="AppSidePanel__header">
        <button @click="closePanel"><MdiClose /></button>
      </div>
      <h2 class="AppSidePanel__title">{{ statement.description }}</h2>
      <div v-if="statement.category" class="mt-3 mb-3">
        <AppCategory :category="statement.category" />
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
