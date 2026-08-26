<script setup lang="ts">
import { useNavigationLinks } from "../../../composables/useNavigationLinks";

const { navigate } = useNavigationLinks();
function goHome() {
  navigate("/");
}
</script>

<template>
  <div class="h-8 cursor-pointer flex items-center" @click="goHome">
    <img
      src="/src/assets/img/TvExplorerLogoIcon.svg"
      alt="logo"
      class="h-8 w-8 mr-2"
    />
    <span class="text-lg font-bold">Explorer</span>
  </div>
</template>
