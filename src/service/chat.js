import { requestGet, requestPost } from './index.js'



//获取问诊医生列表
export function seeDoctorList (params) {
    return requestGet('/hyj-core/inquiry/seeDoctor/list/'+params.userId , params).then(res => res.data)
}

//删除问诊医生
export function deleteSeeDoctor (params) {
    return requestPost('/hyj-core/inquiry/seeDoctor/delete' , params).then(res => res.data)
}


//更新消息阅读数
export function updateReadNum (params) {
    return requestPost('/platform-im/rtm/msg/unRead/update' , params).then(res => res.data)
}



//查询消息阅读数
export function queryReadNum (params) {
    return requestGet('/platform-im/rtm/msg/unRead' , params).then(res => res.data)
}
