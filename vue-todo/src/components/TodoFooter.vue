<template>
  <div class="clearAllContainer">
      <span class="clearAllBtn" v-on:click="clearTodo">clear all</span>
  </div>
</template>

<script>
export default {
  methods:{
    clearTodo(){
      this.$store.commit('clearAllItem');
      // this.$emit('clearItem');
      
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
