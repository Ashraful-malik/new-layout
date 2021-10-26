<template>
  <div class="card">
    <div class="card-header">
      <button class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
          <div class="media-content">
            <p class="title is-4">Demo App 2</p>
            <span class="tag is-primary is-light">#WebApp</span>
          </div>
        </div>
      </div>
      <div class="content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque culpa
        ullam quas sint quasi tenetur, dolor, cupiditate aspernatur nemo quos.
      </div>
      <div class="columns is-mobile is-paddingless">
        <div class="column">
          <button class="button is-small is-danger is-outlined">Like</button>
        </div>
        <div class="column"></div>
        <div class="column">
          <button class="button is-small is-link is-outlined">
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feed2",
};
</script>

<style scoped>
.card .media:not(:last-child) {
  margin-bottom: 0.8rem;
}
.card-header {
  background-image: linear-gradient(to right, #051937, #a8eb12);
}
img {
  border-radius: 10%;
}
.title {
  color: #fafafa;
  margin-bottom: 0.4rem;
}
.image {
  margin-top: -45px;
}
</style>
