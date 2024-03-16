<template>
  <div
    class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
  >
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <div class="p-6 text-center">
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Error
        </h3>
        <p class="mb-5">{{ message }}</p>
        <button
          type="button"
          @click="closeDialog"
          class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-4 py-2 text-center mr-2"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  message: String,
});

const emit = defineEmits(["close"]);

const closeDialog = () => {
  emit("close");
};
</script>
