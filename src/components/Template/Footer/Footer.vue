<script setup lang="ts">
function currentYear() {
  return new Date().getFullYear();
}
</script>

<template>
  <footer class="flex justify-between items-center p-4 bg-blue-700 text-white">
    <div>
      &copy; {{ currentYear }} TV Explorer Dashboard. All rights reserved.
    </div>
  </footer>
</template>
