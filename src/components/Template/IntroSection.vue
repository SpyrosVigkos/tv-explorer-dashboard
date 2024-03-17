<template>
  <div
    class="search-banner flex align-middle min-h-[60vh] bg-white py-10 px-6 md:px-12"
  >
    <div class="m-auto text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">
        Tv Explorer | Discover Your Next Favorite Show
      </h1>
      <p class="text-lg text-gray-600 mb-6">
        Find shows to watch based on genres, ratings, and more.
      </p>
      <div class="flex justify-center">
        <div class="relative w-full">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
