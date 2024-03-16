<script setup lang="ts">
import ListShows from "./components/ListShows.vue";
import { useTvAllShows } from "./composables/useAllTvShows";
import SearchComponent from "./components/SearchComponent.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import ErrorDialog from "./components/ErrorDialog.vue";
import { useErrorHandling } from "./composables/useErrorHandling";

const { shows, loading } = useTvAllShows();
const { errorMessage, showErrorDialog, clearError } = useErrorHandling();
</script>

<template>
  <div>
    <h1 class="text-black underline">Tv Dashboard Coming soon</h1>
    <SearchComponent />
    <LoadingSpinner v-if="loading" />
    <ErrorDialog
      v-if="showErrorDialog"
      :message="errorMessage"
      @close="clearError"
    />
    <ListShows v-else :shows="shows" />
  </div>
</template>
