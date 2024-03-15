export function getTvMazeAPIUrl(): string {
  const tvMazeAPIUrl = import.meta.env.VITE_TV_MAZE_API_URL;

  if (!tvMazeAPIUrl) {
    throw new Error("VUE_TV_MAZE_API_URL environment variable is not defined.");
  }

  return tvMazeAPIUrl;
}
