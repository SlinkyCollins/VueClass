<template>
<div>Child Event Emitter</div>
<div class="text-center text-success">
  <span>Child Component: {{ count }} </span>
  <button class="btn btn-outline-success" @click="increaseCount">Increment</button>
</div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      count: 0
    };
  },
  methods:{
    increaseCount(){
      this.count++;
      this.$emit('Count', this.count)
    }
  }
}
</script>

<style>

</style>
