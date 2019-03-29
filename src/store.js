import Vue from 'vue'
import Vuex from 'vuex'
import placeStore from './store/place-store'
import productStore from './store/product-store'

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
