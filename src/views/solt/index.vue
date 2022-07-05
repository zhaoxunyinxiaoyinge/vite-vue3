<script lang="ts" setup>
import { reactive } from "vue";
type arr = {
  name: string;
  age: number;
};

const data = reactive<arr[]>([
  {
    name: "xiaoeming",
    age: 20,
  },
]);
</script>
<template>
  <div>
    <slot></slot>
    <slot name="footer"></slot>
    <slot name="header" :data="data"></slot>
    <slot name="main"></slot>
  </div>
</template>
<style></style>
