<template lang="">
  <div class="clearAllCointainer">
    <p class="clearAllBtn" v-on:click="clearTodo">All Clear</p>
  </div>
</template>
<script>
export default {
  methods:{
    clearTodo : function(){
      this.$store.commit('clearAll')
    }
    
  }
}
</script>
<style scoped>
    .clearAllCointainer {
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