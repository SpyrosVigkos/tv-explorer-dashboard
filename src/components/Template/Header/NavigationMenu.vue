<script setup lang="ts">
import { useMobileMenu } from "../../../composables/useMobileMenu";

const { menuActive, toggleMenu, closeMenu } = useMobileMenu();
</script>

<template>
  <nav class="flex items-center justify-between">
    <!-- Mobile menu button -->
    <button class="md:hidden text-2xl" @click="toggleMenu">☰</button>
    <!-- Mobile menu panel -->
    <div
      :class="menuActive ? 'menu-visible' : 'hidden'"
      @click="closeMenu"
    ></div>
    <div
      :class="menuActive ? 'menu-active' : 'menu-no-active'"
      class="md:hidden"
    >
      <ul class="space-y-6 p-6">
        <li>
          <router-link to="/" class="hover:text-gray-300" @click="closeMenu"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/search"
            class="hover:text-gray-300"
            @click="closeMenu"
            >Search</router-link
          >
        </li>
        <li>
          <router-link
            to="/watchlist"
            class="hover:text-gray-300"
            @click="closeMenu"
            >My Watchlist</router-link
          >
        </li>
      </ul>
    </div>
    <!-- Desktop menu -->
    <ul class="hidden md:flex space-x-4">
      <li>
        <router-link to="/" class="hover:text-gray-300">Home</router-link>
      </li>
      <li>
        <router-link to="/search" class="hover:text-gray-300"
          >Search</router-link
        >
      </li>
      <li>
        <router-link to="/watchlist" class="hover:text-gray-300"
          >My Watchlist</router-link
        >
      </li>
    </ul>
  </nav>
</template>
