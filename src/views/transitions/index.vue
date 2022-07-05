<script lang="ts" setup>
import _ from "lodash"

const list = reactive<number[]>([1, 2, 3, 4, 5, 6]);
const show = ref<Boolean>(true);
const toggle = () => {
  show.value = !show.value;
};

const add = () => {
  list.push(list.length + 1);
};

const deletes = () => {
  list.pop();
};

type arrType={
  val:string,
  id:number
}

let arr = ref<arrType[]>([]);
 arr.value=Array.apply(null, { length: 81 }).map((_, index) => {
  return {
    id: index,
    val: (index % 9) + 1,
  };
});




const getRandomNumber=()=>{
   arr.value=_.shuffle(arr.value);
}

const beforeEnter = (el: Element) => {
  console.log("动画开始进入");
};

const enter = (el: Element, done: Function) => {
  console.log("动画正在进行");
  done();
};

const afterEnter = (el) => {
  console.log("动画完毕");
};

const enterCancelled = (el: Element) => {
  console.log("动画被打断");
};

const beforeLeave = (el: Element) => {};

const leave = (el: Element) => {};

const afterLeave = (el: Element, done: Function) => {};

const leaveCancelled = () => {};

// 动画监听函数
const transitionend = (e) => {
  console.log(e, "事件e");
};

// vue 过渡css动画效果时，需要的钩子函数,主要是，enter-actvied和leave-active
</script>

<template>
  <div>
    <button @click="toggle">点击一下</button>
    <transition
      appear
      type="animation"
      @animationend="transitionend"
      :durations="500"
      name="loading"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <!--@before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled" -->
      <div v-if="show" class="loadings">总过</div>
    </transition>

    <!-- 动画过渡列表 -->
    <button @click="add">新增</button>
    <button @click="deletes">删除</button>
    <transition-group
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <div v-for="(item, index) in list" :key="index">{{ item }}</div>
    </transition-group>

    <!-- 生成随机数 -->

    <button @click="getRandomNumber">点击生成随机数</button>

    <transition-group tag="aside" 
      move-class="mmm"
     >
      <div v-for="_ in arr" :key="_.id">{{_.val}}</div>
    </transition-group>
  </div>
</template>

<style scoped>
.loadings {
  width: 200px;
  height: 200px;
  background-color: #000;
}

/* 自定义过渡效果 */
/* .loading-enter-from {
  width: 0;
  height: 0;
}

.loading-enter-active {
  transition: all 2s ease-in;
}

.loading-enter-to {
  width: 200px;
  height: 200px;
  background-color: #000;
} */

aside {
  display: flex;
  flex-wrap: wrap;
  width: calc(40px * 9 + 18px );
}

aside div {
  width:40px;
  height: 40px;
  border:1px solid #ccc;
  line-height: 40px;
  text-align: center;
}

.mmm {
  transition: all 3s ease;
}
</style>
