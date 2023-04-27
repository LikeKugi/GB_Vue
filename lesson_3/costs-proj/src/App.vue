<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="wrapper">
      <header class="header">
        <div class="title">My personal costs</div>
        <nav class="nav">
          <a class="nav__link" href="dashboard">Dashboard</a> /
          <a class="nav__link" href="about">About</a> /
          <a class="nav__link" href="notfound">Not Found</a>
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
      this.page = location.pathname.slice(1);
    },
  },
  mounted() {
    this.setPage();
    const links = document.querySelectorAll(".nav__link");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        history.pushState({}, "", link.href);
        this.setPage();
      });
    });
    window.addEventListener("popstate", () => {
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
