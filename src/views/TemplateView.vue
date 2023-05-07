<script setup>
import { ref, onMounted } from "vue";

function refHandler(el) {
  // el 可能會null
  if (el) {
    el.focus();
  }
}
</script>

<template>
  <main>
    <p>Template</p>
    <input :ref="refHandler" />
  </main>
</template>
<style lang="scss" scoped></style>
