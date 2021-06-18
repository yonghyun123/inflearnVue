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

      }
    }
})