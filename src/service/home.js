import { requestGet, requestPost } from './index.js'




export function bannerList (params) {
    return requestGet('/hyj-core/hospital/banner/list' , params).then(res => res.data)
}


export function findDeptlist () {
    return requestGet('/platform-auth/dept/findDeptlist').then(res => res.data)
}


export function getNoticeBar () {
    return requestGet('/hyj-core/noticeBar').then(res => res.data)
}


export function upVisits () {
    return requestPost('/hyj-core/statis/visits').then(res => res.data)
}


