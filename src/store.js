import Vue from 'vue'
import Vuex from 'vuex'
import { placeStore, productStore } from './store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    place: placeStore,
    product: productStore,
  }
})
