<script lang="ts" setup>
import { type PropType, computed } from 'vue'
import MdiClose from '@/components/Icons/MdiClose.vue'
import AppCategory from '@/components/AppCategory/AppCategory.vue'
import type { Statement } from '@/entities/Statement'
import UilCommentShare from '@/components/Icons/UilCommentShare.vue'
import AppAddUrl from '@/components/AppAddUrl/AppAddUrl.vue'
import AppSidePanelSamples from '@/components/AppSidePanel/AppSidePanelSamples.vue'

const emit = defineEmits(['panel:close'])

const props = defineProps({
  open: { type: Boolean, default: false },
  statement: { type: Object as PropType<Statement | null> }
})

const samples = computed(() => props.statement?.samples || [])
const closePanel = () => {
  emit('panel:close')
}
</script>

<template>
  <div :class="['AppSidePanel', open ? 'visible opacity-100' : 'invisible opacity-0']">
    <div class="AppSidePanel__overlay" @click="closePanel"></div>
    <div class="AppSidePanel__content">
      <div class="AppSidePanel__header">
        <button @click="closePanel"><MdiClose /></button>
      </div>
      <h2 class="AppSidePanel__title">{{ statement?.title }}</h2>
      <div class="AppSidePanel__description">
        {{ statement?.description }}
        <div v-if="statement?.category" class="mt-5">
          <AppCategory :category="statement?.category" />
        </div>
      </div>

      <h3 class="text-xl mt-16 mb-3 flex items-center">
        <UilCommentShare class="mr-1" />
        Community Inspirations
      </h3>
      <AppAddUrl />
      <div class="AppSidePanel__links">
        <AppSidePanelSamples :samples="samples" />
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
