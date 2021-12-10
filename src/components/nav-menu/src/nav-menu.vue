<template>
  <div class="nav-menu">
    <div class="logo">
      <img
        class="img"
        src="~@/assets/img/logo.svg"
        alt="logo"
      />
      <span
        v-if="!collapse"
        class="title"
      >Vue3+TS</span>
    </div>
    <el-menu
      class="el-menu-vertical"
      :unique-opened="true"
      background-color="#0c2135"
      text-color="#b7bdc3"
      :collapse="collapse"
      active-text-color="#0a60bd"
    >
      <div
        v-for="item in userMenus"
        :key="item.id"
      >
        <!-- 有子菜单 -->
        <template v-if="item.type===1">
          <!-- 菜单显示项 -->
          <el-submenu :index="item.id+''">
            <template #title>
              <i
                v-if="item.icon"
                :class="item.icon"
              ></i>
              <span v-if="!collapse">{{item.name}}</span>
            </template>
            <!-- 二级菜单 -->
            <div
              v-for="subTtem in item.children"
              :key="subTtem.id"
            >
              <el-menu-item :index="subTtem.id+''">
                <i
                  v-if="subTtem.icon"
                  :class="subTtem.icon"
                ></i>
                <span>{{subTtem.name}}</span>
              </el-menu-item>
            </div>
          </el-submenu>

        </template>
        <!-- 无子菜单 -->
        <template v-else>
          <el-menu-item
            :key="item.id"
            :index="item.id+''"
          >
            <i
              v-if="item.icon"
              :class="item.icon"
            ></i>
            <span v-if="!collapse">{{item.name}}</span>
          </el-menu-item>
        </template>
      </div>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "@/store";
import { useRouter, useRoute } from "vue-router";
import { IRootState } from "@/store/type";
// vuex - typescript  => pinia

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const store = useStore(); //vuex对ts支持不好：对于子模块的类型推导不方便
    const userMenus = computed(() => store.state.login.userMenus);
    return {
      userMenus,
    };
  },
});
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
