<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getAllShows } from "./ClientDomain/tvShowServices";
import ListShows from "./components/ListShows.vue";
const shows = ref([]);
onMounted(async () => {
  shows.value = await getAllShows();
});
</script>

<template>
  <div>
    <h1 class="text-black underline">Tv Dashboard Coming soon</h1>
    <ListShows :shows="shows" />
  </div>
</template>
