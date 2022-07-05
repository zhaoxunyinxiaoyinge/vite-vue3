
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import zhCn from 'element-plus/es/locale/lang/zh-cn'

import {router} from "./router/router"
import '@/assets/element/index.scss'

import 'element-plus/theme-chalk/dark/css-vars.css'

import "@/assets/css/reset.css"
import "animate.css";

// vue3最新缓存文件
import { createPinia } from 'pinia'

// 使用pina
const store=createPinia();

let app=createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

// 挂载全局变量使用的函数声明
declare module "@vue/runtime-core" {
    export interface ComponentCustomProperties {
        $http:Function 
    }
}

app.config.globalProperties.$http=()=>{ console.log("我是函数")}

app.use(ElementPlus, { size: 'small', zIndex: 3000,  locale: zhCn,});
app.use(router);
app.use(store)
app.mount('#app');
