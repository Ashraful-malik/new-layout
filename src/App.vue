<template>
  <div id="app">
    <!-- <Navbar /> -->
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
// import Navbar from "./components/nav/Navbar.vue";
import Navigation from "./components/nav/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style>
#app {
}
</style>
