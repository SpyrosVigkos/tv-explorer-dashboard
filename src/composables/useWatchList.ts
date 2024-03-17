import { ref, watchEffect, onMounted, reactive, toRefs, computed } from "vue";
import { getShowDetails } from "../ClientDomain/tvShowServices"; // Adjust the import path as needed

function getInitialWatchList() {
  const savedList = localStorage.getItem("watchList");
  return savedList !== null ? JSON.parse(savedList) : ([] as Array<number>);
}

const watchListIds = ref(new Set(getInitialWatchList()));
const watchListShows = reactive(new Map());

watchEffect(() => {
  localStorage.setItem("watchList", JSON.stringify([...watchListIds.value]));
});

// Fetch and update show details for all shows in the watchlist
async function fetchWatchListDetails() {
  for (let id of watchListIds.value) {
    if (!watchListShows.has(id)) {
      const showDetails = await getShowDetails(id);
      watchListShows.set(id, showDetails);
    }
  }
}

export function useWatchList() {
  function addToWatchList(showId: number) {
    watchListIds.value.add(showId);
    getShowDetails(showId).then((showDetails) => {
      watchListShows.set(showId, showDetails);
    });
  }

  function removeFromWatchList(showId: number) {
    watchListIds.value.delete(showId);
    watchListShows.delete(showId);
  }

  function isInWatchList(showId: number) {
    return watchListIds.value.has(showId);
  }

  function toggleWatchList(showId: number) {
    if (isInWatchList(showId)) {
      removeFromWatchList(showId);
    } else {
      addToWatchList(showId);
    }
  }

  // Use onMounted to fetch details when the component using this composable mounts
  onMounted(fetchWatchListDetails);

  // A computed property to return the shows' details as an array
  const watchListDetails = computed(() => Array.from(watchListShows.values()));

  return {
    ...toRefs(watchListIds), // Convert reactive refs for use in the template
    watchListDetails,
    addToWatchList,
    removeFromWatchList,
    isInWatchList,
    toggleWatchList,
  };
}
