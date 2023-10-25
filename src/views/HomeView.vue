<script setup lang="ts">
import AppSidePanel from '@/components/AppSideBanner/AppSideBanner.vue'
import AppStatementCard from "@/components/AppStatementCard/AppStatementCard.vue";
import { useDBStore } from "@/stores/db";

const { statements } = useDBStore()
</script>

<template>
  <section class="HomeView">
    <AppSidePanel class="w-2/4" />
    <main>
      <header class="HomeView__header">

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
  background-color: ghostwhite;
  main {
    @apply w-2/4 p-5 max-h-screen overflow-scroll;
  }
  &__content {
    @apply grid grid-cols-2 gap-4;
  }

}
</style>
