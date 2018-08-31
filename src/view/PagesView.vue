<template>
  <div class="pages-view">
    <header-bar></header-bar>
    <router-view></router-view>
    <!-- 抽像路由要显示的视图位置 -->
    <!-- <talion-view v-show="talion" @closeTalion="closeTalions"></talion-view> -->
    <!--  @closeTalion="close" 链接子组件想要执行父组件的方法，@子组件广播的事件名称字段 -->

  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
export default {
  name: 'pages-view',
  components: { HeaderBar },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
