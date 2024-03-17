<script setup lang="ts">
import { TvShow } from "../../ClientDomain/interfaces";
import ShowCard from "../Cards/ShowCard.vue";

defineProps<{
  shows: Array<TvShow>;
}>();
</script>

<template>
  <div class="scrollbar flex overflow-x-auto py-2 space-x-4 overflow-auto">
    <ShowCard v-for="show in shows" :key="show.id" :show="show" />
  </div>
</template>
