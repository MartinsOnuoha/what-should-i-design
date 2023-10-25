<template>
  <aside class="bg-green-200">
    <img width="200" src="@/assets/banner.png" :alt="alt">
  </aside>
</template>

<script setup lang="ts">
 defineProps({
  alt: {
    type: String,
    default: 'Banner image'
  }
 })
</script>
