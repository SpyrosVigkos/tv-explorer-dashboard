import { ref, onMounted, computed, watch } from "vue";
import { TvShow } from "../ClientDomain/interfaces";
import { getAllShows } from "../ClientDomain/tvShowServices";
import sortShowsByRating from "../functions/sortShowsByRating";

export function useSortedShowsByRating() {
  const allShows = ref<TvShow[]>([]);
  const topRatedShows = ref<TvShow[]>([]);
  const loading = ref(true);
  const numberOfTopShows = ref(10);

  // Function to set top rated shows based on numberOfTopShows
  const setTopRatedShows = () => {
    topRatedShows.value = allShows.value.slice(0, numberOfTopShows.value);
  };

  // Fetch and process the TV shows when the component is mounted
  onMounted(async () => {
    loading.value = true;
    try {
      const response = await getAllShows();
      allShows.value = sortShowsByRating(response);
      setTopRatedShows();
    } catch (error) {
      console.error("Failed to fetch shows:", error);
    } finally {
      loading.value = false;
    }
  });

  // Watcher to update the top rated shows when numberOfTopShows changes
  watch(numberOfTopShows, setTopRatedShows);

  // Computed property to reactively provide the top rated shows
  const displayedShows = computed(() => topRatedShows.value);

  return {
    displayedShows,
    numberOfTopShows,
    setNumberOfTopShows: (number: number) => {
      numberOfTopShows.value = number;
      setTopRatedShows(); // Update the top rated shows when the number changes
    },
    loading,
  };
}
