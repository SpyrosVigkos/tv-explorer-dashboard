<script setup lang="ts">
import HorizontalShowList from "./components/Lists/HorizontalShowList.vue";
import TvExplorerContainer from "./components/Containers/TvExplorerContainer.vue";
import Header from "./components/Template/Header/Header.vue";
import Footer from "./components/Template/Footer/Footer.vue";
import { useTvAllShows } from "./composables/useAllTvShows";
import SearchComponent from "./components/SearchComponent.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import ErrorDialog from "./components/ErrorDialog.vue";
import { useErrorHandling } from "./composables/useErrorHandling";

const { shows, loading } = useTvAllShows();
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
      <HorizontalShowList :shows="shows" />
    </TvExplorerContainer>
    <Footer />
  </div>
</template>
