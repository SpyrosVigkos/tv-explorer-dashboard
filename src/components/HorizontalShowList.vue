<script lang="ts">
import { PropType, defineComponent } from "vue";
import ShowCard from "./Cards/ShowCard.vue";
import { TvShow } from "../ClientDomain/interfaces";

export default defineComponent({
  name: "HorizontalShowList",
  components: {
    ShowCard,
  },
  props: {
    shows: {
      type: Array as PropType<Array<TvShow>>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="scrollbar flex overflow-x-auto py-2 space-x-4 overflow-auto">
    <ShowCard v-for="show in shows" :key="show.id" :show="show" />
  </div>
</template>
