export function getInitialWatchList(): Array<number> {
  const savedList = localStorage.getItem("watchList");
  return savedList !== null ? JSON.parse(savedList) : [];
}

export function saveWatchList(watchList: Iterable<number>): void {
  localStorage.setItem("watchList", JSON.stringify([...watchList]));
}
