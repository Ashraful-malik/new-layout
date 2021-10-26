<template>
  <div class="hero is-fullheight">
    <div class="">
      <div class="container is-custom">
        <TopImages />
      </div>
    </div>
  </div>
</template>

<script>
import TopImages from "./TopImages.vue";
export default {
  name: "ProfileMain",
  components: {
    TopImages,
  },
};
</script>

<style scoped>
.section {
  padding: 10px 8px 0 8px;
}

.title {
  color: wheat;
}
</style>
