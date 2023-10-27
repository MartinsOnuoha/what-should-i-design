<script setup lang="ts">
import AppSidePanel from '@/components/AppSideBanner/AppSideBanner.vue'
import AppStatementCard from "@/components/AppStatementCard/AppStatementCard.vue";
import AppFilter from '@/components/AppFilter/AppFilter.vue'
import { useDBStore } from "@/stores/db";
import HeaderActions from "@/components/AppHeader/HeaderActions.vue";

const { statements } = useDBStore()
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
        <AppStatementCard v-for="(statement, index) in statements" :key="index" :statement="statement" />
      </section>
    </main>
  </section>
</template>

<style lang="scss">
.HomeView {
  @apply flex h-screen;
  background-color: var(--color-ghostwhite);

  main {
    @apply w-2/4 p-5 max-h-screen overflow-y-scroll;
  }

  &__header {
    @apply pt-4 pb-4 flex items-center justify-between;
  }

  &__content {
    @apply grid grid-cols-2 gap-4;
  }

}

@media (prefers-color-scheme: dark) {
  @import "HomeView.dark";
}
</style>
