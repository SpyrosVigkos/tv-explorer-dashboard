<script setup lang="ts">
import HorizontalShowList from "./HorizontalShowList.vue";
import { GenreTvShowList } from "../../ClientDomain/interfaces";

defineProps<{
  genreTvShowLists: Array<GenreTvShowList>;
}>();
</script>

<template>
  <div
    v-for="genreShowList in genreTvShowLists"
    :key="genreShowList.genre"
    class="mb-8"
  >
    <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4">
      {{ genreShowList.genre }}
    </h2>
    <HorizontalShowList :shows="genreShowList.tvShows" />
  </div>
</template>
