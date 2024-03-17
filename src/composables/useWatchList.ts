import { watchEffect, onMounted, computed } from "vue";
import { getShowDetails } from "../ClientDomain/tvShowServices";
import {
  watchListEffect,
  watchListIds,
  watchListShows,
} from "../persiStance/watchListState";

watchEffect(watchListEffect);

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

  onMounted(fetchWatchListDetails);

  const watchListDetails = computed(() => Array.from(watchListShows.values()));

  return {
    watchListDetails,
    isInWatchList,
    toggleWatchList,
  };
}
