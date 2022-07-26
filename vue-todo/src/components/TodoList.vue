<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem,index) in this.storedTodoItem" v-bind:key="todoItem.item">
        <i class="fa-solid fa-circle-check checkBtn" v-on:click="toggleComplete(todoItem)"
          v-bind:class="{checkBtnCompleted:todoItem.complete}"></i>
        <span v-on:click="toggleComplete(todoItem)" v-bind:class="{ textCompleted: todoItem.complete }">
          {{ todoItem.item }}
        </span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem,index})"><i class="fa-solid fa-trash-can"></i></span>
      </li>
    </transition-group>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods:{
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    })
  },
  computed:{
    ...mapGetters(['storedTodoItem'])
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: .5rem 0;
  padding: 0 .9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #d3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to

/* .list-leave-active below version 2.1.8 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>