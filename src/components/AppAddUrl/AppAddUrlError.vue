<script setup lang="ts">
defineProps({
  msg: String
})
</script>

<template>
  <div class="AppAddUrlError font--fira" v-if="msg">
    {{ msg }}
  </div>
</template>

<style lang="scss">
.AppAddUrlError {
  @apply p-2 bg-red-500 text-sm rounded-sm;
}
</style>
