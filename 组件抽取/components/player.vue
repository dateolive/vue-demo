<template>
  <!-- 主体区域 -->
  <section id="player">
    <!-- 输入框 -->
    <header class="header">
      <h1>
        <a href="http://www.itheima.com/">
          <img src="../assets/img/black.png" alt="" />
        </a>
        小黑播放器
      </h1>
      <input
        autofocus="autofocus"
        autocomplete="off"
        placeholder="请输入歌名"
        class="new-todo"
        v-model="inputValue"
        @keyup.enter="search"
      />
    </header>
    <!-- 列表区域 -->
    <section class="main">
      <ul class="music-list">
        <li class="music" v-for="(item,index) in results" :key="index">
          <div class="view">
            <span class="index">{{ index+1 }}</span>
            <label>{{ item.name }}</label>
            <button @click="play(item.id)" class="play"></button>
          </div>
        </li>
      </ul>
    </section>
    <!-- 统计和清空 -->
    <footer class="footer">
      <audio :src="url" autoplay controls></audio>
    </footer>
  </section>
</template>

<script>
  /*
    接口1:歌曲搜索
      地址:https://autumnfish.cn/search
      方法:get
      参数:keywords  搜索关键字

    接口2:获取歌曲播放地址
      地址:https://autumnfish.cn/song/url
      方法:get
      参数:id  歌曲id
  */
  import '../assets/css/player.css'
  /*导入axios*/
  import axios from 'axios'
  export default {
    data(){
      return {
        inputValue:"",
        results:[],
        url:""
      }
    },
    methods:{
      search(){
        axios({
          url:"https://autumnfish.cn/search",
          methods:"get",
          params:{
            keywords:this.inputValue
          }
        }).then(res=>{
          //console.log(res)
          this.results=res.data.result.songs
        })
      },
      play(id){
        axios({
          url:"https://autumnfish.cn/song/url",
          methods:"get",
          params:{
            id//id:id
          }
        }).then(res=>{
          //console.log(res)
          this.url=res.data.data[0].url;
        })
      }
    }
  }
</script>

<style></style>
