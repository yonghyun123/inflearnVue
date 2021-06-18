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



# 3. ES6



const vs let

const : 한번 선언한 값에 대해서 변경할 수 없음

let: 한번 선언한 값에 대해서 선언할 수 없음



Es5 특징 - 변수의 scope

```javascript
var sum = 0;
for(var i =1; i <= 5; i++){
  sum += i;
}
console.log(sum);//15
console.log(i);//6
```



Hoisting

- hoisting이란 선언한 함수와 변수를 해석기가 가장 상단에 있는것처럼 해석한다

```javascript
function willBeOverridden(){
	return 10;
}
willBeOverridden(); //return 5 but funciton expression is not applied
function willBeOverridden(){
	return 5;
}
```



##  change let, const

```javascript
let sum = 0;
for(let i =1; i <=5; i++){
	sum = sum+i;
}
console.log(sum);//15 
console.log(i);//undefined
```



## Arrow function - 화살표 함수



```javascript
var sum = function(a,b){
  return a+b;
};

//es6
var sum = (a,b) => {
  return a+b;
}
sum(10,20);

var arr = ["a","b","c"];
arr.forEach(function(value){
  console.log(value);
})
//es6

arr.forEach(value => console.log(value));
```



## Enhanced Object Literals - 향상된 객체 리터럴

```javascript
var dictionary = {
  words: 100,
  lookup: function(){
    console.log("find words");
  }
  //es6
  lookup(){
    console.log("find words");
  }
}
```

## Modules 자바스크립트 모듈화

- 자바스크립트 모듈 로더 라이브러리(AMD, common.js)기능을 js자체에서 지원
- 호출되기 전까지는 코드 실행과 동작을 하지 않는 특징이 있음



# Vuex

- 복잡한 애플리케이션의 컴포넌트를 효율적으로 관리하는 라이브러리
- Flux 패턴
- State, getters, mutations, actions 학습
- Vuex를 쉽게 코딩할 수 있는 방법인 helper 기능 



### Flux란

MVC패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴

Action -> Dispatcher -> Model -> View



# mutation

- state 값을 변경할 수 있는 유일한 방법이자 메서드
- 뮤테이션은 commit()으로 동작시킨다.



```javascript
state: { num: 10},
mutations:{
  printNumber(state){
    return state.num
  },
  sumNumbers(state, anotherNum){
    return state.num + anotherNum;
  }
}

this.$store.commit('printNumbers');
this.$store.commit('sumNumbers',20);
```

