import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(20);
  const name = ref('Collins');
  const arrobj = ref(JSON.parse(localStorage.getItem('allsignupusers') || '[]'));

  function increment() {
    count.value++;
  }

  return { count, name, arrobj, increment };
});
