<template>
  <div>
    <h1>Login Page</h1>
    <input type="text" class="form-control my-2" placeholder="User Name" name="username" v-model.trim="username">
    <input type="text" class="form-control my-2" placeholder="Password" name="password" v-model.trim="password">
    <button class="btn btn-outline-primary" @click="login()">Log In</button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      username: "",
      password: "",
      allStudents: [] as { username: string, password: string }[],
    };
  },
  mounted() {
    this.allStudents = JSON.parse(localStorage.getItem("Students") || "[]");
  },
  methods: {
    login() {

      const verifyStudent = this.allStudents.find((student) => student.username === this.username);

      if (verifyStudent) {
        if (verifyStudent.password === this.password) {
          localStorage.setItem("currentStudent", JSON.stringify(verifyStudent));
          this.$router.push({name:'StudentDash',params:{username:verifyStudent.username}}) // 1st Method of passing props
          // this.$router.push(`/studentdash/${verifyStudent.username}`); 2nd Method of passing props
        } else {
          alert('Incorrect Username or Password');
        }
      } else {
        alert('User not found');
      }

    },
  },
}
</script>

<style></style>
