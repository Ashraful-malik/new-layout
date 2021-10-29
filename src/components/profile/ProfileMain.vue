<template>
  <div class="hero is-fullheight">
    <div class="">
      <div class="container is-custom">
        <TopImages />
        <div class="column">
          <div class="profile-about">
            <div class="left-menu">
              <div class="left-menu-inner">
                <div class=" is-flex-mobile ">
                  <div class="menu-item is-active">
                    <a href="">
                      <span class="icon-text">
                        <span class="icon">
                          <i class="fas fa-bell fa-lg"></i>
                        </span>
                        <span class="title is-6 is-hidden-mobile"
                          >Overview</span
                        >
                      </span>
                    </a>
                  </div>
                </div>
                <div class="menu-item">
                  <a href="">
                    <span class="icon-text">
                      <span class="icon">
                        <i class="fab fa-airbnb fa-lg"></i>
                      </span>
                      <span class="title is-6 is-hidden-mobile">Projects</span>
                    </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="">
                    <span class="icon-text">
                      <span class="icon">
                        <i class="fas fa-th fa-lg"></i>
                      </span>
                      <span class="title is-6 is-hidden-mobile">Timeline</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div class="right-content">
              <div class="columns is-multiline">
                <div class="column is-half">
                  <div class="box">
                    <div class="title">Details</div>
                    <hr />
                    <p>
                      test data Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Quidem sed, aspernatur, vero, atque quas
                      distinctio minus numquam aut dignissimos voluptas nam
                      voluptate aliquam cumque provident nisi quis itaque ut
                      fugiat?
                    </p>
                  </div>
                </div>
                <div class="column  is-half">
                  <div class="box">
                    <div class="title">Stacks</div>
                    <hr />
                    <p>test data</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi ipsum deleniti odit magnam dolorum? Perferendis
                      praesentium maxime maiores vel. Minima at consequuntur
                      minus nostrum temporibus autem provident assumenda
                      corporis nesciunt!
                    </p>
                  </div>
                </div>
                <div class="column is-half">
                  <div class="box">
                    <div class="title">About Me</div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
.profile-about .left-menu {
  max-width: 230px;
  min-width: 230px;
  min-width: 260px;
}
.profile-about {
  width: 100%;
  display: flex;
}
.left-menu-inner {
  width: 100%;
}
.right-content {
  margin-left: 3rem;
  min-height: 420px;
}

.profile-about .left-menu .menu-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  color: #fff;
}
.profile-about .left-menu .menu-item:hover {
  background: #5596e6;
  border-radius: 0.3rem;
}

.menu-item .title {
  color: rgb(197, 197, 197);
  margin-left: 0.5rem;
  margin-top: 2px;
  letter-spacing: 1px;
}
.icon {
  color: rgb(212, 212, 212);
}
@media screen and (max-width: 880px) {
  .profile-about {
    flex-direction: column;
  }
  .profile-about .left-menu {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    margin-bottom: 20px;
  }
  .left-menu .left-menu-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu-item {
    padding: 0 10px;
  }
  .right-content {
    margin-left: 0;
    width: 100% !important;
  }
}
</style>
