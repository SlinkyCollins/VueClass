<template>
  <div class="col-6 mx-auto shadow p-5">
    <h2 class="text-center text-primary">Sign Up Page</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Username" name="username" class="form-control" v-model.trim="username"/>
      <input type="text" placeholder="Full Name" name="fullname" class="form-control" v-model.trim="fullname"/>
      <input type="text" placeholder="Password" name="password" class="form-control" v-model.trim="password">
      <button class="btn btn-primary">Sign Up Here!</button>
    </form>
  </div>
   <div v-for="user in userstore.getUsers()" :key="user.username">
    <p>Fullname: {{ user.fullname }}</p>
    <p>Username: {{ user.username }}</p>
  </div>
</template>

<script lang="ts">


import { useUserStore } from '../stores/userstore';

export default {

  data() {
    return {
      username: '',
      fullname: '',
      password: '',
      userstore: useUserStore(),
    }
  },
  methods:{
    handleSubmit(){
      this.userstore.receiveUser(this.username, this.fullname, this.password);
    }
  }

}
</script>

<style>

</style>
