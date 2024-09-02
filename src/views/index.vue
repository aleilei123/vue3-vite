<script setup lang="ts">
// let a: number = 2
import Test from '@/components/test.vue'
import { useCounterStore } from '@/stores/counter'
import { useUserStore } from "@/stores/user"
import { storeToRefs } from 'pinia'
const counterStore = useCounterStore()
const { counter } = storeToRefs(counterStore)

const userStore = useUserStore()
const { msg } = storeToRefs(userStore)

// userStore.change("hello")
</script>

<template>
  <div
    @click="
      () => {
        counterStore.increment();
        userStore.change('hello')
      }
    "
  >
    count:{{ counter }}-{{ msg }}
  </div>
  <Test></Test>
</template>
