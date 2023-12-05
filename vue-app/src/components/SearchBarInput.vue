<script setup lang="ts">
import { ref, defineEmits } from "vue";

const searchParam = ref<string>("");
const emit = defineEmits(["search"])
const search = (e: any, data: string) => {
  e.preventDefault()
  emit('search', data)
}

</script>
<template>
  <div class="flex my-2.5 items-center">
    <form class="relative w-max mx-auto">
      <div class="flex">
        <div class="relative w-full">
          <input
            type="search"
            class="block p-2.5 z-20 text-sm text-gray-900 bg-gray-50 rounded-3xl shadow focus:outline-none focus:flex-1 focus:pl-12 transition-all duration-500 transform focus:w-100"
            placeholder="Search properties"
            required
            v-model="searchParam"
          />
          <button
            class="absolute top-0 end-0 p-2.5 m-1 text-white bg-indigo-600 rounded-3xl hover:bg-indigo-700 focus:outline-none"
            @click="search($event, searchParam)"
          >
            <svg
              class="text-white w-3 h-3 bg-transparent"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
    <div>
      <a href="/fav">
        <svg
          class="w-6 h-6 text-red-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path
            d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
