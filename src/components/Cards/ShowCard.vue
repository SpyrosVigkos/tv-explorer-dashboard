<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TvShow } from "../../ClientDomain/interfaces";

export default defineComponent({
  name: "ShowCard",
  props: {
    show: {
      type: Object as PropType<TvShow>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="bg-white shadow-lg rounded-lg min-w-max overflow-hidden">
    <img
      :src="show.image?.original"
      class="w-full h-64 object-cover"
      alt="Show Image"
    />
    <div class="p-4">
      <h3 class="text-lg font-bold">{{ show.name }}</h3>
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
