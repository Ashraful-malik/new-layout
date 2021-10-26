<template>
  <div class="">
    <div class="columns is-marginless is-paddingless">
      <div class="column is-paddingless p-3">
        <div class="cover-bg">
          <img
            src="https://bulma.io/images/placeholders/128x128.png"
            alt="Backgraound Image"
            class="cover-image"
          />
          <div class="profile-image">
            <figure class="image is-96x96">
              <img
                class="is-square avatar-image"
                src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
              />
            </figure>
          </div>
          <div class="user-name">
            <h1 class="title is-5 has-text-centered">
              Tazim
            </h1>
            <!-- <h1 class="subtitle is-6 has-text-centered mx-4">
          {{ bio }}
        </h1> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// <img src="https://bulma.io/images/placeholders/128x128.png" />
export default {
  name: "TopImages",
};
</script>

<style scoped>
.box {
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  display: block;
  padding-top: 0rem;
  padding-bottom: 0rem;
  padding-left: 0;
  padding-right: 0;
}

.hr {
  background-color: gray;
}
.cover-bg {
  position: relative;
}
.cover-image {
  min-height: 170px !important;
  max-height: 320px;
  width: 100%;
  border-radius: 2px;
}
.profile-image {
  position: relative;
  bottom: 60px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: left;
  height: 110px;
  width: 110px;
  z-index: 1;
}
.avtar-image {
  box-shadow: 0px 15px 32px rgba(0, 0, 0, 0.18) !important;
  border-radius: 5px;
}
.user-name {
  margin-top: -4rem;
  padding-bottom: 2rem;
}
</style>
