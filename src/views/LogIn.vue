<template>
  <div>
    <h1>Login Page</h1>
    <div class="text-danger">{{ message }}</div>

    <input type="email" class="form-control my-2" placeholder="Email" v-model.trim="email" />
    <input type="password" class="form-control my-2" placeholder="Password" v-model.trim="password" />
    <button class="btn btn-outline-primary" @click="login()">Log In</button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: "",
      password: "",
      message: "",
      allUsers: [] as { fullname: string, email: string, password: string }[],
    };
  },
  mounted() {
    this.allUsers = JSON.parse(localStorage.getItem("allSignedUsers") || "[]");
  },
  methods: {
    login() {
      this.message = "";

      const verifyUser = this.allUsers.find((user) => user.email === this.email);

      if (this.email === "") {
        this.message = "Email is required";
      } else if (this.password === "") {
        this.message = "Password is required";
      } else if (verifyUser) {
        if (verifyUser.password === this.password) {
          localStorage.setItem("currentuser", JSON.stringify(verifyUser));
          this.message = "Logged in successfully";
          this.$router.push("/dashboard");
        } else {
          this.message = "Incorrect Password";
        }
      } else {
        this.message = "User not found";
      }
    },
  },
};
</script>
