<script setup lang="ts">
import { type Ref, ref } from 'vue'
import AppSideBanner from '@/components/AppSideBanner/AppSideBanner.vue'
import AppStatementCard from '@/components/AppStatementCard/AppStatementCard.vue'
import AppFilter from '@/components/AppFilter/AppFilter.vue'
import { type Statement, useDBStore } from '@/stores/db'
import HeaderActions from '@/components/AppHeader/HeaderActions.vue'
import AppSidePanel from '@/components/AppSidePanel/AppSidePanel.vue'

const { formattedStatements } = useDBStore()
const statementsList = ref(formattedStatements)
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
      <section class="HomeView__content">
        <AppStatementCard
          v-for="(statement, index) in statementsList"
          :key="index"
          :statement="statement"
          @click="selectStatement(statement)"
        />
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
