import { createStore } from "vuex";

const store = createStore({
  state: {
    paymentsList: [],
    categoryList: [],
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload;
    },
    addPaymentListData(state, payload) {
      state.paymentsList.push(payload);
    },
    setCategoryData(state, payload) {
      state.categoryList = payload;
    },
  },
  getters: {
    getPaymentsFullValuePrice: (state) => {
      return state.paymentsList.reduce((a, x) => a + +x.value, 0);
    },
    getPaymentsList: (state) => state.paymentsList,
    getCategoryList: (state) => state.categoryList,
  },
  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          for (let i = 1; i < 101; i++) {
            items.push({
              date: "20.12.2021",
              category: "education",
              value: 1,
              id: i,
            });
          }
          resolve(items);
        }, 1500);
      }).then((res) => commit("setPaymentsListData", res));
    },
    fetchCategory({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = ["Sport", "Internet", "Education", "Food", "Transport"];
          resolve(items);
        }, 1500);
      }).then((res) => commit("setCategoryData", res));
    },
  },
});

export default store;
