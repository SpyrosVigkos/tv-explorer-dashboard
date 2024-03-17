<script setup lang="ts">
import { useWatchList } from "../composables/useWatchList";
import ShowCard from "./Cards/ShowCard.vue";

const { watchListDetails } = useWatchList();
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">My Watchlist</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div v-for="show in watchListDetails" :key="show.id">
        <ShowCard :show="show" />
      </div>
    </div>
  </div>
</template>
