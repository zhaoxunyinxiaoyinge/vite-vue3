<template>
  <div class="padding-20">
    <div>表单</div>
  </div>
</template>
<script src="https://unpkg.com/form-making/public/lib/ace/ace.js"></script>
<script>
export default {
  name: "formFiled",
  data() {
    return {
      formData: {},
      rules: [
        {
          type: "input",
          field: "goods_name",
          title: "商品名称",
        },
        {
          type: "datePicker",
          field: "created_at",
          title: "创建时间",
          col:{
            span:4
          }
        },
      ],
      value: {},
    };
  },
};
</script>
<style scoped></style>
