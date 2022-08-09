<template>
  <div>
    <!-- 第三章公共页面组件 -->
    这是第三章第一节页面
    <h3>这是{{this.$route.matched[0].children}}的页面</h3>
  </div>
</template>

<script type="text/javascript">

export default {
  data() {
    return {

    }
  },
  components: {
 
  }
}
</script>

<style  >
</style>
