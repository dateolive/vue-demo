<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <!-- 循环生成了一堆的标签 -->
      <el-carousel-item v-for="item in 6" :key="item">
        <img class='lbt' src="../assets/lbt.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
    <img src="../assets/03.discovery.jpg" alt="" />
    <el-button @click="clickMe" type="success">成功按钮</el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      clickMe() {
        // alert('试试就试试')
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        })
      }
    }
  }
</script>

<style>
.lbt{
  width: 550px;
  height: 230px;
}
</style>
