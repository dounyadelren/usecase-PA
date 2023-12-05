<script setup lang="ts">
import { usePropertyStore } from "@/stores/store";
import { ref, onMounted, computed } from "vue";
import CardList from "@/components/CardList.vue";
import SearchBarInput from "@/components/SearchBarInput.vue";
import NoResults from "@/components/NoResults.vue";

const propertyStore = usePropertyStore();
const propertyList = ref<any>([]);
const searchParam = ref<string>("");
const noResults = ref<boolean>(false);
const nbOfResults = ref<string>("");

const getPropertyList = () => {
  propertyStore
    .getData()
    .then((rep: any) => {
      propertyList.value = rep;
    })
    .catch((err: any) => {
      console.log(err);
    });
};

const searchData = ($event: any) => {
  searchParam.value = $event
}

onMounted(() => {
  getPropertyList();
});

const filteredProperties = computed(() => {
  const query = searchParam.value.trim().toLowerCase();
  if(query === '') {
    noResults.value = false
    nbOfResults.value = ''
    return propertyList.value
  }
  const results = propertyList.value.filter((property:any) => {
    return (
      property.type.toLowerCase().includes(query) ||
      property.price.toString().includes(query) ||
      property.zipCode.toString().includes(query) ||
      (property.dateAvailable && property.dateAvailable.toLowerCase().includes(query))
    );
  });
  if (results.length === 0) {
    noResults.value = true;
  } else {
    noResults.value = false;
    nbOfResults.value = results.length.toString();
  }
  return results
});
</script>
<template>
  <main class="container mx-auto">
    <SearchBarInput @search="searchData" />
    <hr class="w-full" />
    <div class="flex flex-wrap flex-row justify-center gap-3">
      <NoResults v-if="noResults" />
      <CardList v-else :propertyList="filteredProperties" />
    </div>
  </main>
</template>
