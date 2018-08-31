// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 创建vue的对象
// 关联的id确定标签显示位置
// 定义使用路由规则
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
