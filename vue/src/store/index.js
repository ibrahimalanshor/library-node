import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

import book from './book'
import rack from './rack'

import state from './state'

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    book,
    rack
  },
  state
})