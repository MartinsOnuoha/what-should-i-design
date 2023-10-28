<script lang="ts" setup>
import MdiGithub from '@/components/Icons/MdiGithub.vue'
import AppToggleDarkMode from '@/components/AppToggleDarkMode/AppToggleDarkMode.vue'

const GITHUB_URL = 'https://github.com/MartinsOnuoha/what-should-i-design'
</script>

<template>
  <div class="HeaderActions">
    <AppToggleDarkMode />
    <a
      :href="GITHUB_URL"
      target="_blank"
      aria-label="github"
      title="Contribute on Github"
      class="HeaderActions__github"
    >
      <MdiGithub />
    </a>
  </div>
</template>

<style lang="scss">
@import 'HeaderActions';
@media (prefers-color-scheme: dark) {
  @import 'HeaderActions.dark';
}
</style>
