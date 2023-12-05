<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePropertyStore } from "@/stores/store";

const favProperties = usePropertyStore().favProperties;

</script>
<template>
  {{ favProperties }}
</template>
