<template>
  <nav class="navbar is-fixed-top">
    <div class="left is-flex is-align-items-center ml-5">
      <div class="hamburger-icon">
        <i class="fas fa-bars"></i>
      </div>
      <div class="logo">
        <router-link to="/">
          <img src="" alt="" width="80" height="28" class="navbar-item" />
        </router-link>
      </div>
    </div>
    <div class="right is-flex is-align-items-center mr-5">
      <div class="bell mr-5">
        <i class="far fa-bell"></i>
      </div>
      <div class="dropdown">
        <div class="user_image dropdown-trigger">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTEWioY0llr4RqHQE6n6CZWnwuQrYnJZnPw&usqp=CAU"
            alt="user_image"
          />
        </div>
        <div class="dropdown-menu mt-2" id="dropdown-menu" role="menu">
          <div class="rectangle"></div>
          <div class="dropdown-content">
            <a href="#" id="profile-link" class="account-item">
              <div class="media is-align-items-center pl-5">
                <div class="media-left">
                  <div class="image user_image mt-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTEWioY0llr4RqHQE6n6CZWnwuQrYnJZnPw&usqp=CAU"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  class="media-content mt-2 user-name"
                  style="line-height: 1.5rem"
                >
                  <h1 class="is-size-4">Tazim Rahbar</h1>
                  <small>@tazim404</small>
                </div>
              </div>
              <hr class="account-divider" style="margin-bottom: 0.5rem" />
            </a>
            <a href="" class="account-item">
              <div class="media pl-5 mb-2">
                <div class="image-wrap">
                  <img
                    src="@/assets/add.svg"
                    alt=""
                    srcset=""
                    class="log_out_img"
                  />
                </div>
                <div class="media-content ml-3">
                  <h3 class="">Create Project</h3>
                </div>
              </div>
            </a>
            <a href="" class="account-item">
              <div class="media pl-5 mb-2">
                <div class="image-wrap">
                  <img
                    src="@/assets/line-chart.svg"
                    alt=""
                    srcset=""
                    class="log_out_img"
                  />
                </div>
                <div class="media-content ml-3">
                  <h3 class="">Dashboard</h3>
                </div>
              </div>
            </a>
            <a href="" class="account-item">
              <div class="media pl-5 mb-2">
                <div class="image-wrap">
                  <img
                    src="@/assets/envelope-alt.svg"
                    alt=""
                    srcset=""
                    class="log_out_img"
                  />
                </div>
                <div class="media-content ml-3">
                  <h3 class="">Message</h3>
                </div>
              </div>
            </a>
            <a href="" class="account-item">
              <div class="media pl-5 mb-2">
                <div class="image-wrap">
                  <img
                    src="@/assets/website-icon.svg"
                    alt=""
                    srcset=""
                    class="log_out_img"
                  />
                </div>
                <div class="media-content ml-3">
                  <h3 class="">About Website</h3>
                </div>
              </div>
            </a>
            <a href="" class="account-item">
              <div class="media pl-5">
                <div class="image-wrap">
                  <img
                    src="@/assets/bug.svg"
                    alt=""
                    srcset=""
                    class="log_out_img"
                  />
                </div>
                <div class="media-content ml-3">
                  <h3 class="">Report Bug</h3>
                </div>
              </div>
            </a>
            <hr class="account-divider" />
            <a href="" class="account-item-3">
              <div class="media pl-5 ">
                <div class="image-wrap">
                  <img
                    src="@/assets/settings.svg"
                    alt=""
                    srcset=""
                    class="log_out_img"
                  />
                </div>
                <div class="media-content ml-3">
                  <h3>Setting</h3>
                </div>
              </div>
            </a>
            <a href="" class="account-item">
              <div class="media pl-5">
                <div class="image-wrap">
                  <img
                    src="@/assets/sign-out.png"
                    alt=""
                    srcset=""
                    class="log_out_img"
                  />
                </div>
                <div class="media-content ml-3">
                  <h3>Log Out</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  mounted() {
    var dropdown = document.querySelector(".dropdown");
    console.log(dropdown);
    console.log("HEllo world");
    //addEventListener - attaches an event handler to the specified element.
    dropdown.addEventListener("click", function(event) {
      //event.stopPropagation() - it stops the bubbling of an event to parent elements, by preventing parent event handlers from being executed
      event.stopPropagation();
      //classList.toggle - it toggles between adding and removing a class name from an element
      dropdown.classList.toggle("is-active");
    });
  },
};
</script>

<style scoped>
.navbar {
  background: #151a23;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  /* padding: 0rem 0; */
}
.user_image {
  position: relative;
  max-height: 38px;
}
img {
  max-width: 100%;
}
.user_image img {
  height: 38px;
  width: 38px;
  max-height: 38px;
  border-radius: 50%;
  cursor: pointer;
}
.hamburger-icon .fas {
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;
}
.bell .far {
  font-size: 1.2rem;
  cursor: pointer;
  color: #8a8f99;
}
/* dropdown menu  */
.dropdown-menu {
  right: 0%;
  left: -17rem;
  padding-top: 0.5rem;
  width: 20rem;
}
.dropdown-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18) !important;
  background: #171c26;
  border: 1px solid #505050;
}
.media {
  /* background: red; */
  /* text-align: ; */
  justify-content: center;
  padding: 0.2rem 0;
}
.media:hover {
  background: #2d394e;
  height: 100%;
}
.rectangle {
  width: 1rem;
  height: 1.5rem;
  top: 0;
  right: 8%;
  background: #171c26;
  position: absolute;
  transform: rotate(60deg);
}
hr {
  height: 1px;
  margin-top: 1rem;
  height: 1;
  background: #505050;
}
.log_out_img {
  width: 1.5rem;
}
.media-content h3 {
  font-weight: 500;
  color: #fff;
}
.user-name h1,
small {
  color: rgb(226, 226, 226);
  font-weight: 600;
}
</style>
