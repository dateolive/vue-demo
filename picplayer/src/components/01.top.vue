<template>
  <div class="top">
    <img src="../assets/01.top.jpg" alt="" />
    <input type="text" v-model="inputValue" @keyup.enter="toSearch" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputValue: ''
      }
    },
    methods: {
      toSearch() {
        // 如果为空 提示
        if (this.inputValue == '') {
          alert('请输入内容')
        } else {
          // 否则跳转
          // this.$router.push('/result')
          // 携带数据
          // this.$router.push("/result?q="+this.inputValue)
          // this.$router.push(`/result?q=${this.inputValue}`)
          this.$router.push(`/result?t=${this.inputValue}`)
        }
      }
    }
  }
</script>

<style>
  .top {
    /* 开启弹性布局 */
    display: flex;
    align-items: center;
    background-color: #f9f9f9;
  }
</style>
