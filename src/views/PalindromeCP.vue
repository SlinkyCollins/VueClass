<template>
  <div class="container">
    <h2>Palindrome Checker 🔄</h2>

    <input
      v-model="text"
      placeholder="Enter text"
      class="form-control my-3"
    />

    <button class="btn btn-primary" @click="checkPalindrome">Check</button>

    <p v-if="result !== null">
      Is Palindrome?
      <strong>{{ result ? 'Yes ✅' : 'No ❌' }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('');
const result = ref(null);

function checkPalindrome() {
  const clean = text.value.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = clean.split('').reverse().join('');
  result.value = clean && clean === reversed;
}
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 2rem auto;
  text-align: center;
}
</style>
