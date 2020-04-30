
// axios
import request from '@/utils/request'
//mob_doctor api

// 登录`/VAnpd8K632f23a69c2cab2e64d872906dddfe96a88e8810?uri=${params.uri}`, params
export function getMobileDoctor(params) {
  return request({
    // url: `VAnpd8K632f23a69c2cab2e64d872906dddfe96a88e8810?uri=${params.uri}`,
    url:params.uri,
    method: 'get',
    params:params
  })
}
// 用户信息 post 方法
export function getUserInfo(params) {
  return request({
    url: '/user/userinfo',
    method: 'post',
    data: qs.stringify(params),
    hideloading: true
  })
}

// 用户名称 get 方法
export function getUserName(params) {
  return request({
    url: '/user/name?' + qs.stringify(params),
    method: 'get',
    hideloading: true
  })
}
