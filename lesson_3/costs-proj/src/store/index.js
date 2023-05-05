import { createStore } from "vuex";

export const localDB = {
  page1: [
    { id: 1, date: "20.03.2020", category: "Food", value: 169 },
    { id: 2, date: "21.03.2020", category: "Navigation", value: 50 },
    { id: 3, date: "22.03.2020", category: "Sport", value: 450 },
  ],
  page2: [
    { id: 4, date: "23.03.2020", category: "Entertaiment", value: 969 },
    { id: 5, date: "24.03.2020", category: "Education", value: 1500 },
    { id: 6, date: "25.03.2020", category: "Food", value: 200 },
  ],
  page3: [
    { id: 7, date: "20.03.2020", category: "Food", value: 169 },
    { id: 8, date: "21.03.2020", category: "Navigation", value: 50 },
    { id: 9, date: "22.03.2020", category: "Sport", value: 450 },
  ],
  page4: [
    { id: 10, date: "23.03.2020", category: "Entertaiment", value: 969 },
    { id: 11, date: "24.03.2020", category: "Education", value: 1500 },
    { id: 12, date: "25.03.2020", category: "Food", value: 200 },
  ],
};

const store = createStore({
  state: {
    paymentsList: [],
    paymentsListIDs: [],
    categoryList: [],
  },
  mutations: {
    setPaymentsListData(state, payload) {
      const newUniqIDsObjs = payload.filter((item) => {
        return state.paymentsListIDs.indexOf(item.id) < 0;
      });
      const uniqIDs = newUniqIDsObjs.map((obj) => obj.id);
      state.paymentsList.push(...newUniqIDsObjs);
      state.paymentsListIDs.push(...uniqIDs);
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
    fetchData({ commit }, page) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = localDB[`page${page}`];
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
