<template>
  <div class="col-6 mx-auto shadow p-2">
    <h1 class="text-center text-primary">Sign Up Page</h1>
    <form @submit.prevent="handleSubmit()" class="d-flex flex-column gap-2">
      <input type="text" class="form-control" placeholder="Full Name" name="fullname"
        v-model.trim="userDetails.fullname">
      <input type="email" class="form-control" placeholder="Email" name="email" v-model.trim="userDetails.email">
      <input type="password" class="form-control" placeholder="Password" name="password"
        v-model.trim="userDetails.password">
      <button type="submit" class="btn btn-outline-primary">Sign Up</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface User {
  fullname: string;
  email: string;
  password: string;
}

const userDetails = ref<User>({
  fullname: '',
  email: '',
  password: '',
});


const allUsers = ref<User[]>([]);

onMounted(() => {
  const storedUsers = localStorage.getItem('allSignedUsers');
  if (storedUsers) {
    allUsers.value = JSON.parse(storedUsers);
  }
});

function handleSubmit() {
  if (!userDetails.value.fullname || !userDetails.value.email || !userDetails.value.password) {
    alert('All fields are required!');
    return;
  }

  allUsers.value.push({ ...userDetails.value });
  // console.log({ ...userDetails.value });
  // localStorage.setItem('allSignedUsers', JSON.stringify(allUsers.value));

  axios.post('http://127.0.0.1:8000/api/register', {...userDetails.value})
  .then((res)=>{res.data})
  .catch((err)=>{console.log(err);
  })

  // alert('User created successfully');
  router.push('/login');
}
</script>


<style></style>
