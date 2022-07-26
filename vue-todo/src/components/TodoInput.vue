<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItems" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고!</h3>
      <p slot="body">값을 입력해주세요</p>

    </Modal>
  </div>
</template>

<script>

import Modal from './common/Modal.vue'

export default {
  data(){
    return {
      newTodoItems :'',
      showModal: false
    }
  },
  methods : {
    addTodo(){
      if(this.newTodoItems !== ''){
        this.$store.commit('addOneItem', this.newTodoItems);
        this.clearInput();
      }else{
        this.showModal = !this.showModal;
      }
    },
    clearInput(){
      this.newTodoItems ="";
    }
  },
  components:{
    Modal
  }
}
</script>
<style scoped>
    input:focus {
      outline: none;
    }
  
    .inputBox {
      background: white;
      height: 50px;
      line-height: 50px;
      border-radius: 5px;
    }
  
    .inputBox input {
      border-style: none;
      font-size: .9rem;
    }
  
    .addContainer {
      float: right;
      background: linear-gradient(to right, #6478fb, #8763fb);
      display: block;
      width: 3rem;
      border-radius: 0 5px 5px 0;
    }
  
    .addBtn {
      color: white;
      vertical-align: middle;
    }
  
    .closeModalBtn {
      color: #42b983;
    }
  
    .modal-header h3 {
      margin-top: 0;
      color: #42b983;
    }
</style>