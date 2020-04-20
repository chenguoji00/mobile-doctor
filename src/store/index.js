import Vue from 'vue';
import Vuex from 'vuex';
import * as types from 'store/mutation-types'
// import storage from 'utils/storage'
// import * as constants from 'src/AppConstants'
import persistedState from 'vuex-persistedstate' //state持久化
Vue.use(Vuex);
 const state={   //要设置的全局访问的state对象
     userInfo: {},
     api_token: '',
     timNetWorkStatus:'',
     contacts:[],
     chatWith:{},
     netloading:false
   };


const getters = {   //实时监听state值的变化(最新状态)
    // isShow(state) {  //承载变化的showFooter的值
    //     return state.showFooter
    //  },
    api_token(state){
        return state.api_token;
    },
};



const mutations = {
    // show(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    //     state.showFooter = true;
    // },
    //更新正在加载动画状态
    [types.UPDATE_NETLOADING](state,data){
        state.netloading = data
    },

    //更新用户Token
    [types.UPDATE_API_TOKEN](state,apiToken){
        state.api_token = apiToken || ''
    },

    //更新用户信息
    [types.UPDATE_USER_INFO](state,data){
        state.userInfo = data || {}
    },

    //更新TIM网络
    [types.UPDATE_TIM_NETWORK_STATUS](state,data){
        state.timNetWorkStatus = data;
    },

    //更新TIM联系人列表
    [types.UPDATE_TIM_CONCACT_LIST](state,data){
        state.contacts = data;
    },

    //更新TIM当前聊天对象
    [types.UPDATE_TIM_CHAT_WITH](state,data){
        state.chatWith = data;
    },

};
 const actions = {
    // hideFooter(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    //     context.commit('hide');
    // },
    
};
  const store = new Vuex.Store({
       state,
       getters,
       mutations,
       actions,
       plugins: [persistedState ()]

});
export default store;


//如何使用
// this.$store.commit('show')               调用mutations 同步
// this.$store.dispatch('hideFooter')       调用actions   异步
