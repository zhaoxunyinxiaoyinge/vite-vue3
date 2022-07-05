<template>
  <div v-if="modelValue">
    <div>{{ title }} <span @click="changes">x</span></div>

    <div>这是内容区域</div>
  </div>
</template>
<script lang="ts" setup>
type props = {
  modelValue: boolean;
  title: string;
  modelModifiers?: {
    xiaomei: boolean;
  };
};
  const propsData=defineProps<props>();

const emit = defineEmits(["update:modelValue"]);

let changes = () => {
  console.log(propsData.modelModifiers)
  emit("update:modelValue", false);
};
</script>
