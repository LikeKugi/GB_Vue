import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";
import router from "./router";

// createApp(App).use(store).mount("#app");

const app = createApp(App);
app.use(store).use(router);
app.mount("#app");
