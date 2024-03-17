<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShowsExplorerContainer",
});
</script>

<template>
  <div class="main-container max-w-screen-xl mx-auto my-6 p-4 sm:p-6 lg:p-8">
    <slot></slot>
  </div>
</template>
