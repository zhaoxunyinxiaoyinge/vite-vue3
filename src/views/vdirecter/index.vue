<template>
  <div v-moves="{background:'red'}">23444</div>
</template>

<script lang="ts" setup>
import { Directive, ref, DirectiveBinding } from "vue";
const flag = ref<boolean>(false);

const vMoves:Directive = {
  created() {
    console.log("创建之前");
  },
  beforeMount(el, bindNode) {
    console.log("挂载之前", bindNode);
  },
  mounted(el: Element, bindNode) {
    console.log("挂载了", el, bindNode);
  },
  beforeUpdate() {
    console.log("更新之前");
  },
  beforeUnmount() {
    console.log("卸载之前");
  },
};
</script>
