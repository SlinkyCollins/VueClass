<template>
  <div>Welcome to dashboard, {{currentUser.fullname}}</div>
  <div>Your email: {{ currentUser.email }}</div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      currentUser: {} as { fullname: string, email: string, password: string }
    }
  },
  mounted() {
    this.currentUser = JSON.parse(localStorage.getItem('currentuser') || '{}');
    console.log(this.currentUser);
  },
  methods: {
    
  }
}

</script>

<style>

</style>
