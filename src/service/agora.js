import { requestGet, requestPost } from './index.js'




//C2C聊消息列表
export function c2cMsgList (params) {
  return requestGet('/platform-im/rtm/c2c/msg/list' , params).then(res => res.data)
}



//C2C聊消息发送
export function c2cMsgSend (params) {
  return requestPost('/platform-im/rtm/c2c/msg/send' , params).then(res => res.data)
}



//消息未读数查询
export function unReadNum (params) {
  return requestGet('/platform-im/rtm/msg/unRead' , params).then(res => res.data)
}


//消息未读数更新
export function unReadUpdate (params) {
  return requestPost('/platform-im/rtm/msg/unRead/update' , params).then(res => res.data)
}


//图片上传
export function uploadImg (params) {
  return requestPost('/platform-oss/file/upload' , params).then(res => res.data)
}

