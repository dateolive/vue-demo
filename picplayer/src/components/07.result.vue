<template>
  <div>
    <!-- tab切换 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <!-- <img src="../assets/03.discovery.jpg" alt=""> -->
        <h2>页面1</h2>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <!-- <img src="../assets/04.playlists.jpg" alt=""> -->
        <h2>页面2</h2>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">
        <!-- <img src="../assets/05.songs.jpg" alt=""> -->
        <h2>页面3</h2>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">
        <!-- <img src="../assets/06.mvs.jpg" alt=""> -->
        <h2>页面4</h2>
      </el-tab-pane>
    </el-tabs>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
    ></el-pagination>
    <img src="../assets/07.result.jpg" alt="" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'second'
      }
    },
    // 生命周期钩子 created
    // 回调函数函数，添加之后自动执行
    // 内部可以通过this 访问到 vue实例
    created() {
      // console.log(this.$route)
      console.log(this.$route.query.t)
    }
  }
</script>

<style></style>
