import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const storage = {
    fetch(){
        // console.log('created');
        const arr = [];
        if(localStorage.length > 0){
            for(let i = 0; i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                  arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    state:{
        headerText: 'TODO it!!!!',
        todoItems: storage.fetch() //returned data
    },
    mutations:{
      addOneItem(state, todoItem){
        console.log('commit');
        const obj = {
          completed: false,
          item: todoItem
        }
        localStorage.setItem(todoItem, JSON.stringify(obj));
        // this.todoItems.push(obj);
        state.todoItems.push(obj);
      },

      clearAllItem(state){
        localStorage.clear();
        state.todoItems = [];
      },

      removeOneItem(state, payload){
        localStorage.removeItem(payload.todoItem.item);
        console.log(state.todoItems);
        state.todoItems.splice(payload.index, 1);
      },

      toggleOneItem(state, payload){
        // todoItem.completed = !todoItem.completed;
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
      },

    }
})