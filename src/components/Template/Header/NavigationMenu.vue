<script lang="ts">
export default {
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

<template>
  <nav>
    <button class="md:hidden text-2xl" @click="toggleMenu">☰</button>
    <ul :class="{ hidden: !menuActive }" class="md:flex md:space-x-4">
      <li>
        <router-link to="/" class="hover:text-gray-300">Home</router-link>
      </li>
      <li>
        <router-link to="/about" class="hover:text-gray-300">About</router-link>
      </li>
      <li>
        <router-link to="/contact" class="hover:text-gray-300"
          >Contact</router-link
        >
      </li>
    </ul>
  </nav>
</template>
