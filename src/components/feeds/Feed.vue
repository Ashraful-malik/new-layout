<template>
  <div>
    <div class="card">
      <header class="card-header">
        <figure class="image is-48x48">
          <img
            src="https://bulma.io/images/placeholders/96x96.png"
            alt="Placeholder image"
            class="mt-5 ml-5"
          />
        </figure>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon"> </span>
        </button>
      </header>
      <div class="card-content">
        <div class="content">
          <h3 class="title is-4">Demo App</h3>
          <span class="tag is-primary is-light">#WebApp</span>
          <p class="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            laborum cumque omnis ea, praesentium minima.
          </p>
          <br />
          <button class="button is-danger is-small is-outlined">
            Like
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feed",
};
</script>

<style scoped>
.card:hover {
  border: 1px solid green;
}
img {
  border-radius: 10%;
}
.title {
  margin-bottom: 0px;
  color: #fafafa;
}
.tag {
  border-radius: 0.15rem;
}
.subtitle {
  color: #a2a5b9;
}
</style>
