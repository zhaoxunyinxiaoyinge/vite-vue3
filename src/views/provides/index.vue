<script lang="ts" setup>
import {ref} from "vue"
import Bus from "./bus";

let flag = ref<boolean>(false);
Bus.emit("flag", flag);
//  let key:string="flag";
// provide(key,flag);
</script>
<template>
  <div></div>
</template>
