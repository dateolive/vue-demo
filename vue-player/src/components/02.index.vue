<template>
  <div class="index">
      <!--左侧导航-->
      <div class="nav">
          <ul>
              <li>发现音乐</li>
              <li>推荐歌单</li>
              <li>最新音乐</li>
              <li>最新MV</li>
          </ul>
      </div>
      <!--右侧的容器-->
      <div class="main">
          <discovery></discovery>
      </div>
  </div>
</template>

<script>
//导入 发现音乐组件
import discovery from './03.discovery.vue'
export default {
    components:{
        discovery
    }

}
</script>

<style>
.index{
    display: flex;
    height: 830px;
}
.index .nav{
    width: 200px;
    background-color: #ededed;
}
.index .nav li{
    text-align: center;
    margin: 10px;
}
.main{
    background-color: orange;
    /*使用剩余的尺寸*/
    flex: 1;
}
</style>