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

const { result, loading } = useQuery(GET_STATEMENTS)
const statements = computed(() => shuffle(result?.value.statements))

const selectedStatement: Ref<Statement | null> = ref(null)

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
        <AppFilter />
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
        <AppStatementCard v-for="x in 10" :key="x" :statement="{ title: '', description: '' }" />
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
