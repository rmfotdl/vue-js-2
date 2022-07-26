import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch(){
      const arr = [];
      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          }
        }
      }
      return arr;
  }
}

export const store = new Vuex.Store({
  state:{
    todoItems: storage.fetch()
  },
  getters: {
    storedTodoItem(state){
      return state.todoItems;
    }
  },
  mutations:{
    addOneItem(state,todoItem) {
      const obj = { complete: false, item:todoItem }
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },    
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state,todoItem) {
      todoItem.complete = !todoItem.complete;
      localStorage.removeItem(todoItem);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearAll(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});