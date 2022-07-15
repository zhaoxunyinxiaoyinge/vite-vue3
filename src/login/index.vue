<template>
  <div class="contanier" ref="div">
    <div class="logo"></div>
    <div class="login">
    <el-form
      class="form"
      label-width="80px"
      :model="formData"
      :rules="rules"
      ref="form"
    >
      <el-form-item label="用户名" class="form-item" prop="username">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" class="form-item" prop="password">
        <el-input
          type="password"
          v-model="formData.password"
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item class="form-item btn-left">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="default" @click="clear">清除</el-button>
      </el-form-item>
    </el-form>
    </div>
    <!-- 添加其他登录方式 -->
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, watch, watchEffect } from "vue";
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";
import { useStore } from "vuex"
import { ElMessage } from "element-plus";
import { ElementNode } from "@vue/compiler-core";

    let div = ref<any>(null);
    let form = ref<any>(null);
    let redirect = ref<string| null>(null);
    let otherQuery = ref(null);

    const router = useRouter();
    const route = useRoute();

    const store = useStore();

    let formData = reactive({ username: "", password: "" });
    
    let rules = reactive({
      username: [{ required: true, message: "请选择用户名", trigger: "blur" }],
      password: [
        { required: true, message: "请选择用户密码", trigger: "blur" },
      ],
    });

    onMounted(() => {
      const height = document.documentElement.clientHeight;
      div.value.style.height = height + "px";
    });

    //登录时，逻辑
    const login = () => {
      let { validate } = form.value.$.ctx;
      let { username, password } = formData;
      console.log(form,'form')

      validate((res) => {
        if (res) {
          // 触发用户登录
          store.dispatch("login/login", { username, password }).then(
            (res) => {
              if (res.code == 0) {
                window.localStorage.setItem("token", res.data.token);
                router.push({
                  path: redirect.value || "/",
                  query: otherQuery.value,
                });
                ElMessage.success("登录成功");
              }
            },
            (err) => {
              ElMessage.error("登录失败");
            }
          );
        }
      });
    };

    const getOtherQuery = (query) => {
      return Object.keys(query).reduce((cur, next) => {
        if (next != "redirect") {
          cur[next] = query[next];
        }
        return cur;
      }, {});
    };

    onBeforeRouteUpdate((to) => {
      let query = to.query;
      if (query) {
        redirect.value = query.redirect;
        otherQuery.value = getOtherQuery(query);
      }
    });

    // 登录表单重置
    const clear = () => {
      let { resetFields } = form.value.$.ctx;
      resetFields();
    };

</script>

<style lang="scss" scoped>
.contanier {
  display: flex;
  align-items: center;
  padding-left: 300px;
  
}
.logo {
  width: 50%;
  background: url('./../assets/db.jpeg') no-repeat;
  height: 500px;
}
.login {
  display: flex;
  flex:12;
  justify-content: center;
  align-items: center;
  color: #000;
  height: 500px;
  margin-right:200px;
}

.form {
  box-sizing: border-box;
  padding:30px;
  width: 100%;
}

.form-item {
  margin-top: 30px;
}

.btn-left {
  text-align: left;
}

.login .el-form-item__label {
  color:#000
}
</style>
