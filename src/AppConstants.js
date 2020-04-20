/**
 * 应用常量
 */
export const API_TOKEN = 'api_token' // 接口API_TOKEN
export const CHANNEL = 'channel' // 渠道
export const SIGN_SECURITY_KEY = '58jijian' // 参数签名密钥
export const PARAM_SIGN_NAME = 'sign' // 答名参数名



/**
 * 微信支付
 */
//APPID
export const WXPAY_APPID = "wxbd2632ebcade4714";
// 商户号
export const WXPAY_MCH_ID = "1387689002";
// API密钥，在商户平台设置
export const WXPAY_APIKEY = "738974B214431E9E733B3E071B1CE77C";


//声网
export const AGORA_SDKAPPID = '386043dd6ec441c1b93e75d6d51b7e0f' //sdkAppID


// 分页全局常量
export const DEFAULT_PAGE_NO = '0'
export const DEFAULT_PAGE_SIZE = 20



// 服务器公共响应码
export const REQUEST_SUCCESS = 200 // 请求成功
export const REQUEST_API_TOKEN_INVALID = 2001 // token失效
export const REQUEST_LOGIN_FAILURE = 1006 // 登录失败，会话超时


// 性别
export const SEX_MAN = 1
export const SEX_WOMAN = 2
export const SEX = {}
SEX[SEX_MAN] = '男'
SEX[SEX_WOMAN] = '女'


// -------------存储在localStorage中的Key---------
export const CACHE_USER_INFO = 'CACHE_USER_INFO' // 用户信息
export const CACHE_API_TOKEN = 'CACHE_API_TOKEN' // API TOKEN





//订单类型
export const ORDER_TEXT = 1
export const ORDER_VOICE = 2
export const ORDER_VIDEO = 3
export const ORDER_PRESC = 4

export const ORDER_TYPE = {}
ORDER_TYPE[ORDER_TEXT] = '图文'
ORDER_TYPE[ORDER_VOICE] = '语音'
ORDER_TYPE[ORDER_VIDEO] = '视频'
ORDER_TYPE[ORDER_PRESC] = '处方'


//医生出诊状态
export const SCTYPE_OK = 1
export const SCTYPE_STOP = 2
export const SCTYPE = {}
SCTYPE[SCTYPE_OK] = '正常'
SCTYPE[SCTYPE_STOP] = '停诊'




