<script lang="ts">
import { defineComponent } from "vue";
import {userstore} from "@/store/expmle";
import { ElMessage } from 'element-plus'
export default defineComponent({
  setup() {
    let store=userstore();

    const toggle=(val)=>{
        store.setCurrentLang();
    }
    return {
      toggle
    }
  },
});
</script>
<template>
  <el-button-group class="margin-left-20 margin-right-10">
    <el-button type="primary" @click="toggle('en')">英文</el-button>
    <el-button type="primary" @click="toggle('zh-cn')">中文</el-button>
  </el-button-group>
</template>

<style lang="scss" scoped>
    @import  "./../../../assets/scss/common.scss";
</style>
