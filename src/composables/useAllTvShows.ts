import { ref, onMounted } from "vue";
import { TvShow } from "../ClientDomain/interfaces";
import { getAllShows } from "../ClientDomain/tvShowServices";
import { useErrorHandling } from "./useErrorHandling";

export function useTvAllShows() {
  const shows = ref<Array<TvShow>>([]);
  const loading = ref(true);
  const { setError } = useErrorHandling();

  const fetchShows = async () => {
    try {
      loading.value = true;
      shows.value = await getAllShows();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchShows);

  return {
    shows,
    loading,
    fetchShows,
  };
}
