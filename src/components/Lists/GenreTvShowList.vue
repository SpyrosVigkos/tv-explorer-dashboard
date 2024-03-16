<script lang="ts">
import { defineComponent, PropType } from "vue";
import HorizontalShowList from "./HorizontalShowList.vue";
import { GenreTvShowList } from "../../ClientDomain/interfaces";

export default defineComponent({
  name: "GenreTvShowListDisplay",
  components: {
    HorizontalShowList,
  },
  props: {
    genreTvShowLists: {
      type: Array as PropType<Array<GenreTvShowList>>,
      required: true,
    },
  },
});
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
