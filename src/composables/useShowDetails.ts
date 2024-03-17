import { ref, onMounted } from "vue";

import { getShowDetails } from "../ClientDomain/tvShowServices";
import { TvShow } from "../ClientDomain/interfaces";
import { useErrorHandling } from "./useErrorHandling";

// The composable function to fetch show details by ID
export function useShowDetails(id: number) {
  const show = ref<TvShow | null>(null);
  const isLoading = ref(true);

  const { setError } = useErrorHandling();

  const fetchShowDetails = async () => {
    isLoading.value = true;
    try {
      show.value = await getShowDetails(id);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      isLoading.value = false;
    }
  };

  // Fetch the show details when the composable is used
  onMounted(fetchShowDetails);

  return {
    show,
    isLoading,
    fetchShowDetails,
  };
}
