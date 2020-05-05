import Vue from 'vue'

import Vuex from 'vuex';

import home from './home';

Vue.use(Vuex);

let store = new Vuex.Store({
  modules:{
    home
  }
})

window.console.log('store:',store)

export default store;