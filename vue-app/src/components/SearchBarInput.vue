<script setup lang="ts">
</script>
<template>
  <form class="relative w-max mx-auto my-2">
    <div class="flex">
      <div class="relative w-full">
        <input
          type="search"
          class="block p-2.5 z-20 text-sm text-gray-900 bg-gray-50 rounded-3xl shadow focus:outline-none focus:w-full focus:pl-16 focus:pr-4"
          placeholder="Search properties"
          required
        />
        <button
          type="submit"
          class="absolute top-0 end-0 p-2.5 m-1 text-white bg-indigo-600 rounded-3xl hover:bg-indigo-700 focus:outline-none"
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
  ·
</template>
