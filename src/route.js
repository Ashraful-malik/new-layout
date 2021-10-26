import Vue from "vue";
import VueRouter from "vue-router";

// Componenets
import Feeds from "./components/feeds/Feeds.vue";
import ProfileMain from "./components/profile/ProfileMain.vue";
Vue.use(VueRouter);
const routes = [
  { name: "Feeds", path: "", component: Feeds },
  { name: "Profile", path: "/profile", component: ProfileMain },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
