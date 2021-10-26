<template>
  <div class="hero is-fullheight">
    <div class="">
      <div class="section">
        <div class="columns is-multiline">
          <div class="column is-one-third" v-for="x in 50" :key="x">
            <Feed />
            <br />
            <Feed2 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Feed from "./Feed.vue";
import Feed2 from "./Feed2.vue";
export default {
  name: "Feeds",
  components: {
    Feed,
    Feed2,
  },
};
</script>

<style scoped>
.container {
  /* padding: 10px; */
  /* background-color: brown; */
}
.section {
  padding: 10px 8px 0 8px;
}
</style>
