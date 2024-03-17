import { ref, watchEffect } from "vue";

function getInitialWatchList() {
  const savedList = localStorage.getItem("watchList");
  return savedList !== null ? JSON.parse(savedList) : [];
}

const watchList = ref(new Set(getInitialWatchList()));

// Persist the watch list to localStorage whenever it changes
watchEffect(() => {
  localStorage.setItem("watchList", JSON.stringify([...watchList.value]));
});

export function useWatchList() {
  function addToWatchList(showId: number) {
    watchList.value.add(showId);
  }

  function removeFromWatchList(showId: number) {
    watchList.value.delete(showId);
  }

  function isInWatchList(showId: number) {
    return watchList.value.has(showId);
  }
  function toggleWatchList(showId: number) {
    if (isInWatchList(showId)) {
      removeFromWatchList(showId);
    } else {
      addToWatchList(showId);
    }
  }

  return {
    watchList: [...watchList.value],
    addToWatchList,
    removeFromWatchList,
    isInWatchList,
    toggleWatchList,
  };
}
