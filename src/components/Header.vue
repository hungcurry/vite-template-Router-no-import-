<script setup></script>
<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/template">Template</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>
<style lang="scss" scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  margin-top: 2rem;
  width: 100%;
  font-size: 12px;
  text-align: center;
  background-color: rgb(221, 11, 141);
  padding: 5px 20px;
}

nav a.router-link-exact-active {
  color: aquamarine;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 20px;
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    padding: 1rem 0;
    margin-top: 1rem;
    font-size: 1rem;
    text-align: left;
  }
}
</style>
