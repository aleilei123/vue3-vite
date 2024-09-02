<template>
  <div>test/:id{{ id }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: Number
  }
})
console.log(`output->props`, props)
</script>

<style></style>
<route lang="yaml">
meta:
  layout: about
</route>
