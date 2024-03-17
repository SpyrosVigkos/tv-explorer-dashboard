<script setup lang="ts">
import { useRoute } from "vue-router";
import { useShowDetails } from "../composables/useShowDetails";
import { useErrorHandling } from "../composables/useErrorHandling";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import ErrorDialog from "../components/ErrorDialog.vue";
import ShowCard from "../components/Cards/ShowCard.vue";

const route = useRoute();
const showId = parseInt(route.params.id as string);
const { show, isLoading } = useShowDetails(showId);
const { errorMessage, showErrorDialog, clearError } = useErrorHandling();
</script>
<template>
  <LoadingSpinner v-if="isLoading" />
  <ErrorDialog
    v-if="showErrorDialog"
    :message="errorMessage"
    @close="clearError"
  />
  <div v-else-if="show">
    <ShowCard :show="show" />
  </div>
</template>
