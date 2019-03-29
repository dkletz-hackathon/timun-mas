import {url} from '../config';

const placeDetail = {
  namespaced: true,
  state: {
    products: [],
    statusPlace: 'idle',
    statusProducts: 'idle',
    currentPlace: {
      id: '',
      name: '',
      address: '',
      phone_num: '',
      image_url: '',
      description: '',
      geo_x: '',
      geo_y: '',
      category: ''
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setPlaceStatus(state, status) {
      state.statusPlace = status;
    },
    setProductsStatus(state, status) {
      state.statusProducts = status;
    },
    setCurrentPlace(state, place) {
      state.currentPlace = place;
    }
  },
  actions: {
    fetchAll({commit, rootState}, { id }) {
      commit('setProductsStatus', 'pending');
      fetch(`${url}/product?place=${id}`, {mode: 'cors'}).
          then(response => response.json()).
          then(data => {
            commit('setProducts', data);
            commit('setProductsStatus', 'done');
          }).catch(() => commit('setProductsStatus', 'idle'));
    },
    fetchPlace({commit}, { id }) {
      commit('setPlaceStatus', 'pending');
      console.log('Fetching place');
      fetch(`${url}/place/${id}`, {mode: 'cors'}).then(response => response.json()).then(data => {
        commit('setCurrentPlace', data);
        commit('setPlaceStatus', 'done');
      }).catch(() => commit('setPlaceStatus', 'idle'));
    }
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

export default placeDetail;