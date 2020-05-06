const state = {
  patId: '',
  patient: {}
}
const mutations = {
  
  // SET_USER_NAME(state, name) {
  //   state.userName = name
  // },
  SET_PATIENT(state,patient) {
    state.patient = patient
  },
  SET_PAT_ID(state, patId) {
    state.patId = patId
  }
}
const actions = {
  // 设置name
  // setUserName({commit}, name) {
  //   commit('SET_USER_NAME', name)
  // }
}
export default {
  state,
  mutations,
  actions
}
