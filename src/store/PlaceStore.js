import {url} from '../config';

const PlaceStore = {
  state: {
    places: [],
    status: 'pending' | 'idle',
    currentPlace: {},
  },
  mutations: {
    setPlaces(state, places) {
      state.places = places;
    },
    setStatus(state, status) {
      state.status = status;
    },
    setCurrentPlace(state, place) {
      state.place = place;
    },
  },
  actions: {
    fetchAll({commit}) {
      commit('setStatus', 'pending');
      fetch(`${url}/place`).then(response => response.json()).then(data => {
        commit('setPlaces', data);
        commit('setStatus', 'idle');
      });
    },
  },
  getters: {
    getPlacesByType: (state) => (placeType) => {
      return state.places.find(place => place.place_type === placeType);
    },
    isLoading: (state) => {
      return state.status === 'pending';
    },
  },
};

export default PlaceStore;