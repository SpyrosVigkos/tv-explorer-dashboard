<script setup lang="ts">
import ShowsExplorerContainer from "./components/Containers/ShowsExplorerContainer.vue";
import Header from "./components/Template/Header/Header.vue";
import Footer from "./components/Template/Footer/Footer.vue";
import SearchComponent from "./components/SearchComponent.vue";
import GenreTvShowList from "./components/Lists/GenreTvShowList.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import ErrorDialog from "./components/ErrorDialog.vue";
import { useErrorHandling } from "./composables/useErrorHandling";
import { useOrganizedShowsByGenre } from "./composables/useOrganizedShowsByGenre";
import HighLightContainer from "./components/Containers/HighLightContainer.vue";
import TopRatedList from "./components/Lists/TopRatedList.vue";
import IntroSection from "./components/Template/IntroSection.vue";

const { organizedShowsByGenre, loading } = useOrganizedShowsByGenre();
const { errorMessage, showErrorDialog, clearError } = useErrorHandling();
</script>

<template>
  <div>
    <Header />
    <IntroSection>
      <SearchComponent />
    </IntroSection>
    <LoadingSpinner v-if="loading" />
    <ErrorDialog
      v-if="showErrorDialog"
      :message="errorMessage"
      @close="clearError"
    />
    <div v-else>
      <HighLightContainer>
        <TopRatedList />
      </HighLightContainer>
      <ShowsExplorerContainer>
        <GenreTvShowList :genreTvShowLists="organizedShowsByGenre" />
      </ShowsExplorerContainer>
    </div>
    <Footer />
  </div>
</template>
