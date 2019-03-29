import {url} from '../config';

const productStore = {
  namespaced: true,
  state: {
    products: [],
    status: 'pending' | 'idle',
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
      fetch(`${url}/product?place=${id}`).
          then(response => response.json()).
          then(data => {
            commit('setProducts', data);
            commit('setStatus', 'idle');
          });
    },
  },
  getters: {
    isLoading: (state) => {
      return state.status === 'pending';
    },
  },
};

export default productStore;