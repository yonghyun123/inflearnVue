<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
      <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
      </span>
      <Modal v-if="showModal" @close="showModal = false">
        <!-- <div class="modal-header">custom header</div> -->
        <h3 slot="header">
          경고!
          <i class="fas fa-times" @click="showModal = false"></i>
        </h3>
        <h2 slot="body">무언가를 정의하세요</h2>
        <h2 slot="footer">copyright</h2>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'  
export default {
  data(){
    return {
      newTodoItem: "",
      showModal: false,
    }
  },
  methods:{
    addTodo: function(){
      if(this.newTodoItem !== ''){
        // this.$emit('이벤트이름',this.newTodoItem);
        this.$emit('addTodoItem',this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput: function(){
      this.newTodoItem = '';
    }
  },
  components:{
    Modal:Modal,
  }
}
</script>

<style scoped>
input:focus{
  outline: none;
}

.inputBox{
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input{
  border-style: none;
  font-size: 0.9rem;
}

.addContainer{
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn{
  color: white;
  vertical-align: middle;
}
.closeModalBtn{
  color: #42b983;
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