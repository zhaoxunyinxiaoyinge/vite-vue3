<template>
  <div>
    <div class="modal" v-modal>
      <div class="title">这是一个标题文本框</div>
      <div></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, Directive } from "vue";

let vModal: Directive = {
  mounted(el: HTMLElement) {
    const mosueDown = (e) => {
      console.log(e)
      // let moveX: number =e.clientX-el.offsetLeft;
      // let moveY: number =e.clientY-el.offsetTop
      // console.log(moveX,moveY);
      const move = (event) => {

        let x: number = event.clientX;
        let y: number = event.clientY;
        el.style.transform =
          "translate(" + (x) + "px," + (y) + "px";
      };

      el.addEventListener("mousemove", move);
      document.addEventListener("mouseup", function () {
        el.removeEventListener("mousemove", move);
      });
    };

    document.addEventListener("mousedown", mosueDown);
  },
};
</script>

<style scoped>
.modal {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
}

.title {
  background-color: #000;
  line-height: 40px;
  height: 40px;
  text-align: left;
  color: #fff;
}
</style>
