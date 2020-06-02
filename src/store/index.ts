import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

interface State {
  countShop: StoreState.countShop,
  other: StoreState.other,
}

const state: State = {
  countShop: 0,
  other: {
    name: 'jake',
    age: 18
  }
}


export default new Vuex.Store({
  state: state,
  mutations: {
    'COUNTSHOP' (state, payload) {
      state.countShop += payload ? payload : 1
    }
  },
  actions: {
    [actions.addCount] ({state, commit}, payload: number) {
      commit('COUNTSHOP', payload)
    }
  },
  modules: {
  }
})
