<template>
  <div id="nav">
    <ElConfigProvider>
      <router-link to="/">Home</router-link> |
      <router-link to="/main">main</router-link>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
