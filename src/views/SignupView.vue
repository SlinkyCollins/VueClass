<template>
<div>
    <p>This is Sign Up Page</p>
</div>
<nav class="nav">
    <li class="text-decoration-none flex justify-between bg-gray-200 p-4"><router-link to="/">Home</router-link></li>
    <li class=""><router-link :to="{name: 'about'}">About</router-link></li>
</nav>

<button @click="goToAbout()">About</button>
<button @click="next(1)">Next</button>
<button @click="back(-1)">Back</button>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const goToAbout = () => {
    // router.push({ name: 'about' });
    router.push('/about');
}


    const next = (value:number) => {
        router.go(value);
    }

    const back = (value:number) => {
        router.go(value);
    }

</script>

<style>

</style>