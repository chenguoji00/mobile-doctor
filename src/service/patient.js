import { requestGet, requestPost } from './index.js'


// 获取看诊列表
export function getConsultList(params) {
  return requestGet(api+ `/hyj-core/patient/list/`+params.userId, params).then(res => res.data)
}




