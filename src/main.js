import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
// import "../node_modules/buefy/dist/buefy.css";
// Router
import router from "./route";

Vue.config.productionTip = false;
Vue.use(Buefy);
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
