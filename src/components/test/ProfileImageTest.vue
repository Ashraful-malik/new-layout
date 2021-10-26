<template>
  <div class="">
    <div class="">
      <div class="pt-3 pr-3 pl-3">
        <div class="cover-bg">
          <img
            src="https://friendkit.cssninja.io/assets/img/demo/bg/4.png"
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
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img
              src="https://friendkit.cssninja.io/assets/img/demo/bg/4.png"
              alt="Placeholder image"
              class="cover-image"
            />
          </div>
          <div class="card-content">
            <div class="profile-image">
              <div class="media-left">
                <figure class="image is-96x96">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
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
.card {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
.cover-bg {
  position: relative;
  object-fit: cover;
  min-height: 180px !important;
}
.cover-image {
  max-height: 328px;
  width: 100%;
  border-radius: 4px;
  object-fit: cover;
}
.profile-image {
  position: relative;
  bottom: 60px;
  left: 20px;
  right: 0;
  margin: 0 auto;
  display: inline;
  justify-content: center;
  align-items: left;
  height: 110px;
  width: 110px;
  z-index: 1;
}
.avtar-image {
  box-shadow: 0px 15px 32px rgba(0, 0, 0, 0.18) !important;
  border-radius: 100%;
}
.user-name {
  /* margin-top: -4rem; */
  /* padding-bottom: 2rem; */
  display: inline;
}
</style>
