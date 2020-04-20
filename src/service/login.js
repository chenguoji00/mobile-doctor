import { requestGet, requestPost } from './index.js'


//获取验证码
export function sendSms (params) {
  return requestPost(`/platform-msg/tx/phoneCode/${params.phone}`).then(res => res.data)
}


//根据openId登录或注册
export function getTokenByOpenId (params) {
  return requestPost(`/platform-auth/auth/getTokenByOpenId`, params).then(res => res.data)
}


//获取七牛token
export function getQINIUToken () {
  return requestGet(`/platform-oss/qiniu/token`).then(res => res.data)
}