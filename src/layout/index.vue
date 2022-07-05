<template>
  <div class="container">
    <el-header class="header">
      <Header></Header>
    </el-header>
    <div class="content">
      <el-aside class="aside">
        <side-bar></side-bar>
      </el-aside>
      <el-main class="main">
        <!-- 路由导航，和展开栏 ,面包屑-->
        <section class="breaum">
          <el-icon
            @click="toggle"
            :size="24"
            style="margin-left: -20px; margin-right: 20px"
            ><Expand
          /></el-icon>
          <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }"
              >homepage</el-breadcrumb-item
            >
            <el-breadcrumb-item>promotion management</el-breadcrumb-item>
          </el-breadcrumb>
        </section>
        <section class="route-list"></section>
        <router-view></router-view>
      </el-main>
    </div>
  </div>
</template>
<script lang="ts">
import Header from "@/layout/components/header/index.vue";
import SideBar from "@/layout/components/aside/index";
import { ArrowRight } from "@element-plus/icons-vue";
import { defineComponent } from "vue";
import { userstore } from "@/store/expmle";

export default defineComponent({
  setup() {
    let store = userstore();
    const toggle = () => {
      store.setCollapseValue(!store.isCollapse);
    };

    return {
      ArrowRight,
      toggle,
    };
  },
  components: {
    Header,
    SideBar,
  },
});
</script>

<style scoped lang="scss">
@import "./../assets/scss/layout.scss";
</style>
