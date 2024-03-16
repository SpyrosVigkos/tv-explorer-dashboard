import { ref } from "vue";
import { getSearchResults } from "../ClientDomain/tvShowServices";
import { TvShow } from "../ClientDomain/interfaces";

export function useSearchShows() {
  const searchTerm = ref("");
  const searchResults = ref<Array<TvShow>>([]);
  const isLoading = ref(false);
  const error = ref<Error | null>(null);

  const performSearch = async () => {
    if (!searchTerm.value) {
      searchResults.value = [];
      return;
    }

    isLoading.value = true;
    try {
      const results = await getSearchResults(searchTerm.value);
      if (Array.isArray(results)) {
        searchResults.value = results.map((result) => result.show);
      } else {
        searchResults.value = [];
      }
    } catch (e) {
      error.value = e as Error;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    searchTerm,
    searchResults,
    isLoading,
    error,
    performSearch,
  };
}
