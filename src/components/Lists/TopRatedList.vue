<script setup lang="ts">
import { useSortedShowsByRating } from "../../composables/useSortedShowsByRating";
import ShowsExplorerContainer from "../Containers/ShowsExplorerContainer.vue";
import LoadingSpinner from "../LoadingSpinner.vue";
import HorizontalShowList from "./HorizontalShowList.vue";

const { displayedShows, numberOfTopShows, loading } = useSortedShowsByRating();
</script>

<template>
  <ShowsExplorerContainer>
    <LoadingSpinner v-if="loading" />
    <div v-else>
      <div class="mb-4">
        <!-- Top rated shows list -->
        <h2 class="text-xl md:text-4xl font-semibold mb-4 text-white">
          Top Rated Shows
        </h2>
        <input
          type="number"
          id="top-shows-input"
          min="1"
          class="max-w-24 p-2 border rounded"
          v-model.number="numberOfTopShows"
        />
        <label
          for="top-shows-input"
          class="block mb-2 text-sm font-medium text-white"
          >Set The Number of Top Shows</label
        >
      </div>
      <HorizontalShowList :shows="displayedShows" />
    </div>
  </ShowsExplorerContainer>
</template>
