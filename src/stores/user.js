import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    token: null,
    userId: null,
  }),

  getters: {
    getToken(state) {
      return state.token;
    },
    getUserId(state) {
      return state.userId;
    },
  },

  actions: {
    setToken(state, token) {
      state.token = token;
    },
    setUserId(state, userId) {
      state.userId = userId;
    },
    setTokenAndUserId({ commit }, { token, userId }) {
      commit("setToken", token);
      commit("setUserId", userId);
    },
  },
});
