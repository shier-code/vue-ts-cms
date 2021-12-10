<!--
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-08-26 10:16:51
 * @LastEditors: went
 * @LastEditTime: 2021-12-07 15:29:19
-->
<template>
  <div id="app">
    <ElConfigProvider>
      <router-view></router-view>
    </ElConfigProvider>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

export default defineComponent({
  name: "App",
  components: {
    ElConfigProvider,
  },
  props: {
    name: {
      type: String,
    },
  },
  setup() {
    return {
      zhCn,
    };
  },
});
</script>
<style lang="less">
#app{
  height: 100%;
}
</style>
