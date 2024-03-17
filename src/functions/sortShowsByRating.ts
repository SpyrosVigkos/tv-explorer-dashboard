import { TvShow } from "../ClientDomain/interfaces";

// Function to sort shows by rating
const sortShowsByRating = (showsToSort: TvShow[]): TvShow[] => {
  return showsToSort.sort((a, b) => {
    const ratingA = a.rating?.average || 0;
    const ratingB = b.rating?.average || 0;
    return ratingB - ratingA;
  });
};
export default sortShowsByRating;
