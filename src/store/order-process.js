import { url } from '../config';

const orderProcess = {
  namespaced: true,
  state: {
    product: {},
    order: {
      start_date: "",
      duration: 1,
      total: 1,
      product_id: -1,
      phone_num: "",
      user_id: -1,
      time: "",
    },
    orderId: -1,
    status: 'idle',
  },
  mutations: {
    setProduct(state, product) {
      state.product = product;
    },
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
    },
    setTime(state, time) {
      state.time = time;
    },
    setOrderId(state, id) {
      state.orderId = id;
    }
  },
  actions: {
    fetchProduct({ commit, rootStore }, { id }) {
      fetch(`${url}/product/${id}`, {mode: 'cors'}).
        then(response => response.json()).
        then(data => {
          console.log(data);
          commit('setProduct', data);
        })
    },
    submit({ commit, rootState, state }, { time, callback }) {
      commit('setStatus', 'pending');
      console.log('Sending', {
        ...state.order,
        start_date: `${state.order.start_date} ${time}+07`
      });
      console.log('Authorization', rootState.session);
      fetch(`${url}/order`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Authorization': `Bearer ${rootState.session.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...state.order,
          start_date: `${state.order.start_date} ${time}+07`
        })
      }).
          then(response => response.json()).
          then(data => {
            console.log(data);
            commit('setStatus', 'done');
            commit('setOrderId', data.id);
            callback(data.id);
          }).catch(() => commit('setStatus', 'done'));
    },
  },
  getters: {
    isLoading: (state) => {
      return state.status === 'pending';
    },
    order: (state) => {
      return state.order;
    }
  },
};

export default orderProcess;