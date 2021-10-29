<template>
  <nav class="navbar">
    <div class="left is-flex is-align-items-center ml-5">
      <div class="logo">
        <h2 class="is-size-4">Logo</h2>
      </div>
      <div class="hamburger-icon ml-5 mt-2">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TestNav",
};
</script>

<style scoped>
.hamburger-icon .fas {
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;
}
</style>
