<template>
  <div :class="['side_navigation', isCollapse ? 'off' : 'show']">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      @click="handleClick"
      :router="true"
      :unique-opened="true"
      :menu-trigger="click"
    >
      <!-- 递归动态菜单 -->
      <!-- {{store.messagename}} -->
      <!-- <myitem :data="this.$route.matched[0].children[0].children"></myitem> -->
      <myitem :data="sidebarRoutes"></myitem>

      <!-- 伸缩按钮 -->
      <el-menu-item>
        <div id="side_collapse_mask" @click.stop="OnCollapseClick($event)">
          <div v-show="!isCollapse" class="line_collapse"></div>
          <i
            :class="['fa', isCollapse ? 'fa-angle-right' : 'fa-angle-left']"
          ></i>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import myitem from "./myitem.vue";

export default {
  data() {
    return {
      isCollapse: false,
      // hasCollapse: true, //是否具有折叠功能
      //   Routes:[]//路由参数数组
      sidebarRoutes:[],//导航子路由数据
    };
  },
  comments: {
    //侧边路由规则
    sidebarRoutes() {
      console.log(this.$route.matched[1].children);
      return this.$route.matched.length > 1
        ? this.$route.matched[1].children
        : [];
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //伸缩按钮点集时触发事件
    OnCollapseClick(e) {
      // 设置左侧导航菜单是否折叠
      this.isCollapse = !this.isCollapse;
    },
    handleSelect(index, indexPath, item, routeResult) {
      console.log(index, indexPath, item, routeResult);
      this.$router.push(index);
    },
    handleClick(event) {
      console.log(event);
    },
  },
  components: {
    myitem,
  },
  mounted() {
    this.sidebarRoutes = this.$route.matched[1].children

  },
};
</script>

<style>

/* 伸缩控制 */
#side_collapse_mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#side_collapse_mask i {
  position: absolute;
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 18px;
  line-height: 18px;
  text-align: center;
  background-color: white;
  border: #c4c4c4 solid 1px;
  color: #c4c4c4;
  font-size: 14px;
}

#side_collapse_mask:hover i {
  background-color: #ecf5ff;
}

#side_collapse_mask div {
  position: relative;
  width: calc(100% - 16px);
  height: 1px;
  background-color: #e6e6e6;
}

.side_navigation {
  height: 100%;
  border-right: 1px solid #c4c4c4;
}

.el-menu {
  border-width: 0px;
}

.off {
  width: 65px;
}

.show {
  width: 201px;
}

.el-aside {
  width: auto;
}
</style>