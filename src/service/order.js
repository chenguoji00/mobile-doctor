import { requestGet, requestPost } from './index.js'




//订单预览
export function previewOrder (params) {
  return requestPost(`/hyj-core/order/preview`, params).then(res => res.data)
}

//订单支付
export function payOrder (params) {
  return requestPost(`/hyj-core/order/pay/${params.orderId}/${params.payOpenId}`).then(res => res.data)
}

//创建订单
export function addOrder (params) {
  return requestPost(`/hyj-core/order/add`, params).then(res => res.data)
}

//创建免费订单
export function addFreeOrder (params) {
  return requestPost(`/hyj-core/order/free/add`, params).then(res => res.data)
}


//订单详情
export function orderDetail (params) {
  return requestGet(`/hyj-core/order/`+params.orderId, params).then(res => res.data)
}

//订单列表
export function orderList (params) {
  return requestGet(`/hyj-core/order/list/`+params.userId, params).then(res => res.data)
}


//创建微信公众号支付
export function gzhPay (params) {
  return requestPost(`/hyj-core/order/pay/${params.orderId}/${params.code}`).then(res => res.data)
}



//获取取药方式
export function getExpressTypes () {
  return requestGet(`/hyj-core/express/types`).then(res => res.data)
}



//取消订单
export function cancelOrder (orderId) {
  return requestPost(`/hyj-core/order/cancel/${orderId}`).then(res => res.data)
}


//订单退款申请
export function OrderRefundPay (params) {
  return requestPost(`/hyj-core/order/refundPay/apply`,params).then(res => res.data)
}

//取消退款申请
export function cancelRefundPay (orderId) {
  return requestPost(`/hyj-core/order/refundPay/cancel/${orderId}`).then(res => res.data)
}

//退款申请详情
export function refundPayDetail (orderId) {
  return requestGet(`/hyj-core/order/refundPay/get/${orderId}`).then(res => res.data)
}

