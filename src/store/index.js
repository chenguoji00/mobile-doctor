import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import mob_doctor from './modules/mob_doctor'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    mob_doctor
  },
  getters
})

export default store
