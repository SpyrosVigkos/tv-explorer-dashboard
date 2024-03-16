<script lang="ts">
export default {
  methods: {
    goHome() {},
  },
};
</script>

<template>
  <div @click="goHome" class="h-8 cursor-pointer flex items-center">
    <img
      src="/src/assets/img/TvExplorerLogoIcon.svg"
      alt="logo"
      class="h-8 w-8 mr-2"
    />
    <span class="text-lg font-bold">Explorer</span>
  </div>
</template>
