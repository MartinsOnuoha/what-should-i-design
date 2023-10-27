<script lang="ts" setup>
import { type Category, useDBStore } from '@/stores/db'
import { type Ref, ref } from 'vue'
import MdiFilterMenu from '@/components/Icons/MdiFilterMenu.vue'
import MdiFilterRemoveOutline from '@/components/Icons/MdiFilterRemoveOutline.vue'

const { categories } = useDBStore()

const dropdown = ref(false)
const categorySearch = ref(null)
const selectedValue: Ref<Category | null> = ref(null)

const toggleDropdown = () => {
  dropdown.value = !dropdown.value

  dropdown.value && categorySearch.value
    ? (categorySearch.value as HTMLInputElement).focus()
    : false
}
const closeDropdown = () => (dropdown.value = false)
const openDropdown = () => (dropdown.value = true)
const selectCategory = (category: Category) => {
  selectedValue.value = category
  closeDropdown()
}
</script>

<template>
  <div v-click-outside="closeDropdown" class="AppFilter">
    <label for="category-dropdown">
      <input
        ref="categorySearch"
        tabindex="0"
        data-toggle="dropdown"
        type="search"
        name="category-dropdown"
        placeholder="Filter by Categories"
        aria-haspopup="true"
        @focusin="openDropdown"
      />
      <button
        @click="toggleDropdown"
        id="category-dropdown-btn"
        class="AppFilter__icon"
        :aria-expanded="dropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
      >
        <MdiFilterRemoveOutline title="close filter" aria-label="close filter" v-if="dropdown" />
        <MdiFilterMenu title="open filter" aria-label="open filter" v-else />
      </button>
    </label>
    <ul
      v-show="dropdown"
      class="AppFilter__dropdown"
      role="listbox"
      :aria-expanded="dropdown"
      aria-labelledby="category-dropdown-btn"
    >
      <li
        v-for="(category, index) in categories"
        :key="index"
        @click="selectCategory(category)"
        role="option"
        tabindex="0"
      >
        <span class="mr-2">{{ category.emoji }}</span>
        <div>{{ category.name }}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import 'AppFilter';
</style>
