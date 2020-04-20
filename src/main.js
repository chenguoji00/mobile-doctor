require('@/utils/flexible.js')
import Vue from 'vue'

import common_mixins from '@/utils/common_mixins'
Vue.mixin(common_mixins)
import VueBus from 'vue-bus'
Vue.use(VueBus);



// import  FastClick  from  'fastclick'
// FastClick.attach(document.body);


import 'mand-mobile/lib/mand-mobile.css'
import mandMobile from 'mand-mobile'
Vue.use(mandMobile)

import Cube from 'cube-ui'
Vue.use(Cube)


import "@/assets/css/theme.scss";
import "@/assets/iconfont/iconfont.css";

import 'normalize.css'
import "animate.css";





import router from './router'
import store from 'store'
import App from './App'

import VueSticky from "vue-sticky";


Vue.directive('sticky',VueSticky);

//全局注册自定义指令，用于判断当前图片是否能够加载成功，可以加载成功则赋值为img的src属性，否则使用默认图片
Vue.directive('real-img', async function (el, binding) {//指令名称为：real-img
  let imgURL = binding.value;//获取图片地址
  if (imgURL) {
      let exist = await imageIsExist(imgURL);
      if (exist) {
          el.setAttribute('src', imgURL);
      } 
  }
})

/**
* 检测图片是否存在
* @param url
*/
let imageIsExist = function(url) {

  return new Promise((resolve) => {
      var img = new Image();
      img.onload = function () {
          if (this.complete == true){
              resolve(true);
              img = null;
          }
      }
      img.onerror = function () {
          resolve(false);
          img = null;
      }
      img.src = url;
  })
}



import Navigation from 'vue-navigation'
Vue.use(Navigation, {router, store})


Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

