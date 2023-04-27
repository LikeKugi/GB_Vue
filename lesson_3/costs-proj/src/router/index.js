import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "../views/DashboardView.vue";
import AboutUs from "../views/AboutUs.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/dashboard/:page",
    name: "dashboard/",
    component: DashboardView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutUs,
  },
  {
    path: "/notfound",
    name: "notfound",
    component: NotFound,
  },
  // any other path. IN THE END!!!
  // {
  //   path: "*", // any type
  //   component: NotFound,
  // },
];

const router = new createRouter({
  routes,
  history: createWebHistory(),
});

/* HOOKS */

const userAuth = true; // login emulation

router.beforeEach((to, from, next) => {
  if (to.name !== "notfound" && !userAuth) {
    next({
      name: "notfound",
    });
  } else {
    next();
  }
});

const getTitleByRoutes = (routeName) => {
  return {
    dashboard: "Dashboard page",
    about: "About page",
    notfound: "404 Not Found",
  }[routeName];
};

router.afterEach((to) => {
  document.title = getTitleByRoutes(to.name);
});

export default router;
