<script lang="ts" setup>
import { type Category, useDBStore} from "@/stores/db";
import { ref } from "vue";

const { categories } = useDBStore()

const dropdown = ref(false);
const toggleDropdown = () => {
  dropdown.value = !dropdown.value;
}
const closeDropdown = () => dropdown.value = false

const selectCategory = (category: Category) => {
  console.log(category)
}
</script>

<template>
  <div @click="toggleDropdown" @blur="closeDropdown" class="AppFilter" tabindex="0">
    <label for="filter-dropdown"> Filter by Categories</label>
    <ul v-show="dropdown" class="AppFilter__dropdown" name="filter-dropdown" role="listbox" :aria-expanded="dropdown">
      <li v-for="(category, index) in categories" :key="index" @click="selectCategory(category)" role="option" tabindex="0">
        <span>{{ category.emoji }}</span>
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.AppFilter {
  font-family: "Fira Mono", sans-serif;
  @apply rounded-lg p-3 w-2/5 bg-white cursor-pointer relative border text-sm;

  &:focus {
    @apply outline-amber-500;
  }

  &__dropdown {
    @apply absolute top-10 z-10 bg-white border p-3 left-0 max-h-80 shadow-2xl rounded-b-lg overflow-y-scroll;
    @apply text-gray-600;
    li {
      @apply p-2 transition-all;
      &:hover {
        @apply bg-amber-100 rounded-lg;
      }
    }
  }
}
</style>
