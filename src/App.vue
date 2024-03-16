<script setup lang="ts">
import TvExplorerContainer from "./components/Containers/TvExplorerContainer.vue";
import Header from "./components/Template/Header/Header.vue";
import Footer from "./components/Template/Footer/Footer.vue";
import SearchComponent from "./components/SearchComponent.vue";
import GenreTvShowList from "./components/Lists/GenreTvShowList.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import ErrorDialog from "./components/ErrorDialog.vue";
import { useErrorHandling } from "./composables/useErrorHandling";
import { useOrganizedShowsByGenre } from "./composables/useOrganizedShowsByGenre";

const { organizedShowsByGenre, loading } = useOrganizedShowsByGenre();
const { errorMessage, showErrorDialog, clearError } = useErrorHandling();
</script>

<template>
  <div>
    <Header />
    <SearchComponent />
    <LoadingSpinner v-if="loading" />
    <ErrorDialog
      v-if="showErrorDialog"
      :message="errorMessage"
      @close="clearError"
    />
    <TvExplorerContainer v-else>
      <GenreTvShowList :genreTvShowLists="organizedShowsByGenre" />
    </TvExplorerContainer>
    <Footer />
  </div>
</template>
