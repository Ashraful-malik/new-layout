<template>
  <div id="profile-main" class="view-wrap">
    <div class="columns is-multiline is-paddingless is-marginless">
      <div class="column is-paddingless p-3">
        <div class="cover-bg">
          <span class="camera-edit">
            <i class="fas fa-camera"></i>
          </span>
          <img
            class="cover-image"
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          />
          <div class="profile_image is-flex is-align-items-center">
            <figure class="image is-128x128">
              <img
                class="is-rounded avtar-image"
                src="https://avatars.githubusercontent.com/u/68907772?v=4"
              />
            </figure>
          </div>
        </div>
        <div class="profile-menu is-hidden-mobile is-mt-5-mobile">
          <div class="menu-start">
            <a href="#" class="button has-min-width">Projects </a>
          </div>
        </div>
        <div
          class="
                profile-subheader
                is-flex is-align-items-center is-justify-content-center
              "
        >
          <div class="middle-sunheader has-text-centered">
            <h2 class="is-size-3">
              <strong> Tazim Rahbars </strong>
            </h2>
            <span>163562c4 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile2",
};
</script>

<style scoped>
.cover-bg,
.profile-main {
  position: relative;
}

.profile_image {
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 110px;
  z-index: 1;
}
.avtar-image {
  box-shadow: 0px 15px 32px rgba(0, 0, 0, 0.18) !important;
}
.cover-image {
  min-height: 180px !important;
  max-height: 328px;
  width: 100%;
  border-radius: 2px;
}
.camera-edit {
  color: #fff;
  margin: 1rem;
  position: absolute;
  font-size: 1.5rem;
  cursor: pointer;
}
.button.has-min-width {
  width: 140px;
}
.profile-menu .button {
  font-size: 0.9rem;
  padding: 20px 22px;
  background: #fcfcfc;
  color: #999;
  font-weight: 500;
}
.user-data span {
  font-size: 1.2rem;
  color: black;
  font-weight: 500;
  line-height: 1rem;
}
.user-data label {
  font-size: 17px;
  margin: 10px;
  line-height: 9px;
}
.box {
  border: 1px solid #e8e8e8;
}
@media only screen and (max-width: 768px) {
  .profile-subheader {
    margin-top: 50px;
  }
}
</style>
