<template>
  <div class="common-layout">
    <el-container>
      <el-header id="header" height="70px">
        <div class="header_left">
          <el-icon :size="40" style="margin-top: 15px"><Apple /></el-icon>
          <h3>Vue-Router技术栈</h3>
        </div>
        <div class="header_nav">
          <!-- 头部导航栏内容区域 -->
          <HeaderMenu />
        </div>
        <div class="header_right">
          <el-dropdown class="header_right_dropdowm" trigger="click">
            <span class="el-dropdown-link">
              <span style="height: 100%; display: inline-block; line-height: 1">
                admin
              </span>
              <el-icon class="el-icon--right" :size="30">
                <BellFilled />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <!-- 主页中间内容区域 -->
        <!-- <HomeView></HomeView> -->
        <router-view></router-view>
      </el-main>
      <el-footer>
        <!--底部区域  -->
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import HeaderMenu from "@/components/menus/HeaderMenu.vue";
import HomeView from "./HomeView.vue";
import canShowMenu from "../components/menus/canShowMenu.js"


export default {
  components: {
    HeaderMenu,
    HomeView,
  },
  // watch: {
  //   $route: "routeChange",
  // },
  methods: {
    // routeChange(route) {
    //   if (route.matched.length == 0) {
    //     return;
    //   }

    //   //自动重定向到第一个侧边栏可见子集路由
    //   let matchedChild = route.matched[route.matched.length - 1].children;
    //   for (let i = 0; i < matchedChild.length; i++) {
    //     const ele = matchedChild[i];
    //     if (canShowMenu(ele)) {
    //       if (route.path == "/") {
    //         this.$router.replace(ele.path);
    //       } else {
    //         this.$router.replace(ele.path);
    //       }
    //       return;
    //     }
    //   }
    //   // },
    // },
    mounted() {
      // console.log(this.$route);
      // this.routeChange(this.$route);
    },
  },
};
</script>
<style>
html,
body {
  margin: 0px;
  height: 100%;
  width: 100%;
}

#app {
  width: 100%;
  height: 100%;
}
</style>

<style  scoped>
.common-layout {
  height: 100%;
}

.el-container {
  height: 100%;
}

#header {
  width: 100%;
  background: linear-gradient(156deg, #4fd3b1 0%, #42aced 100%);
  display: flex;
  justify-content: space-between;
  padding: 0px;
}

.header_left {
  width: 230px;
  font-size: 18px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
}

.header_nav {
  width: calc(100% - 400px);
}

.header_right {
  position: relative;
  width: 170px;
  height: 100%;
}

/* 个人中心样式 */

.header_right_dropdowm {
  width: 170px;
  height: 70px;
}

.el-dropdown-link {
  width: 130px;
  height: 20px;
  cursor: pointer;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  line-height: 20px;
}
</style>
