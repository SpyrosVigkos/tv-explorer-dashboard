<script setup lang="ts">
import Header from "./components/Template/Header/Header.vue";
import Footer from "./components/Template/Footer/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>
