import {url} from '../config';

const transaction = {
  namespaced: true,
  state: {
    order: {},
    status: 'idle',
    orderStatus: '',
  },
  mutations: {
    setOrder(state, order) {
      state.order = order;
    },
    setStatus(state, status) {
      state.status = status;
    },
    setOrderStatus(state, status) {
      state.orderStatus = status;
    },
  },
  actions: {
    fetchOrder({commit, rootState}, {id}) {
      fetch(`${url}/order/${id}`, {
        mode: 'cors',
        headers: {
          'Authorization': `Bearer ${rootState.session.token}`,
          'Content-Type': 'application/json',
        },
      }).
          then(response => response.json()).
          then(data => {
            console.log('Order', data);
            commit('setOrder', data);
          }).catch(() => commit('setStatus', 'error'));
    },
    fetchStatus({commit, rootState}, {referral, orderId, callback}) {
      console.log('Trying');
      commit('setStatus', 'pending');
      fetch(`${url}/order/paid`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Authorization': `Bearer ${rootState.session.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_id: orderId,
          ref_code: referral,
        }),
      }).then(response => response.json()).then(data => {
        console.log(data);
        commit('setStatus', 'done');
        commit('setOrderStatus', data.state);
        callback(data.state);
      }).catch(() => commit('setStatus', 'done'));
    },
  },
  getters: {
    isLoading: (state) => {
      return state.status === 'pending';
    },
    isNotAuthorized: (state) => {
      return state.status === 'error';
    },
    paid: (state) => {
      return state.orderStatus === 'paid';
    }
  },
};

export default transaction;