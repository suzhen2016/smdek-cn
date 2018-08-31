<template>
  <div id="app">

    <span>{{title}}</span>
    <router-view/>
    <!-- 显示路由传进来的模板显示信息 -->
  </div>
</template>

<script>
// 标注模板信息
export default {
  name: 'Senod',
  data () {
    return {
      title: '第二个模板'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
