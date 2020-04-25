import { requestGet, requestPost } from './index.js'
import axios from './index.js'


//获取收藏的医生列表
export function dtcollectionList (params) {
  return requestGet(`/hyj-core/patient/doctor/collect/list/`+params.userId, params).then(res => res.data)
}


//删除收藏的医生列表
export function deleteCollectDoctor (params) {
  return requestPost(`/hyj-core/patient/doctor/collect/delete`, params).then(res => res.data)
}


//查医生收藏状态
export function queryCollectStatus (params) {
  return requestGet(`/hyj-core/doctor/isCollection`, params).then(res => res.data)
}



//设置收藏该医生
export function setDoctorCollect (params) {
  return requestPost(`/hyj-core/doctor/collection`, params).then(res => res.data)
}


//科室下的医生列表
export function deptDoctorList (params) {
  return requestGet(`/hyj-core/doctor/list`, params).then(res => res.data)
}

//推荐的医生列表
export function recDoctorList () {
  return requestGet(`/hyj-core/doctor/recommended`).then(res => res.data)
}

//搜索信息
export function searchDoctors (params) {
  return requestGet(`/hyj-core/doctor/searchDoctors`,params).then(res => res.data)
}



//获取医生详细信息
export function doctorDetail (params) {
  return requestGet(`/hyj-core/doctor/detail/`+params.doctorId, params).then(res => res.data)
}

//获取科室列表
export function deptList (params) {
  return requestGet(`/hyj-core/hospital/dept/list`, params).then(res => res.data)
}


//获取医生排班出诊信息
export function schedules (params) {
  return requestGet(`/hyj-core/doctor/schedule/`+params.doctorId, params).then(res => res.data)
}



//保存评价
export function saveEvaluate (params) {
  return requestPost(`/hyj-core/evaluate/add`, params).then(res => res.data)
}

//获取医生的评价列表
export function evaluateList (params) {
  return requestGet(`/hyj-core/evaluate/page`, params).then(res => res.data)
}


//评价详情
export function getEvaluate (registerId) {
  return requestGet(`/hyj-core/evaluate/get/${registerId}`).then(res => res.data)
}

//获取医生排班出诊信息
export function getMobileDoctor (params) {
  // return requestGet(`/VAnpd8K632f23a69c2cab2e64d872906dddfe96a88e8810${params.uri}`, params).then(res => res.data)
  return requestGet(params.uri, params).then(res => res.data)
}

// //获取随机码
// export function getMobileDoctor (url,params) {
//   console.log(params)
//   return axios({
//     url: `/VAnpd8K632f23a69c2cab2e64d872906dddfe96a88e8810?uri=${url.uri}`,
//     method: 'get',
//     params: params
//   }).then(res =>res.data)
//   return requestPost(`/platform-auth/auth/getTokenByPhonePasswdCaptcha`,params).then(res => res.data)
//   return axios.get(url, {
//     params: params
//   }).then()
// }