<template>
  <div>
    Computed Property
    <div>{{ getFullName }}</div>
    <div v-for="(item, index) in getarrayone" :key="index">
      <p>Name {{item.name}}</p>
      <p>Age {{item.age}}</p>
      <p>Status {{item.status}}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      firstname: "Afolabi",
      lastname: "Ademola",
      arrayone: [
        {
          name: "Ade",
          age: 40,
          status: "active"
        },
        {
          name: "Bolu",
          age: 22,
          status: "active"
        },
        {
          name: "drake",
          age: 33,
          status: "active"
        },
        {
          name: "Trey",
          age: 30,
          status: "active"
        },
        {
          name: "gork",
          age: 5,
          status: "active"
        },
        {
          name: "Joe",
          age: 50,
          status: "inactive"
        },
        {
          name: "Don",
          age: 60,
          status: "inactive"
        },
      ]
    }
  },

  computed: {
    getFullName() {
      return this.firstname + ' ' + this.lastname
    },

    getarrayone() {
      return this.arrayone.filter((item)=>item.status === 'inactive')
    }
  },
}
</script>

<style></style>
