import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  currentFiat: 'USD',
  fiats: {USD: 1},
  cryptos: []
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
