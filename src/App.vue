<template>
  <div id="app">
    <Navbar />
    <Feeds />
  </div>
</template>

<script>
import Navbar from "./components/nav/Navbar.vue";
import Feeds from "./components/feeds/Feeds.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Feeds,
  },
};
</script>

<style>
#app {
}
</style>
