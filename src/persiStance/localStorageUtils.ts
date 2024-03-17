import { TvShow } from "../ClientDomain/interfaces";

export function getWatchList(): Array<TvShow> {
  const savedList = localStorage.getItem("watchList");
  return savedList ? JSON.parse(savedList) : [];
}

export function saveWatchList(watchList: Array<TvShow>): void {
  window.localStorage.setItem("watchList", JSON.stringify(watchList));
}
