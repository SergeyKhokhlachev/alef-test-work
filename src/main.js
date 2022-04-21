import { createApp } from "vue";
import App from "./App.vue";
import router from "@router";
import store from "@store";

// глобальные стили
import "@style/main.scss";

// Notifications
import Notifications from "@kyvg/vue3-notification";

createApp(App).use(store).use(router).use(Notifications).mount("#app");
