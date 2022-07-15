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
          <el-breadcrumb-item  :to="{path:'/'}"
              >主页</el-breadcrumb-item
            >
            <el-breadcrumb-item v-for="item in breaList" :to="{path:item.path}"
              >{{item.meta.title}}</el-breadcrumb-item
            >
          </el-breadcrumb>
        </section>
        <section class='route-list'> 
             <el-button type="primary" @click="()=>jumpTo(item.path)" v-for="item in  routeList" >{{item.title}}</el-button>
        </section>
        <router-view></router-view>
      </el-main>
    </div>
  </div>
</template>
<script lang="ts">
import Header from "@/layout/components/header/index.vue";
import SideBar from "@/layout/components/aside/index";
import { ArrowRight } from "@element-plus/icons-vue";
import { defineComponent,watchEffect,reactive} from "vue";
import { userstore } from "@/store/expmle";
import {RouteLocationRaw, useRoute} from "vue-router"

import Cookies from "js-cookie"

export default defineComponent({
  setup() {
    let route=useRoute();
    let router=useRouter();
    let store = userstore();
    const toggle = () => {
      store.setCollapseValue(!store.isCollapse);
    };
    const breaList=reactive<any>([])

    watchEffect(()=>{
      route.matched&& route.matched.forEach(element => {
        if(!element.meta.hidden){
          breaList.push(element)
        }
      });
      let path=route.path;
      Cookies.set('current',path);
      let title:string=route.meta.title as string;
      let data={path,title};
      store.setRouteList(data);
    })

    const jumpTo=(val: RouteLocationRaw)=>{
      router.push(val);
    }

    return {
      ArrowRight,
      toggle,
      jumpTo,
      routeList:store.routeList,
      breaList
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
