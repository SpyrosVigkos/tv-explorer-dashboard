<script setup lang="ts">
import { TvShow } from "../../ClientDomain/interfaces";
import ShowCard from "../Cards/ShowCard.vue";

defineProps<{
  shows: Array<TvShow>;
}>();
</script>

<template>
  <div class="flex flex-wrap -mx-2">
    <div
      v-for="show in shows"
      :key="show.id"
      class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4"
    >
      <ShowCard :show="show" />
    </div>
  </div>
</template>
