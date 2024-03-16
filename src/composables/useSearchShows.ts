import { ref } from "vue";
import { getSearchResults } from "../ClientDomain/tvShowServices";
import { TvShow } from "../ClientDomain/interfaces";
import { useErrorHandling } from "./useErrorHandling";

export function useSearchShows() {
  const searchTerm = ref("");
  const searchResults = ref<Array<TvShow>>([]);
  const isLoading = ref(false);

  const { setError } = useErrorHandling();

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
      setError((e as Error).message);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    searchTerm,
    searchResults,
    isLoading,
    performSearch,
  };
}
