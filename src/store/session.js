const session = {
  namespaced: true,
  state: {
    user: {
      id: -1,
    },
    token: "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTUzODYxODEzfQ.7zrWwS6TA68bHeuJ-gD-ylBOtiVygQ0Z_Jt9UBaGGIwKCo8plTlEKL1cQxtSqTJn"
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {

  },
  getters: {

  }
};

export default session;