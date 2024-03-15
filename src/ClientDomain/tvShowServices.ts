import cilentTvMazeApi from "../apiClient/cilentTvMazeApi";

export const getShowsByGenre = (genre: string) => {
  return cilentTvMazeApi.get(`/search/shows?q=${genre}`);
};

export const getShowDetails = async (id: number) => {
  const { data } = await cilentTvMazeApi.get(`/shows/${id}`);
  return data;
};

export default async function getShowEpisodes(showId: number) {
  const { data } = await cilentTvMazeApi.get(`/shows/${showId}/episodes`);
  return data;
}
