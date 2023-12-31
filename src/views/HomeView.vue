<script setup lang="ts">
import { computed, defineAsyncComponent, type Ref, ref, watch } from 'vue'
import shuffle from 'lodash.shuffle'
import AppStatementCard from '@/components/AppStatementCard/AppStatementCard.vue'
import AppSideBanner from '@/components/AppSideBanner/AppSideBanner.vue'
import AppFilter from '@/components/AppFilter/AppFilter.vue'
import HeaderActions from '@/components/AppHeader/HeaderActions.vue'
import type { Statement } from '@/entities/Statement'
import { GET_STATEMENTS } from '@/graphql/queries/statements'
import { useQuery } from '@vue/apollo-composable'
import type { Category } from '@/entities/Category'

import { useScroll, watchThrottled } from '@vueuse/core'
import AppScrollTop from '@/components/AppScrollTop/AppScrollTop.vue'

const el = ref<HTMLElement | null>(null)
const { y } = useScroll(el, { behavior: () => 'smooth' })
const showScrollToTop = ref(false)

const AppSidePanel = defineAsyncComponent(
  () => import('@/components/AppSidePanel/AppSidePanel.vue')
)

watchThrottled(
  y,
  (n) => {
    showScrollToTop.value = n > 800
  },
  { throttle: 1000 }
)

const selectedStatement: Ref<Statement | null> = ref(null)
const filter = ref({})

const { result, loading } = useQuery(GET_STATEMENTS, filter)
const statements = computed(() => shuffle(result?.value?.statements || []))

watch(statements, (statementsNewValue: Statement[]) => {
  if (selectedStatement.value) {
    selectedStatement.value = statementsNewValue.find(
      (statement) => statement.id === selectedStatement.value?.id
    ) as Statement | null
  }
})
const setSelectedCategory = (category: Category) => {
  if (!category.id) {
    filter.value = {}
    return
  }
  filter.value = {
    where: { category_id: { _eq: category.id } }
  }
}
const selectStatement = (statement: Statement) => {
  selectedStatement.value = statement
}
const deselectStatement = () => {
  selectedStatement.value = null
}
</script>

<template>
  <section class="HomeView" id="HomeView">
    <AppSideBanner class="w-2/4" />
    <main ref="el">
      <header class="HomeView__header">
        <AppFilter @category:selected="setSelectedCategory" />
        <HeaderActions />
      </header>
      <section v-if="!loading && statements.length" class="HomeView__content">
        <AppStatementCard
          v-for="(statement, index) in statements"
          :key="index"
          :id="index"
          :statement="statement"
          @click="selectStatement(statement)"
        />
      </section>
      <section v-else class="HomeView__content">
        <AppStatementCard v-for="x in 10" :key="x" />
      </section>
    </main>
    <AppScrollTop :class="showScrollToTop ? 'opacity-100' : 'opacity-0'" />
    <AppSidePanel
      :open="!!selectedStatement"
      @panel:close="deselectStatement"
      :statement="selectedStatement"
    >
      {{ selectedStatement }}
    </AppSidePanel>
  </section>
</template>

<style lang="scss">
@import 'HomeView';
@media (prefers-color-scheme: dark) {
  @import 'HomeView.dark';
}
</style>
