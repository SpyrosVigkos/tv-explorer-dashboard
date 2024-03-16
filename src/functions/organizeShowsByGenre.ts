import { TvShow, GenreTvShowList } from "../ClientDomain/interfaces";

export function organizeShowsByGenre(
  tvShows: Array<TvShow>,
  allGenres: Array<string>,
): Array<GenreTvShowList> {
  // Explicitly define the type for the accumulator
  const initialAccumulator: Record<string, Array<TvShow>> = {};

  // Initialize the accumulator with all genres and empty arrays for the shows.
  allGenres.forEach((genre) => {
    initialAccumulator[genre] = [];
  });

  // Use reduce to populate the accumulator with TV shows mapped by genre.
  const genreShowMap = tvShows.reduce<Record<string, Array<TvShow>>>(
    (acc, show) => {
      show.genres.forEach((genre) => {
        if (!acc[genre]) {
          acc[genre] = []; // Initialize a new genre category if it wasn't in the predefined list
        }
        acc[genre].push(show);
      });
      return acc;
    },
    initialAccumulator,
  );

  // Convert the map into an array of GenreTvShowList
  const genreTvShowLists: Array<GenreTvShowList> = Object.keys(
    genreShowMap,
  ).map((genre) => ({
    genre: genre,
    tvShows: genreShowMap[genre],
  }));

  return genreTvShowLists;
}
