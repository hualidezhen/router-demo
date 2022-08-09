<template>
    <!-- 侧边导航栏区域 -->
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <SidebarMenu></SidebarMenu>
      </el-aside>
      <el-main>
        <!-- home的子路由嵌套页面 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>

</template>
<script >
import SidebarMenu from "@/components/menus/SidebarMenu.vue";

export default {
  props: {},
  methods: {},
  components: {
    SidebarMenu,
  },
};
</script>
<style  scoped>
</style>