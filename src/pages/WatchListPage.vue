<script setup lang="ts">
import ErrorDialog from "../components/ErrorDialog.vue";
import { useErrorHandling } from "../composables/useErrorHandling";
import Watchlist from "../components/Watchlist.vue";
import ShowsExplorerContainer from "../components/Containers/ShowsExplorerContainer.vue";

const { errorMessage, showErrorDialog, clearError } = useErrorHandling();
</script>

<template>
  <ErrorDialog
    v-if="showErrorDialog"
    :message="errorMessage"
    @close="clearError"
  />
  <ShowsExplorerContainer v-else>
    <Watchlist />
  </ShowsExplorerContainer>
</template>
