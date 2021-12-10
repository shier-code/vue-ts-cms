<!--
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-12-07 16:38:58
 * @LastEditors: went
 * @LastEditTime: 2021-12-09 13:56:07
-->
<template>
  <div class="login-account">
    <el-form
      label-width="60px"
      :model="account"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item
        label="账号"
        prop="name"
      >
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input
          v-model="account.password"
          show-password
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<script  lang='ts' >
import { defineComponent, reactive, ref } from "vue";
import { ElForm } from "element-plus";
import { rules } from "../config/account-config";
import { useStore } from "vuex";
import localCache from "@/utils/cache";
export default defineComponent({
  name: "login-account",
  setup() {
    const store = useStore();
    const account = reactive({
      name: localCache.getCache("name") || "",
      password: localCache.getCache("password") || "",
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache("name", account.name);
            localCache.setCache("password", account.password);
          } else {
            localCache.deleteCache("name");
            localCache.deleteCache("password");
          }
          store.dispatch("login/accountLoginAction", { ...account });
        }
      });
    };

    return {
      account,
      loginAction,
      formRef,
      rules,
    };
  },
});
</script>
<style>
</style>
