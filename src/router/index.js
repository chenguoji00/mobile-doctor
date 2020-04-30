import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const router = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/home/index'), // 路由懒加载
    meta: {
      title: '首页', // 页面标题
      keepAlive: true // keep-alive 标识
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/home/about'),
    meta: {
      title: '关于我',
      keepAlive: true
    }
  },
  {
    path: '/medicaldetail',
    name: 'medicaldetail',
    component: () => import('@/views/mob/MedicalDetail'),
    meta: {
      title: '关于我',
      keepAlive: true
    }
  },
  {
    path: '/CheckReport',
    name: 'CheckReport',
    component: () => import('@/views/mob/CheckReport'),
    meta: {
      title: '',
      keepAlive: true
    }
  },
  {
    path: '/yingxiang',
    name: 'yingxiang',
    component: () => import('@/views/mob/yingxiang'),
    meta: {
      title: '',
      keepAlive: true
    }
  }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: '/app/',
    scrollBehavior: () => ({y: 0}),
    routes: router
  })

export default createRouter()
