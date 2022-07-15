
import { defineAsyncComponent } from "vue";

import {
  createRouter,
  createWebHistory,
  RouteParamValueRaw,
  RouteRecordRaw,
  // createWebHashHistory,
} from "vue-router";

const containRoute: Array<RouteRecordRaw> = [
  {
    path: "/",
    meta: {
      title: "主页",
      hidden: false,
    },
    component: defineAsyncComponent(() => import("@/layout/index.vue")),
    redirect: "/welcome",
    children: [
      {
        path: "/welcome",
        redirect: "",
        meta: {
          title: "首页",
          icon: "",
          hidden: false,
        },
        component: defineAsyncComponent(
          () => import("@/views/welcome/index.vue")
        ),
      },
    ],
  },
  
  {
    path:"/stylems",
    meta:{
      title:'系统',
      hidden:false,
    },
    component: defineAsyncComponent(() => import("@/layout/index.vue")),
    redirect: "/stylems/index",
    children:[
      {
        path:'index',
        redirect:'',
        meta:{
          title:"系统设置",
          hidden:false
        },
        component: defineAsyncComponent(() => import("@/views/stylems/index.vue")),
      }
    ]
  },

  {
    path: "/login",
    meta: {
      title: "用户登录",
      hidden: false,
    },
    component: defineAsyncComponent(() => import("./../login/index.vue")),
  },

  {  path: '/:pathMatch(.*)*', component: defineAsyncComponent(()=>import('@/views/notFound/notFound.vue')) },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [...containRoute],
  scrollBehavior: function (to, from, savedPosition) {
    return { top: 0 };
  },
});

  export { router, containRoute };
