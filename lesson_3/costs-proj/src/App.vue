<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="wrapper">
      <header class="header">
        <div class="title">My personal costs</div>
        <nav class="nav">
          <ul>
            <li>
              <router-link to="/dashboard">Dashboard</router-link>
            </li>
            <li>&nbsp;/&nbsp;</li>
            <li>
              <router-link :to="{ name: 'about' }">About</router-link>
            </li>
            <li>&nbsp;/&nbsp;</li>
            <li>
              <router-link :to="{ name: 'notfound' }">Not Found</router-link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <router-view />
      </main>
      <modal-window-add-payment-form :settings="settings" v-if="modalShow" />
    </div>
  </div>
</template>

<script>
import ModalWindowAddPaymentForm from "./components/ModalWindowAddPaymentForm.vue";

export default {
  name: "App",
  components: { ModalWindowAddPaymentForm },
  data() {
    return {
      modalShow: false,
      settings: {
        content: "auth",
        header: "Auth form",
      },
    };
  },
  methods: {
    goToPageNotFound() {
      if (this.$route.name === "notfound") return;
      this.$router.push({
        name: "notfound",
      });
    },
  },
  created() {
    this.$modal.show();
    this.$modal.hide();
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
ul {
  max-width: 500px;
  padding: 50px 0;
  margin: 0 auto;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
}
li {
  width: calc(100% / 5);
}
</style>
