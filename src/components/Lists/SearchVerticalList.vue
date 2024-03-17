<script setup lang="ts">
import { TvShow } from "../../ClientDomain/interfaces";
import ResultShowCard from "../Cards/ResultShowCard.vue";

defineProps<{
  shows: Array<TvShow>;
}>();
</script>

<template>
  <div
    class="rounded-lg bg-white max-h-48 scrollbar flex-col overflow-y-auto overflow-auto"
  >
    <ResultShowCard v-for="show in shows" :key="show.id" :show="show" />
  </div>
</template>
