<script lang="ts" setup>
import { ref } from 'vue'

const showInput = ref(false)
const input = ref()
const toggleShowInput = () => {
  showInput.value = !showInput.value
  input.value.focus()
}
</script>
<template>
  <div class="AppAddUrl font--fira">
    <button @click="toggleShowInput">{{ showInput ? 'Cancel' : 'Add Inspiration ✨' }}</button>
    <input
      ref="input"
      :class="[showInput ? 'visible opacity-100' : 'invisible opacity-0']"
      placeholder="https://dribbble.com/shots..."
      type="text"
    />
  </div>
</template>

<style lang="scss">
.AppAddUrl {
  @apply flex mb-5 text-sm items-baseline;
  input {
    @apply ml-3 p-3 rounded-lg border transition-all;
    max-height: 43px;
  }
  button {
    @apply p-3 bg-black text-white mt-3 rounded-lg w-44;
  }
}
</style>
