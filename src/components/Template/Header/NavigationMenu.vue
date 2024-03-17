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
      :class="
        menuActive ? 'fixed inset-0 bg-gray-600 bg-opacity-75 z-20' : 'hidden'
      "
      @click="closeMenu"
    ></div>
    <div
      :class="
        menuActive
          ? 'fixed z-30 top-0 left-0 w-5/6 max-w-sm bg-blue-600 h-full shadow-md transition-transform duration-300 ease-in-out transform translate-x-0'
          : 'fixed z-30 top-0 left-0 w-5/6 max-w-sm bg-blue-600 h-full shadow-md transition-transform duration-300 ease-in-out transform -translate-x-full'
      "
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
