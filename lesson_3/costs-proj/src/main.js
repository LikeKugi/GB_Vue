import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import modal from "./plugins/ModalWindow";

// createApp(App).use(store).mount("#app");

const app = createApp(App);
app.use(store).use(router).use(modal);
app.mount("#app");
