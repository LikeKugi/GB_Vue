<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="show = !show">show/hide</button>
    <counter-button v-if="show" />
    <div class="wrapper">
      <header class="header">
        <div class="title">My personal costs</div>
      </header>
      <main>
        <add-payment-form @addNewPayment="addToPaymentList" />
        <payments-display :items="paymentsList" />
      </main>
    </div>
  </div>
</template>

<script>
import counterButton from "./components/counter-button.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";

export default {
  name: "App",
  components: {
    counterButton,
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      show: true,
      paymentsList: [],
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
    addToPaymentList(data) {
      this.paymentsList.push(data);
    },
  },
  created() {
    this.paymentsList = this.fetchData();
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
