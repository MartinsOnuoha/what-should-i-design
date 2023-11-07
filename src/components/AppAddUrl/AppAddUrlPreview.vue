<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed, defineAsyncComponent } from 'vue'
import { truncate } from '@/utils/util'
import type { OgItem } from '@/composables/useValidateOgUrl'

const MdiCheckCircleOutline = defineAsyncComponent(
  () => import('@/components/Icons/MdiCheckCircleOutline.vue')
)

const ogImage = computed(() => (props.ogItem?.ogImage?.length ? props.ogItem.ogImage[0].url : ''))
const ogTitle = computed(() => props.ogItem?.ogTitle ?? '')
const ogDescription = computed(() => props.ogItem?.ogDescription ?? props.ogItem?.requestUrl)
const ogUrl = computed(() => props.ogItem?.ogUrl ?? '')

const props = defineProps({
  ogItem: {
    type: Object as PropType<OgItem>
  },
  loading: Boolean,
  hasError: Boolean
})
</script>

<template>
  <a
    :href="ogUrl"
    target="_blank"
    :title="ogTitle"
    :aria-description="ogDescription"
    class="AppAddUrlPreview font--fira"
  >
    <div class="AppAddUrlPreview__overlay">
      {{ !loading && !hasError ? 'New Link Added 🎉' : 'Adding URL...' }}
    </div>
    <MdiCheckCircleOutline class="absolute right-1 top-1 text-green-400 text-xl" />
    <div
      class="AppAddUrlPreview__img"
      v-if="ogImage"
      :style="{ backgroundImage: `url(${ogImage})` }"
    />
    <div class="AppAddUrlPreview__content">
      <div class="AppAddUrlPreview__content--title" v-if="ogTitle">{{ truncate(ogTitle, 30) }}</div>
      <div class="AppAddUrlPreview__content--desc" v-if="ogDescription">
        {{ truncate(ogDescription, 100) }}
      </div>
    </div>
  </a>
</template>

<style lang="scss">
@import 'AppAddUrlPreview';
@media (prefers-color-scheme: dark) {
  @import 'AppAddUrlPreview.dark';
}
</style>
