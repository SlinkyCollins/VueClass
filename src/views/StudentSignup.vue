<template>
  <div class="col-6 mx-auto shadow p-2">
    <h1 class="text-center text-primary">Sign Up Page</h1>
    <div class="text-center text-danger">{{ msg }}</div>
    <form @submit.prevent="handleSubmit()" class="d-flex flex-column gap-2">
      <input type="text" class="form-control" placeholder="User Name" name="username"
        v-model.trim="studentDetails.username" />
      <input type="email" class="form-control" placeholder="Email" name="email" v-model.trim="studentDetails.email">
      <input type="password" class="form-control" placeholder="Password" name="password"
        v-model.trim="studentDetails.password">
      <button type="submit" class="btn btn-outline-primary">Sign Up</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const msg = ref('');

interface Student {
  username: string;
  email: string;
  password: string;
}

const studentDetails = ref<Student>({
  username: '',
  email: '',
  password: '',
});

const allStudents = ref<Student[]>([]);

onMounted(() => {
  const savedUsers = localStorage.getItem('Students');
  if (savedUsers) {
    allStudents.value = JSON.parse(savedUsers);
    console.log(allStudents.value);
  }
});

function handleSubmit() {
    if (!studentDetails.value.username || !studentDetails.value.email || !studentDetails.value.password) {
    msg.value ='All fields are required!';
    return;
  }
  const student = allStudents.value.find((pupil) => pupil.username === studentDetails.value.username )

  if (student){
    msg.value ='User already exists';
  }
  else {
    allStudents.value.push(studentDetails.value);
    localStorage.setItem('Students', JSON.stringify(allStudents.value));
    msg.value ='User created successfully';
    router.push('/studentlogin');
  }
  setTimeout(() => {
    msg.value = '';
  }, 3000);
}
</script>

<style></style>
