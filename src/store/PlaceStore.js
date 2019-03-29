import { url } from '../config';

const PlaceStore = {
  state: {
    places: [],
  },
  mutations: {
    setPlaces(state, places) {
      state.places = places;
    }
  },
  actions: {
    fetchAll({ commit }) {
      fetch(`${url}/place`)
          .then(response => response.json())
          .then(data => commit('setPlaces', data))
    }
  },
  getters: {
    getPlacesByType: (state) => (placeType) => {
      return state.places.find(place => place.place_type === placeType);
    }
  }
};

export default PlaceStore;