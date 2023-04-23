<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="wrapper">
      <header class="header">
        <div class="title">My personal costs</div>
      </header>
      <main>
        <button @click="show = !show">add payment</button>
        <add-payment-form v-if="show" />
        <payments-display :items="currentElements" />
        <div class="total" v-if="fullPrice">Total cost: {{ fullPrice }}</div>
        <pagination-list
          :cur="page"
          :n="n"
          :length="paymentsList.length"
          @paginate="changePage"
        />
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaginationList from "./components/PaginationList.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    PaginationList,
  },
  data() {
    return {
      show: false,
      page: 1,
      n: 10,
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData"]),
    ...mapActions(["fetchData"]),
    changePage(p) {
      this.page = p;
    },
    // fetchData() {
    //   return [
    //     {
    //       date: "28.03.2020",
    //       category: "Food",
    //       value: 169,
    //     },
    //     {
    //       date: "24.03.2020",
    //       category: "Transport",
    //       value: 360,
    //     },
    //     {
    //       date: "24.03.2020",
    //       category: "Food",
    //       value: 532,
    //     },
    //   ];
    // },
    // addToPaymentList(data) {
    //   this.paymentsList.push(data);
    // },
  },
  computed: {
    ...mapGetters({
      fullPrice: "getPaymentsFullValuePrice",
      paymentsList: "getPaymentsList",
    }),
    currentElements() {
      const { n, page } = this;
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n);
    },
  },
  created() {
    // this.setPaymentsListData(this.fetchData());
    this.$store.dispatch("fetchData");
    // this.$store.commit("setPaymentsListData", this.fetchData());
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
