import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import placeList from './store/place-list'
import placeDetail from './store/place-detail'
import orderProcess from './store/order-process';
import session from './store/session';
import transaction from './store/transaction';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    placeList: placeList,
    placeDetail: placeDetail,
    orderProcess: orderProcess,
    session: session,
    transaction: transaction
  }
})
