<script lang="ts" setup>
import MdiGithub from "@/components/Icons/MdiGithub.vue";
import ToggleDarkMode from "@/components/AppHeader/ToggleDarkMode.vue";

const GITHUB_URL = 'https://github.com/MartinsOnuoha/what-should-i-design'
</script>

<template>
  <div class="HeaderActions">
    <ToggleDarkMode />
    <a :href="GITHUB_URL" target="_blank" aria-label="github" title="Contribute on Github" class="HeaderActions__github">
      <MdiGithub />
    </a>
  </div>
</template>

<style lang="scss">
.HeaderActions {
  @apply flex text-2xl text-gray-600;

  &__github {
    @apply ml-3 border-l-gray-300 border-l pl-3;
  }
}
</style>
