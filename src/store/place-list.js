import {url} from '../config';

const placeList = {
  namespaced: true,
  state: {
    places: [],
    status: 'idle',
  },
  mutations: {
    setPlaces(state, places) {
      console.log('Get data', places);
      state.places = places;
    },
    setStatus(state, status) {
      console.log('Change status to', status);
      state.status = status;
    },
  },
  actions: {
    fetchAll({commit}) {
      commit('setStatus', 'pending');
      fetch(`${url}/place`, {mode: 'cors'}).then(response => response.json()).then(data => {
        commit('setPlaces', data);
        commit('setStatus', 'done');
      }).catch(() => commit('setStatus', 'idle'));
    },
  },
  getters: {
    getPlacesByType: (state) => (placeType) => {
      return state.places.find(place => place.place_type === placeType);
    },
    isLoading: (state) => {
      return state.status === 'pending';
    },
    hasLoad: (state) => {
      return state.status === 'done';
    }
  },
};

export default placeList;