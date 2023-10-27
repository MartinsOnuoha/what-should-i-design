<script setup lang="ts">
import AppSidePanel from '@/components/AppSideBanner/AppSideBanner.vue'
import AppStatementCard from '@/components/AppStatementCard/AppStatementCard.vue'
import AppFilter from '@/components/AppFilter/AppFilter.vue'
import { useDBStore } from '@/stores/db'
import HeaderActions from '@/components/AppHeader/HeaderActions.vue'
import { ref } from 'vue'

const { statements } = useDBStore()
const statementsList = ref(statements)
</script>

<template>
  <section class="HomeView">
    <AppSidePanel class="w-2/4" />
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
        />
      </section>
    </main>
  </section>
</template>

<style lang="scss">
@import 'HomeView';
@media (prefers-color-scheme: dark) {
  @import 'HomeView.dark';
}
</style>
