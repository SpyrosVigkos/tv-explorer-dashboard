<script setup lang="ts">
import ListShows from "./components/ListShows.vue";
import { useTvAllShows } from "./composables/useAllTvShows";
import SearchComponent from "./components/SearchComponent.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";

const { shows, loading, error } = useTvAllShows();
</script>

<template>
  <div>
    <h1 class="text-black underline">Tv Dashboard Coming soon</h1>

    <SearchComponent />
    <div v-if="loading"><LoadingSpinner /></div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <ListShows :shows="shows" />
    </div>
  </div>
</template>
