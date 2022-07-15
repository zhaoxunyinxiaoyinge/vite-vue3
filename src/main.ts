
import { createApp,toRef} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {router} from "./router/router"
import '@/assets/element/index.scss'

import 'element-plus/theme-chalk/dark/css-vars.css'

import "@/assets/css/reset.css"
import "animate.css";

// vue3最新缓存文件
import { createPinia, storeToRefs } from 'pinia';

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

app.use(router);
app.use(store)
app.use(ElementPlus, { size: 'small', zIndex: 3000});
app.mount('#app');
