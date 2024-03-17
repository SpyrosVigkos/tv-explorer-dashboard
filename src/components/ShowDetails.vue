<script setup lang="ts">
import { TvShow } from "../ClientDomain/interfaces";
import { useWatchList } from "../composables/useWatchList";

defineProps<{
  show: TvShow;
}>();
const { toggleWatchList, isInWatchList } = useWatchList();
</script>

<template>
  <div class="container m-auto p-4">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="md:flex">
        <img
          :src="show.image?.original"
          class="w-full md:w-1/2 lg:w-1/3 object-cover max-h-64 sm:max-h-96 md:max-h-full"
          :alt="show.name"
        />
        <div class="p-6 flex flex-col justify-between">
          <div>
            <h1 class="text-3xl font-bold mb-2">{{ show.name }}</h1>
            <button
              @click="toggleWatchList(show)"
              class="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors"
            >
              {{
                isInWatchList(show)
                  ? "Remove from Watch List"
                  : "Add to Watch List"
              }}
            </button>
            <p class="text-xl text-gray-600">
              Rating: {{ show.rating.average || "N/A" }}
            </p>
            <div class="my-4">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                v-for="genre in show.genres"
                :key="genre"
              >
                {{ genre }}
              </span>
            </div>
            <div class="my-4">
              <div class="prose mb-4" v-html="show.summary"></div>
              <a
                :href="show.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          <div>
            <h2 class="text-2xl font-bold my-2">Details</h2>
            <p v-if="show.network">
              <strong>Network:</strong> {{ show.network.name }}
            </p>
            <p v-if="show.schedule">
              <strong>Schedule:</strong> {{ show.schedule.days.join(", ") }} at
              {{ show.schedule.time }}
            </p>
            <p v-if="show.status"><strong>Status:</strong> {{ show.status }}</p>
            <p v-if="show.premiered">
              <strong>Premiered:</strong> {{ show.premiered }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
