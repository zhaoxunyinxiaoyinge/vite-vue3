<script lang="ts">
import screenfull from "screenfull";
import { FullScreen } from "@element-plus/icons-vue";

export default defineComponent({
  setup() {
    const toggleScreen = () => {
      if (!screenfull.isEnabled) {
        screenfull.toggle();
      } else {
        screenfull.toggle();
      }
    }

    const changescreen = () => {

    }

    return {
      toggleScreen
    }
  }
})

</script>

<template>
  <el-icon class="margin-right-10"  :size="25" @click="toggleScreen">
    <FullScreen />
  </el-icon>
</template>
