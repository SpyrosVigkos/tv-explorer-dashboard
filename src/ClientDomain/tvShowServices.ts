import cilentTvMazeApi from "../apiClient/cilentTvMazeApi";

export const getAllShows = async () => {
  const { data: shows } = await cilentTvMazeApi.get(`/shows`);
  return shows;
};

export const getSearchResults = async (input: string) => {
  const { data: searchResults } = await cilentTvMazeApi.get(
    `/search/shows?q=${input}`,
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
