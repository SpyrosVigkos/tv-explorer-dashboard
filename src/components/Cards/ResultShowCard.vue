<script setup lang="ts">
import { TvShow } from "../../ClientDomain/interfaces";
import { useNavigationLinks } from "../../composables/useNavigationLinks";

defineProps<{
  show: TvShow;
}>();

const { navigateToShowDetails } = useNavigationLinks();
</script>

<template>
  <div
    class="border flex items-center justify-between ml-0 rounded-lg overflow-hidden cursor-pointer"
    @click="navigateToShowDetails(show.id)"
  >
    <img
      :src="show.image?.original"
      class="w-20 h-20 object-cover"
      :alt="show.name"
    />
    <div class="p-4">
      <h3 class="text-lg font-bold">
        {{ show.name }}
      </h3>
      <p class="text-sm text-gray-600">{{ show.genres.join(", ") }}</p>
    </div>
    <div>
      <span class="text-sm">{{ show.rating.average || "N/A" }}</span>
    </div>
  </div>
</template>
