import { ref, computed, watch, onMounted } from "vue";
import { organizeShowsByGenre } from "../functions/organizeShowsByGenre";
import { useTvAllShows } from "./useAllTvShows";
import useGenres from "./useGenres";
import { GenreTvShowList } from "../ClientDomain/interfaces";

export function useOrganizedShowsByGenre() {
  const { genres, loading: loadingGenres } = useGenres();
  const { shows, loading: loadingShows, fetchShows } = useTvAllShows();

  const loading = computed(() => loadingGenres.value || loadingShows.value);
  const organizedShowsByGenre = ref<GenreTvShowList[]>([]);

  const updateOrganizedShows = () => {
    if (genres.value.length > 0 && shows.value.length > 0) {
      organizedShowsByGenre.value = organizeShowsByGenre(
        shows.value,
        genres.value,
      );
    }
  };

  // Watch for changes in genres and shows to recompute organized shows
  watch([genres, shows], updateOrganizedShows, { immediate: true });

  onMounted(async () => {
    await fetchShows();
  });

  return {
    organizedShowsByGenre,
    loading,
  };
}
