import Vue from 'vue';
import Vuex from 'vuex';
import appData from './modules/appData';
import slideState from './modules/slideState';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    appData,
    slideState
  }
})
