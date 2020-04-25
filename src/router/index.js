import Vue from 'vue'
import Router from 'vue-router'
import store from 'store'

const Home = () => import('@/components/pages/home')
const DiagnoseReport = () => import('@/components/pages/diagnosereport/DiagnoseReport')
const CheckReport = () => import('@/components/pages/checkreport/CheckReport')


Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}


let router = new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/diagnosereport',
    name: 'diagnosereport',
    component: DiagnoseReport,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/checkreport',
    name: 'checkreport',
    component: CheckReport,
    meta: {
      keepAlive: true
    }
  },
  ]
})




router.beforeEach((to, from, next) => {
  // if (to.meta && Object.keys(to.meta).length > 0 && to.meta.requireAuth) { // 判断该路由是否需要登录权限
  //   if (store.getters.api_token != '') { // 通过vuex state获取当前的token是否存在
  //     next();
  //   } else {
  //     next({
  //       path: '/wxRegister',
  //       query: {
  //         isShoweBing: true,
  //         redirect: to.fullPath
  //       } // 将跳转的路由path作为参数，登录成功后跳转到该路由
  //     })
  //   }
  // } else {
    next();
  // }
})


export default router
