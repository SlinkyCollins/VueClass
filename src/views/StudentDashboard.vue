<template>
  <div>
    <h1>Student Dashboard</h1>
    <!-- <div>Welcome, {{ username }}</div> -->
    <div>Welcome, {{ $route.params.username }}</div>
    <div class="text-center text-primary">{{ msg }}</div>
  </div>
</template>


<script lang="ts">
export default {
  //  props: {
  //   username: String
  // },
  data() {
    return {
      username: "",
      msg: "",
    };
  },
  mounted() {
    this.getStudent();
  },
  methods: {
    getStudent() {
      const currentStudent = JSON.parse(localStorage.getItem("currentStudent") || "{}");
      if (currentStudent.username === this.$route.params.username) {
        console.log(currentStudent);
        this.msg = 'User found';
      }
      else {
        this.$router.push('/studentlogin');
      }
    }
  }
}
</script>

<style></style>
