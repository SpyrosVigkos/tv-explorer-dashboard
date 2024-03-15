import cilentTvMazeApi from "../apiClient/cilentTvMazeApi";

export const getSearchReuslts = async (genre: string) => {
  const { data: searchResults } = await cilentTvMazeApi.get(
    `/search/shows?q=${genre}`,
  );
  return searchResults;
};

export const getShowDetails = async (id: number) => {
  const { data: showDetails } = await cilentTvMazeApi.get(`/shows/${id}`);
  return showDetails;
};

export default async function getShowEpisodes(showId: number) {
  const { data: showEpisodes } = await cilentTvMazeApi.get(
    `/shows/${showId}/episodes`,
  );
  return showEpisodes;
}
