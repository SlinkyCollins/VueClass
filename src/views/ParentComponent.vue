<template>
  <div class="col-10 mx-auto shadow d-flex">
    <div class="col-5">
      <h1>Parent Component</h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, cumque sed perspiciatis velit commodi nemo
      minima voluptatibus nihil aspernatur ipsa omnis, reiciendis maiores hic excepturi distinctio consectetur! Et
      exercitationem officia ut quam dolorem tenetur eligendi earum ipsum vitae iste labore,
    </div>
    <div class="col-5">
      <input type="text" class="form-control" v-model="firstname">
    </div>
    <div class="col-6">
      <child-view msg="My name is Collins" :Firstname="firstname" />
    </div>
  </div>
</template>

<script lang="ts">
import ChildView from './ChildView.vue';
export default {
  data() {
    return {
      firstname: ''
    }
  },
  components: { ChildView }
}
</script>

<style></style>
