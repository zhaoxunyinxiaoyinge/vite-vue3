<script lang="ts">
import { defineComponent,ref} from 'vue'

import inli8 from "@/layout/components/in8/index.vue"
import Dropdown from "@/layout/components/dropdown/index.vue"
import { useDark, useToggle } from '@vueuse/core'

export default defineComponent({
    setup() {
        let color=ref<string>('');
        let bg= ref(false);

        const isDark = useDark()
       const toggleDark = useToggle(isDark)
        return {
            color,
            bg,
            toggleDark
        }
    },
    components:{
        inli8,
        Dropdown
    }
})
</script>
<template>
        <section class="flex justifly-center align-items" >
            <el-image style="height:60px" :fit="'contain'" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-1.lanrentuku.com%2F2020%2F11%2F6%2F9232f107-4dac-4006-9c7e-e825df5e52e1.png%3FimageView2%2F2%2Fw%2F500&refer=http%3A%2F%2Fi-1.lanrentuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659237413&t=b141420c6ec2506048d76681aa122469"></el-image>
            <span class="back">vue3后台管理系统</span>
        </section>
        <section class="flex flex-end align-items flex-auto" >
            <!-- 查询表单 -->

            <!-- color -->
             <el-color-picker v-model="color" />

            <!-- 全屏组件 -->

            <!-- 字体选择 -->

            <!-- 国际化 -->
            <inli8></inli8>

            <!-- 通知 -->

            <!-- 点击帮助 -->


            <el-button type="primary" class="margin-right-10">点击帮助</el-button>

            <el-icon class="margin-right-10" :size='24'><Message  /></el-icon>

            <!-- 下拉框 -->
            <Dropdown></Dropdown>

            <el-switch @change="toggleDark"  v-model="bg"></el-switch>

            <!-- 用户头像 -->
            <el-image class="margin-left-10" fit="contain" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" style="height:40px"></el-image>
        </section>
</template>
<style lang="scss" scoped>
  @import  "./../../../assets/scss/common.scss";

</style>