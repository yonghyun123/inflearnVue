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