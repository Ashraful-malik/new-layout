import Vue from "vue";
import App from "./App.vue";

// Router
import router from "./route";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
