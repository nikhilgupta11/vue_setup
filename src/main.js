import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import VueMeta from "vue-meta";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(VueMeta);

app.mount("#app");
