<script setup lang="ts">
import { useRoute } from "vue-router";
import { useShowDetails } from "../composables/useShowDetails";
import { useErrorHandling } from "../composables/useErrorHandling";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import ErrorDialog from "../components/ErrorDialog.vue";
import ShowDetails from "../components/ShowDetails.vue";
import ShowsExplorerContainer from "../components/Containers/ShowsExplorerContainer.vue";

const route = useRoute();
const showId = parseInt(route.params.id as string);
const { show, isLoading } = useShowDetails(showId);
const { errorMessage, showErrorDialog, clearError } = useErrorHandling();
</script>
<template>
  <ShowsExplorerContainer>
    <LoadingSpinner v-if="isLoading" />
    <ErrorDialog
      v-if="showErrorDialog"
      :message="errorMessage"
      @close="clearError"
    />
    <div v-else-if="show">
      <ShowDetails :show="show" />
    </div>
  </ShowsExplorerContainer>
</template>
