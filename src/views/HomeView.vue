<script setup lang="ts">
import { computed, type Ref, ref } from 'vue'
import shuffle from 'lodash.shuffle'
import AppSideBanner from '@/components/AppSideBanner/AppSideBanner.vue'
import AppStatementCard from '@/components/AppStatementCard/AppStatementCard.vue'
import AppFilter from '@/components/AppFilter/AppFilter.vue'
import HeaderActions from '@/components/AppHeader/HeaderActions.vue'
import AppSidePanel from '@/components/AppSidePanel/AppSidePanel.vue'
import type { Statement } from '@/entities/Statement'
import { GET_STATEMENTS } from '@/graphql/queries/statements'
import { useQuery } from '@vue/apollo-composable'
import type { Category } from '@/entities/Category'

const selectedStatement: Ref<Statement | null> = ref(null)
const filter = ref({})

const { result, loading } = useQuery(GET_STATEMENTS, filter)
const statements = computed(() => shuffle(result?.value.statements))

const setSelectedCategory = (category: Category) => {
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
  <section class="HomeView">
    <AppSideBanner class="w-2/4" />
    <main>
      <header class="HomeView__header">
        <AppFilter @category:selected="setSelectedCategory" />
        <HeaderActions />
      </header>
      <section v-if="!loading && statements.length" class="HomeView__content">
        <AppStatementCard
          v-for="(statement, index) in statements"
          :key="index"
          :statement="statement"
          @click="selectStatement(statement)"
        />
      </section>
      <section v-else class="HomeView__content">
        <AppStatementCard v-for="x in 10" :key="x" />
      </section>
    </main>
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
