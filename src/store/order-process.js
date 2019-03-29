import { url } from '../config';

const orderProcess = {
  namespaced: true,
  state: {
    order: {
      start_date: "",
      duration: -1,
      total: -1,
      product_id: -1,
      phone_num: "",
    },
    status: 'idle',
  },
  mutations: {
    setStartDate(state, startDate) {
      state.order.start_date = startDate;
    },
    setDuration(state, duration) {
      state.order.duration = duration;
    },
    setTotal(state, total) {
      state.order.total = total;
    },
    setProductId(state, id) {
      state.order.product_id = id;
    },
    setPhoneNumber(state, phoneNumber) {
      state.order.phone_num = phoneNumber;
    },
    setStatus(state, status) {
      state.status = status;
    }
  },
  actions: {
    submit({ commit, rootStore }) {
      commit('setStatus', 'pending');
      console.log('Sending', state.order);
      fetch(`${url}/order`, {method: 'POST', mode: 'cors'}).
          then(response => response.json()).
          then(data => {
            commit('setStatus', 'done');
          }).catch(() => commit('setStatus', 'done'));
    }
  },
  getters: {
    isLoading: (state) => {
      return state.status === 'pending';
    },
  },
};

export default orderProcess;