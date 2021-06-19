<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 이름"></TodoInput> -->
    <!-- <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> Vuex를 통한 템플릿 바인딩 불필요-->
    <!-- <TodoList v-bind:내려보낼 props이름="props데이터 이름"></TodoList> -->
    <TodoInput></TodoInput>
    <TodoList v-bind:propsdata="todoItems" 
              v-on:removeItem="removeOneItem" 
              v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader  from './components/TodoHeader.vue'
import TodoInput  from './components/TodoInput.vue'
import TodoList  from './components/TodoList.vue'
import TodoFooter  from './components/TodoFooter.vue'

export default {
  data(){
    return {
      todoItems : []
    }
  },
  methods:{

    removeOneItem(todoItem,index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },
    toggleOneItem(todoItem, index){
      // todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    },
    // clearAllItem(){
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  },

  components:{
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter
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
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
