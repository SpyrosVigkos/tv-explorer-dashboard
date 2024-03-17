<script lang="ts">
import { defineComponent } from "vue";
import Logo from "./Logo.vue";
import NavigationMenu from "./NavigationMenu.vue";

export default defineComponent({
  name: "Header",
  components: {
    Logo,
    NavigationMenu,
  },
});
</script>

<template>
  <header class="flex justify-between items-center p-4 bg-blue-800 text-white">
    <Logo />
    <NavigationMenu />
  </header>
</template>
