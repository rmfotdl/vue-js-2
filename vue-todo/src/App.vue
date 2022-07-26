<template>
  <div id="app">
    <todoHeder></todoHeder>
    <todoInput></todoInput>
    <todoList></todoList>
    <todoFooter></todoFooter>
  </div>
</template>

<script>
import todoHeder from './components/TodoHeader.vue'
import todoInput from './components/TodoInput.vue'
import todoList from './components/TodoList.vue'
import todoFooter from './components/TodoFooter.vue'
export default {  
  components : {
    todoHeder,
    todoInput,
    todoList,
    todoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width:200px;
}
button {
  border-style:groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
