import Vue from 'vue'
import Vuex from 'vuex'
import { PlaceStore, ProductStore } from './store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    place: PlaceStore,
    product: ProductStore,
  }
})
