<script setup lang="ts">
import SearchComponent from "../components/SearchComponent.vue";
import ErrorDialog from "../components/ErrorDialog.vue";
import { useErrorHandling } from "../composables/useErrorHandling";
import IntroSection from "../components/Template/IntroSection.vue";

const { errorMessage, showErrorDialog, clearError } = useErrorHandling();
</script>

<template>
  <IntroSection>
    <ErrorDialog
      v-if="showErrorDialog"
      :message="errorMessage"
      @close="clearError"
    />
    <div v-else>
      <SearchComponent />
    </div>
  </IntroSection>
</template>
