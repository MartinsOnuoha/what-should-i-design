<script lang="ts" setup>
import { computed, type Ref, ref, watch } from 'vue'
import MdiFilterMenu from '@/components/Icons/MdiFilterMenu.vue'
import MdiFilterRemoveOutline from '@/components/Icons/MdiFilterRemoveOutline.vue'
import type { Category } from '@/entities/Category'
import { useQuery } from '@vue/apollo-composable'
import { GET_CATEGORIES } from '@/graphql/queries/categories'

const { result, loading } = useQuery(GET_CATEGORIES)
const categories = computed(() => result?.value?.categories)
let categoriesList: Category[] = []
const dropdown = ref(false)
const categorySearch = ref(null)
const filterValue = ref('')

watch(result, (newResult) => {
  if (newResult?.categories) {
    categoriesList = [{ id: 0, name: 'All' }, ...newResult.categories]
  }
})
const emits = defineEmits(['category:selected'])
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
  filterValue.value = category.name
  closeDropdown()

  emits('category:selected', selectedValue.value)
}
const filterCategories = () => {
  categoriesList = categories.value

  if (filterValue.value) {
    categoriesList = categoriesList.filter((category) =>
      category.name.toLowerCase().includes(filterValue.value.toLowerCase())
    )
    return
  }
}
</script>

<template>
  <div v-click-outside="closeDropdown" class="AppFilter font--fira" id="AppFilter">
    <label for="category-dropdown">
      <input
        ref="categorySearch"
        tabindex="0"
        :disabled="loading"
        data-toggle="dropdown"
        type="search"
        name="category-dropdown"
        :placeholder="selectedValue?.name || 'Filter by Categories'"
        aria-haspopup="true"
        autocomplete="off"
        @input="filterCategories"
        @focusin="openDropdown"
        v-model="filterValue"
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
        v-for="(category, index) in categoriesList"
        :key="index"
        @click="selectCategory(category)"
        role="option"
        tabindex="0"
        :class="[selectedValue?.id === category.id ? 'selected' : false]"
      >
        <span class="mr-2">{{ category.emoji }}</span>
        <div>{{ category.name }}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import 'AppFilter';

@media (prefers-color-scheme: dark) {
  @import 'AppFilter.dark';
}
</style>
