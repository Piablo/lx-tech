import Vue from 'vue';
import Vuex from 'vuex';
import appData  from './modules/appData';
import toolbarData from './modules/toolbarData';

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
    toolbarData
  }
})
