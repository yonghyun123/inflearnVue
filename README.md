# vue-intermediate course



##  v-for, v-bind:key

- Array 에서 v-for을 이용해 item을 DOM에 binding
- V-bind:key는 바인딩할때의 key값을 지정해서 v-for 이용 성능을 개선



## # v-bind:class

CSS class를 직접 bind시켜 동적인 디자인 style가능

ex) 

```html
<span v-bind:class="textCompleted: todoItem.completed">
	{{todoItem.itme}}
</span>
```

-> textCompleted CSS속성을 todoItem.completed값에 따라 적용여부를 처리



## props vs emit

### 1.props

상위 컴포넌트

```html
<TodoList v-bind:내려보낼 props이름="prosp데이터 이름"></TodoList>
<TodoList v-bind:propsata="Item"></TodoList>
```

```javascript
data: function(){
  return{
    Item:[]
  }
}
```

하위컴포넌트

```html
<li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem" class="shadow"></li>
```

```javascript
props:['내려보낼 props이름']
props:['propsdata']
```

### 2. $emit

상위컴포넌트

```html
 <TodoInput v-on:하위컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 이름"></TodoInput> 
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
```

하위컴포넌트

```javascript
methods:{
    addTodo: function(){
      if(this.newTodoItem !== ''){
        // this.$emit('이벤트이름',this.newTodoItem);
        this.$emit('addTodoItem',this.newTodoItem);
        this.clearInput();
      }
    },
```



