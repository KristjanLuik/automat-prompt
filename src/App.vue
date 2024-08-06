<script setup lang="ts">
import Modal from "./components/Modal.vue";
</script>

<template>
  <Modal />
  <span class="reff">Idea from <a href="https://medium.com/the-generator/the-perfect-prompt-prompt-engineering-cheat-sheet-d0b9c62a2bba" target="_blank">The Perfect Prompt: Prompt Engineering Cheat Sheet</a></span>
</template>


<style>
body {
  font-family: 'Comfortaa', sans-serif;
}
</style>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.reff {
  color: #888;
  font-size: 0.7em;
  bottom: 0;
}
</style>
