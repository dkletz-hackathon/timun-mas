import Vue from 'vue'
import Vuex from 'vuex'
import place from './store/place';
import product from './store/product';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    place: place,
    product: product,
  }
})
