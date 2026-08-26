<script setup lang="ts">
import { useSearchShows } from "../composables/useSearchShows";
import LoadingSpinner from "./LoadingSpinner.vue";
import SearchVerticalList from "./Lists/SearchVerticalList.vue";

const { searchTerm, performSearch, searchResults, isLoading } =
  useSearchShows();
</script>

<template>
  <div class="flex items-center max-w-md mx-auto mt-10">
    <input
      v-model="searchTerm"
      type="text"
      class="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
      placeholder="Search TV shows..."
      @input="performSearch"
    />
    <button
      class="p-2 bg-blue-500 text-white rounded-r-lg"
      @click="performSearch"
    >
      Search
    </button>
  </div>
  <LoadingSpinner v-if="isLoading" />
  <div v-else class="mx-auto max-w-md">
    <SearchVerticalList :shows="searchResults" />
  </div>
</template>
