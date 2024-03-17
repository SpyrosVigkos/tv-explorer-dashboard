import { onMounted, ref } from "vue";
import { TvShow } from "../ClientDomain/interfaces";
import { getWatchList, saveWatchList } from "../persiStance/localStorageUtils";

export function useWatchList() {
  const watchList = ref<TvShow[]>([]);

  function addToWatchList(shows: TvShow[]) {
    saveWatchList(shows);
    watchList.value = shows;
  }

  function isInWatchList(show: TvShow) {
    return watchList.value.some(({ id }) => show.id === id);
  }

  function toggleWatchList(show: TvShow) {
    if (isInWatchList(show)) {
      // Remove the show from the watch list
      watchList.value = watchList.value.filter(({ id }) => id !== show.id);
    } else {
      const previous = getWatchList();
      addToWatchList([...previous, show]);
    }
    saveWatchList(watchList.value); // Save the updated watch list
  }

  onMounted(() => {
    watchList.value = getWatchList();
  });

  return {
    watchList,
    isInWatchList,
    toggleWatchList,
  };
}
