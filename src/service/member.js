import { requestGet, requestPost } from './index.js'



// 门诊电子处方
export function dzcf (params) {
  return requestGet(`/hyj-core/prescription/getPrescriptionApp/${params}`).then(res => res.data)
}



//问诊列表
export function getConsultList (params) {
  return requestGet(`/hyj-core/inquiry/list`,params).then(res => res.data)
}

//问诊详情
export function consulDetail (params) {
  return requestGet(`/hyj-core/inquiry/`+params.registerId, params).then(res => res.data)
}



//修改用户信息
export function upUserInfo (params) {
  return requestPost(`/platform-auth/user/update/tenant`, params).then(res => res.data)
}


//手机修改
export function phoneUpdate (params) {
  return requestPost(`/platform-auth/user/phone/update`, params).then(res => res.data)
}



// 门诊电子处方
export function userInfoByopenId (params) {
  return requestGet(`/platform-auth/user/userInfoByopenId`, params).then(res => res.data)
}



//获取看诊人列表
export function patientList (params) {
  return requestGet( `/hyj-core/patient/list/`+params.userId, params).then(res => res.data)
}


//新增看诊人
export function aadPatient (params) {
  return requestPost(`/hyj-core/patient/add`, params).then(res => res.data)
}

//删除看诊人
export function delPatient (params) {
  return requestPost(`/hyj-core/patient/delete`, params).then(res => res.data)
}

//修改看诊人
export function updatePatient (params) {
  return requestPost(`/hyj-core/patient/update`, params).then(res => res.data)
}

//患者新增主诉
export function aadComplaint (params) {
  return requestPost(`/hyj-core/patient/complaint/add`, params).then(res => res.data)
}



//文件上传接口
export function fileUpload (params) {
  return requestPost(`/platform-oss/file/upload`, params).then(res => res.data)
}





//主诉详细
export function complaintDetail (orderId) {
  return requestGet( `/hyj-core/patient/complaint/get/${orderId}`).then(res => res.data)
}


//处方列表
export function getMyRecipelList (param) {
  return requestGet( `/hyj-core/medorder/getMyRecipel/${param.userId}`,param).then(res => res.data)
}

//离线消息通知医生
export function msgDoctor (params) {
  return requestPost(`/platform-msg/tx/call/doctor`, params).then(res => res.data)
}
