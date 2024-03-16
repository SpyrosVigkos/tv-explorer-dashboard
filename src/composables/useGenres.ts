import { ref, onMounted } from "vue";
import { getAllShows } from "../ClientDomain/tvShowServices";
import { useErrorHandling } from "./useErrorHandling";
import { TvShow } from "../ClientDomain/interfaces";

export function useGenres() {
  const genres = ref<string[]>([]);
  const loading = ref(true);
  const { setError } = useErrorHandling();

  const fetchGenres = async () => {
    try {
      loading.value = true;
      const shows: TvShow[] = await getAllShows();
      const allGenres = shows.flatMap((show: any) => show.genres);
      genres.value = Array.from(new Set(allGenres));
    } catch (e) {
      setError((e as Error).message);
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchGenres);

  return { genres, loading };
}

export default useGenres;
