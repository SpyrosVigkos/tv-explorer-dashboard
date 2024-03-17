import { ref, reactive } from "vue";
import { getInitialWatchList, saveWatchList } from "./localStorageUtils";

export const watchListIds = ref(new Set(getInitialWatchList()));
export const watchListShows = reactive(new Map());

// Persist the watch list to localStorage whenever it changes
export function watchListEffect(): void {
  saveWatchList(watchListIds.value);
}
