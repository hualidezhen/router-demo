<template>
  <!-- 头部导航菜单组件 -->
  <div>
    <div class="headermenu">
      <div
        class="headermenudiv1"
        v-for="(item, index) in this.$route.matched[0].children"
        :key="index"
      >
        <template v-if="isCanShowMenu(item)">
          <div v-if="item.meta.show == true">
            <router-link :to="item.path">
              <a href="">{{ item.meta.title }}</a>
            </router-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import canShowMenu from "./canShowMenu.js";

export default {
  data() {
    return {};
  },
  components: {},
  watch: {
    $route: "routeChange",
  },
  methods: {
    //判断是否显示菜单，
    isCanShowMenu(item) {
      return canShowMenu(item);
    },
    routeChange(route) {
      if (route.matched.length == 0) {
        return;
      }

      //自动重定向到第一个侧边栏可见子集路由
      let matchedChild = route.matched[route.matched.length - 1];
      for (let i = 0; i < matchedChild.length; i++) {
        const ele = matchedChild[i];
        if (canShowMenu(ele)) {
          if (route.path == "/") {
            this.$router.replace(ele.path);
          } else {
            this.$router.replace(ele.path);
          }
          return;
        }
            this.$router.replace(ele.path);

      }
    },
  },
  mounted() {
    // console.log(this.$route);
    this.routeChange(this.$route);
  },
};
</script>

<style>
.headermenu {
  font-size: 18px;
  color: #fff;
  display: flex;
  justify-content: right;
}

.headermenudiv1 div {
  width: 100px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 14px;
}

.headermenu div:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.headermenu div:active {
  background-color: rgba(0, 0, 0, 0.2);
}

.headermenu a {
  width: 80px;
  color: #fff;
  text-decoration: none;
  text-align: center;
}
</style>
