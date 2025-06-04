<template>
  <div>
    <h1>Child Component</h1>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic assumenda saepe eveniet tenetur, nesciunt officiis architecto facere unde, quibusdam, tempore rem doloremque necessitatibus ipsam! Corporis voluptas quos provident vitae nobis aperiam quis, inventore praesentium consequatur dolores omnis,
  </div>
  <div>{{ msg }}</div>
  <!-- <div>{{ Firstname }}</div> -->
  <div id="emptyDiv"></div>
  <button @click="checkbtn">Check</button>
</template>

<script lang="ts">
export default {
  props:['msg', 'Firstname'],
  methods:{
    checkbtn(){
      const emptyDiv = document.getElementById('emptyDiv');
      if (emptyDiv) {
        emptyDiv.innerHTML = this.Firstname;
      }
    }
  },
  data() {
    return{
    }
  },
}
</script>

<style>

</style>
