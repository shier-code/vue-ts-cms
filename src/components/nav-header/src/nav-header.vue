<!--
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-12-09 16:48:50
 * @LastEditors: went
 * @LastEditTime: 2021-12-10 15:38:35
-->
<template>
  <i
    class="fold-menu"
    :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
    @click="handleFoldClick"
  ></i>
</template>
<script lang='ts'>
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "nav-header",
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };
    return {
      isFold,
      handleFoldClick,
    };
  },
});
</script>
<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>