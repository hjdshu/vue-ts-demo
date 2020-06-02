import Vue from 'vue'
import Vuex from 'vuex'
import { actions, mutations } from './type'

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
    [mutations.addCountShop] (state, payload) {
      state.countShop += payload ? payload : 1
    }
  },
  actions: {
    [actions.addCountShop] ({state, commit}, payload: number) {
      commit(mutations.addCountShop, payload)
    }
  },
  modules: {
  }
})
