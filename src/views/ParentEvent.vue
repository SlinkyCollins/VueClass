<template>
<div>Parent Event Emitter</div>
<span>Parent Component: <span>{{ counts }}</span></span>
<input type="text">
<div class="col-6 mx-auto shadow">
  <ChildEventEmit @Count="Increase"/>
</div>
</template>

<script lang="ts">
import ChildEventEmit from './ChildEventEmit.vue';

export default {
components:{
 ChildEventEmit
},
data(){
  return{
    counts:0
  }
},
methods:{
  Increase(data:number){
    this.counts=data
  }
}
}
</script>

<style>

</style>
