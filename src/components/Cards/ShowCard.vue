<script setup lang="ts">
import { TvShow } from "../../ClientDomain/interfaces";
import { useNavigationLinks } from "../../composables/useNavigationLinks";
import { useWatchList } from "../../composables/useWatchList";

defineProps<{
  show: TvShow;
}>();

const { navigateToShowDetails } = useNavigationLinks();
const { isInWatchList, toggleWatchList } = useWatchList();
</script>

<template>
  <div
    class="bg-white shadow-lg rounded-lg min-w-max overflow-hidden cursor-pointer"
    @click="navigateToShowDetails(show.id)"
  >
    <img
      :src="show.image?.medium"
      class="w-full min-w-56 h-64 object-cover"
      :alt="show.name"
      loading="lazy"
    />
    <div class="p-4">
      <h3 class="text-lg font-bold">
        {{ show.name }}
        <button
          @click.stop="toggleWatchList(show)"
          class="text-xs text-white bg-green-500 hover:bg-green-700 p-1 rounded"
          :class="{ 'bg-red-500 hover:bg-red-700': isInWatchList(show) }"
          title="Toggle Watch List"
        >
          {{ isInWatchList(show) ? "−" : "+" }}
        </button>
      </h3>
      <p class="text-sm text-gray-600">{{ show.genres.join(", ") }}</p>
      <div class="flex justify-between items-center mt-4">
        <span class="text-sm">{{ show.rating.average || "N/A" }}</span>
        <a
          :href="show.url"
          class="text-blue-500 hover:underline text-sm"
          target="_blank"
          >More info</a
        >
      </div>
    </div>
  </div>
</template>
