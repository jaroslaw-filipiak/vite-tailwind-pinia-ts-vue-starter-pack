<script setup lang="ts">
  import { useMainStore } from '../store/Main';
  import { storeToRefs } from 'pinia';
  const store = useMainStore();

  const { version } = storeToRefs(store);
</script>

<template>
  <h1>ver: {{ version }}</h1>
</template>

<style scoped></style>
