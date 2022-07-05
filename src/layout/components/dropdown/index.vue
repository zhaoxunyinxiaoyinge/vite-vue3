<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {}
  },
});
</script>

<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      赵训银
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出</el-dropdown-item>
        <el-dropdown-item>切换普通会员</el-dropdown-item>
        <el-dropdown-item>个人中心</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
