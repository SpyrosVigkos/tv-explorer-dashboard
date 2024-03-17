<script setup lang="ts">
import { useSearchShows } from "../composables/useSearchShows";
import ShowList from "./Lists/ShowList.vue";
import TvExplorerContainer from "./Containers/TvExplorerContainer.vue";

const { searchTerm, performSearch, searchResults } = useSearchShows();
</script>

<template>
  <div class="flex items-center max-w-md mx-auto mt-10">
    <input
      type="text"
      class="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
      placeholder="Search TV shows..."
      v-model="searchTerm"
      @input="performSearch"
    />
    <button
      class="p-2 bg-blue-500 text-white rounded-r-lg"
      @click="performSearch"
    >
      Search
    </button>
  </div>
  <TvExplorerContainer>
    <ShowList :shows="searchResults" />
  </TvExplorerContainer>
</template>
./Lists/ShowList.vue
