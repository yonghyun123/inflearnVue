<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem" class="shadow">
        <span class="">
          <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted:todoItem.completed}" 
              v-on:click="toggleComplete(todoItem, index)"></i>
        </span>
        <span v-bind:class="{textCompleted:todoItem.completed}">
        {{todoItem.item}}
        </span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash"></i> 
        </span>
      </li>
      </transition-group>
  </div>
</template>

<script>
export default {
  data(){
    return {
      todoItems:[],
    }
  },
  props:['propsdata'],
  methods:{
    removeTodo(todoItem, index){
      console.log('index='+index);
      this.$store.commit('removeOneItem',{todoItem, index}); // 객체리터럴 단축
      // this.$store.commit('clearAllItem');
      // this.$emit('removeItem',todoItem,index);
      
    },
    toggleComplete(todoItem, index){
      this.$store.commit('toggleOneItem', {todoItem, index}); // 객체리터럴 단축
      // this.$emit('toggleItem',todoItem,index);
    }
  },

}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

/* 리스트아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>