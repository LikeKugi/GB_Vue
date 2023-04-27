<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="wrapper">
      <header class="header">
        <div class="title">My personal costs</div>
        <nav class="nav">
          <a href="#dashboard">Dashboard</a> / <a href="#about">About</a> /
          <a href="#notfound">Not Found</a>
        </nav>
      </header>
      <main>
        <dashboard-view v-if="page === 'dashboard'" />
        <about-us v-else-if="page === 'about'" />
        <not-found v-else />
      </main>
    </div>
  </div>
</template>

<script>
import AboutUs from "./views/AboutUs.vue";
import DashboardView from "./views/DashboardView.vue";
import NotFound from "./views/NotFound.vue";

export default {
  name: "App",
  data() {
    return {
      page: "",
    };
  },
  components: {
    DashboardView,
    AboutUs,
    NotFound,
  },
  comments: {
    DashboardView,
    AboutUs,
    NotFound,
  },
  methods: {
    setPage() {
      this.page = location.hash.slice(1);
    },
  },
  mounted() {
    this.setPage();
    window.addEventListener("hashchange", () => {
      this.setPage();
    });
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
