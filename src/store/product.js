import {url} from '../config';

const product = {
  namespaced: true,
  state: {
    products: [],
    status: 'idle',
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setStatus(state, status) {
      state.status = status;
    },
  },
  actions: {
    fetchAll({commit, rootState}) {
      const {id} = rootState.place.currentPlace;
      commit('setStatus', 'pending');
      fetch(`${url}/product?place=${id}`, {mode: 'cors'}).
          then(response => response.json()).
          then(data => {
            commit('setProducts', data);
            commit('setStatus', 'done');
          }).catch(() => commit('setStatus', 'idle'));
    },
  },
  getters: {
    isLoading: (state) => {
      return state.status === 'pending';
    },
    hasLoad: (state) => {
      return state.status === 'done';
    },
  },
};

export default product;