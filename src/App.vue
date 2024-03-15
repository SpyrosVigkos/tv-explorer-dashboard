<script setup lang="ts">
import ListShows from "./components/ListShows.vue";
import { useTvShows } from "./composables/useAllTvShows";

const { shows, loading, error } = useTvShows();
</script>

<template>
  <div>
    <h1 class="text-black underline">Tv Dashboard Coming soon</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <ListShows :shows="shows" />
    </div>
  </div>
</template>
