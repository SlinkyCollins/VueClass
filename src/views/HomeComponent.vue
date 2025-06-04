<template>
    <h4>Welcome to Vue 3, {{name}}</h4>
    <p> The number is {{num}}</p>

    <button @click="increaseNum()">Increase</button>

    <!-- Loop Rendering -->
    <ul v-for="student in students" :key="student">
        <li>{{ student }}</li>
    </ul>

    <span v-if="day === 'wednesday'">Today is wednesday</span>
    <span v-else>Today is not wednesday</span>

    <span v-show="day">Yes, today is Monday</span>

    <div class="col col-6 h-6/1" :class="condition ? 'bg-success': 'bg-danger'">

        <button class="" @click="()=> condition = !condition">Change Color</button>
    </div>

    <input v-model="userInput.name" :type="show ? 'text' : 'password'" class="border">
    <button @click="()=>show = !show">{{ show ? 'hide' : 'show' }}</button>

    <span>{{ userInput.name }}</span>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const name = "Abayomi";
    const num = ref(5);
    const students = ['Ibrahim', 'Ayoola', 'Moji', 'Raymond'];
    const day = 'wednesday';
    const condition = ref(true);
    const show = ref(false);
    const userInput = ref ({
        name: 'Afolabi'
    })

    const increaseNum = () => {
        num.value++;
    }

</script>

<style>

</style>
