<template>
  <div class="pt-3 pr-3 pl-3">
    <div class="cover-bg">
      <figure>
        <img
          src="https://friendkit.cssninja.io/assets/img/demo/bg/4.png"
          alt="Backgraound Image"
          class="cover-image"
        />
      </figure>
      <div class="profile-image">
        <figure class="image is-96x96">
          <img
            class="avatar-image"
            src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
          />
        </figure>
        <div class="mt-2">
          <h2 class="title is-5">
            Tazim Rahbar
          </h2>
          <h6 class="subtitle is-6">
            @tazim404
          </h6>
        </div>
      </div>
      <div class="user-name"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopImages",
  components: {},
};
</script>

<style scoped>
img {
  border-radius: 10%;
}
h1 {
  color: #fff;
}
.follow {
  display: flex;
  color: aqua;
  /* padd */
  /* padding: 100px; */
}
.card {
  background-color: transparent;
  border: none;
  box-shadow: none;
}

.title {
  color: #fff;
}
.subtitle {
  color: #fff;
}
.cover-bg {
  position: relative;
  object-fit: cover;
  min-height: 180px !important;
}
.cover-bg:hover {
  background: rgba(57, 58, 79, 0.5);
}
.cover-image {
  max-height: 328px;
  width: 100%;
  border-radius: 4px;
  object-fit: cover;
}
.cover-image:hover {
  cursor: pointer;
  /* background: rgba(57, 58, 79, 0.5); */
  background: transparent;
}
.profile-image {
  position: relative;
  bottom: 80px;
  left: 30px;
  right: 0;
  margin: 0 auto;
  display: inline;
  justify-content: center;
  align-items: left;
  height: 110px;
  width: 110px;
  z-index: 1;
}

.user-name {
  margin-top: -5rem;
  padding-bottom: 2rem;
  /* display: inline; */
}
.profile {
  border-radius: 10px;
}
</style>
