<template>
  <h1>Pinia Example</h1>
  <p>{{ counter.count }}</p>
  <p>{{ counter.name }}</p>
  <button @click="counter.increment">Click</button>
</template>

<script lang="ts">
import { useCounterStore } from '../stores/counter';

export default {
  data() {
    return{
      allUsers:[],
      counter:useCounterStore()
    }
  },
}
</script>

<style>

</style>