<script setup lang="ts">
import type { PropType } from "vue";
import type { Statement } from "@/stores/db";
import { useDBStore } from "@/stores/db";
import AppCategory from "@/components/AppCategory/AppCategory.vue";

const props = defineProps({
  statement: { type: Object as PropType<Statement>, required: true },
});

const getCategories = useDBStore().categories.filter(category => props.statement?.categories.includes(category.id))
</script>

<template>
<div class="AppStatementCard">
  <div class="AppStatementCard__content">
    {{ statement.description }}
  </div>
  <div class="AppStatementCard__categories">
    <AppCategory v-for="(category, index) in getCategories" :key="index" :category="category" />
  </div>
</div>
</template>

<style lang="scss">
.AppStatementCard {
  @apply bg-white h-52 w-full cursor-pointer p-5 rounded-lg border relative;

  &__content {
    @apply text-lg;
  }

  &__categories {
    @apply absolute bottom-2 left-0 w-full p-5;
  }
}
</style>
