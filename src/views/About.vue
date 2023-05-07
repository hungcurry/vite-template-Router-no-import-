<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <main>
    <div class="about">
      <nav>
        <Router-link to="/about/guide">Guide</Router-link>
        <Router-link to="/about/reference">API Reference</Router-link>
        <Router-link to="/about/changelog">Changelog </Router-link>
        <Router-link to="/about/gitHub">GitHub</Router-link>
      </nav>
      <main>
        <router-view />
      </main>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.about {
  > nav {
    > a {
      margin: 0 10px;
      color: #2c3e50;
      font-weight: bold;
      &.router-link-exact-active {
        color: rebeccapurple;
      }
    }
  }
}
</style>
