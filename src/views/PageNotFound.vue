<template>
    <div class="flex justify-center items-center h-screen">
      <h1 class="text-4xl font-bold">404 - Page Not Found</h1>
      <p class="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
  </div>
  <h1>{{ message }}</h1>
  </template>
  
  <script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello World')
  </script>
  
  <style>
  
  </style>