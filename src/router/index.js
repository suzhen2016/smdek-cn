import Vue from 'vue'
import Router from 'vue-router'
import PagesView from '../view/PagesView'
import HomeView from '../view/HomeView'
import CardEcoView from '../view/CardEcoView'
import PartnerView from '../view/PartnerView'

Vue.use(Router)
// 使用vue的路由定义；

export default new Router({
  // 输出路由
  routes: [
    {
      path: '/',
      redirect: '/page/'
      // component: HelloWorld
    },
    {
      path: '/page',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/page/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'card',
          name: 'CardEcoView',
          component: CardEcoView
        },
        {
          path: 'partner',
          name: 'PartnerView',
          component: PartnerView
        }
      ]
    },
    // {
    //   path: '/login',
    //   name: 'LoginView',
    //   component: LoginView
    // },
    // {
    //   path: '/register',
    //   name: 'RegisterView',
    //   component: RegisterView
    // },
    {
      path: '*',
      redirect: '/index/'
    }
  ]
})
