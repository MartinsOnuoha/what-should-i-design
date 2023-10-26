<script lang="ts" setup>
import { type Category, useDBStore } from "@/stores/db";
import { type Ref, ref} from "vue";

const { categories } = useDBStore()

const dropdown = ref(false);
const categorySearch = ref(null)
const selectedValue: Ref<Category|null> = ref(null);

const toggleDropdown = () => {
  dropdown.value = !dropdown.value;
  dropdown.value && categorySearch.value ? (categorySearch.value as HTMLInputElement).focus() : false;
}
const closeDropdown = () => dropdown.value = false

const selectCategory = (category: Category) => {
  selectedValue.value = category
  console.log(category)
}
</script>

<template>
  <div @click="toggleDropdown" v-click-outside="closeDropdown"  class="AppFilter" tabindex="0">
    <input
        ref="categorySearch"
       tabindex="0"
       data-toggle="dropdown"
       type="search"
       name="category-dropdown"
       placeholder="Filter by Categories..."
       aria-haspopup="true"
    />
    <ul v-show="dropdown" class="AppFilter__dropdown" role="listbox" :aria-expanded="dropdown" aria-labelledby="category-dropdown">
      <li v-for="(category, index) in categories" :key="index" @click="selectCategory(category)" role="option" tabindex="0">
        <span class="mr-2">{{ category.emoji }}</span>
        <div>{{ category.name }}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.AppFilter {
  font-family: "Fira Mono", sans-serif;
  @apply rounded-lg w-2/5 cursor-pointer relative bg-transparent border text-sm;

  input {
    @apply w-full h-full p-3 rounded-lg;
    &:focus {
      @apply outline-amber-500;
    }
  }
  &:focus {
    @apply outline-amber-500;
  }

  &__dropdown {
    @apply absolute top-10 z-10 bg-white border p-3 left-0 max-h-80 shadow-2xl rounded-lg overflow-y-scroll;
    @apply text-gray-600;
    li {
      @apply p-2 transition-all flex;
      &:hover {
        @apply bg-amber-100 rounded-lg;
      }
    }
  }
}
</style>
