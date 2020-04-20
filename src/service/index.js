import axios from 'axios'
import store from 'store'
import router from '../router'
import * as types from 'store/mutation-types'
import { Toast } from 'mand-mobile'

axios.defaults.baseURL = process.env.BASE_API
axios.defaults.withCredentials = false;
axios.defaults.timeout = process.env.NODE_ENV !== 'production' ? 1000 * 60 * 10 : 1000 * 60
axios.defaults.headers.post['Content-Type'] = 'application/json'
// if (store.state.userInfo) {
//   axios.defaults.headers.common['Authorization'] = store.state.userInfo.token
// } else {
//   router.push("/login");
// }



// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  store.commit(types.UPDATE_NETLOADING, true)
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (res) {
  store.commit(types.UPDATE_NETLOADING, false)
  const status = res.data.code || 200
  const message = res.data.msg || '未知错误';
  if (status != 200) {
    Toast({duration:5000,content:message});
    return Promise.reject(new Error(message))
  }
  return res;
}, function (error) {
  store.commit(types.UPDATE_NETLOADING, false)
  return Promise.reject(new Error(error));
})

export default axios

// get
export function requestGet(url, params = {}) {
  return axios.get(url, {
    params: params
  }).then()
}

// post
export function requestPost(url, params = {}) {
  return axios.post(url, params, {
    emulateJson: true
  }).then()
}
