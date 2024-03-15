import { ref, onMounted } from "vue";
import { TvShow } from "../ClientDomain/interfaces";
import { getAllShows } from "../ClientDomain/tvShowServices";

export function useTvShows() {
  const shows = ref<Array<TvShow>>([]);
  const loading = ref(true);
  const error = ref<Error | null>(null);

  const fetchShows = async () => {
    try {
      loading.value = true;
      shows.value = await getAllShows();
    } catch (e) {
      error.value = e as Error;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchShows);

  return {
    shows,
    loading,
    error,
    fetchShows,
  };
}
