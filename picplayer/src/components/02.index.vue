<template>
  <div class="index">
    <!-- 左侧导航 -->
    <div class="nav">
      <ul>
        <li>
          <router-link to="/discovery">发现音乐</router-link>
        </li>
        <li>
          <router-link to="/playlists">推荐歌单</router-link>
        </li>
        <li>
          <router-link to="/songs">最新音乐</router-link>
        </li>
        <li>
          <router-link to="/mvs">最新MV</router-link>
        </li>
      </ul>
    </div>
    <!-- 右侧的容器 -->
    <div class="main">
      <!-- <discovery></discovery> -->
      <!-- 路由的出口 地址命中之后，把组件显示的位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  // 导入 发现音乐组件
  // import discovery from './03.discovery.vue'
  export default {
    // components:{
    //    discovery // discovery:discovery
    // }
  }
</script>

<style>
  .index {
    display: flex;
    height: 830px;
  }
  .index .nav {
    width: 200px;
    background-color: #ededed;
  }
  .index .nav li {
    text-align: center;
    margin: 10px;
  }
  .main {
    background-color: orange;
    /* 使用剩余的尺寸 */
    flex: 1;
  }
  /* 点击高亮的效果 */
  a.router-link-active {
    color: white;
    background-color: orange;
  }
</style>
