<template>
  <div>
    <template v-for="(item, index, index1) in this.data">
      <!-- {{item.children}} -->
      <template v-if="isCanShowMenu(item)">
        <el-sub-menu
          v-if="
            item.children &&
            item.hasOwnProperty('children') &&
            item.meta.show == true
          "
          :key="index"
          :index="item.path"
        >
          <template #title>
            <el-icon><component :is="item.meta.icon" /></el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
          <myitem :data="item.children"></myitem>
        </el-sub-menu>
        <el-menu-item
          v-else-if="item.meta.show == true"
          :key="index1"
          :index="item.path"
        >
          <el-icon><component :is="item.meta.icon" /></el-icon>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script type="text/javascript">
import canShowMenu from "./canShowMenu.js";

export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  name: "myitem", //模板名称
  data() {
    return {};
  },
  components: {},
  methods: {
    //判断是否显示菜单，
    isCanShowMenu(item) {
      return canShowMenu(item);
    },
  },
};
</script>

<style >
</style>
