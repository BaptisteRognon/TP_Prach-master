import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routesFromPages from "~pages";
import { plugin, defaultConfig } from "@formkit/vue";
import "./index.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routesFromPages,],
});

const app = createApp(App);
app.use(router);
app.use(plugin, defaultConfig);
app.mount("#app");
