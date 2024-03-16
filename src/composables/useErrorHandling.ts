import { ref } from "vue";

export function useErrorHandling() {
  const errorMessage = ref("");
  const showErrorDialog = ref(false);

  const setError = (message: string) => {
    errorMessage.value = message;
    showErrorDialog.value = true;
  };

  const clearError = () => {
    errorMessage.value = "";
    showErrorDialog.value = false;
  };

  return {
    errorMessage,
    showErrorDialog,
    setError,
    clearError,
  };
}
