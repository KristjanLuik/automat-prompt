<script setup lang="ts">
import { store } from './../store.ts'
import AcroBlock from "./AcroBlock.vue";
</script>


<template>
  <div class="modal">
    <div class="header">
      <span class="header-label">The</span>
      <span class="header-letter">A</span>
      <span class="header-letter">U</span>
      <span class="header-letter">T</span>
      <span class="header-letter">O</span>
      <span class="header-letter">M</span>
      <span class="header-letter">A</span>
      <span class="header-letter">T</span>
      <span class="header-label">Framework</span>
    </div>
    <div class="modal-content">
      <div v-for="acr in store.acroElements">
        <AcroBlock :letter="acr.letter" :meaning="acr.meaning" :dos="acr.dos" :donts="acr.donts" :definition="acr.definition"></AcroBlock>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .header{
    border: 1px solid red;
    background-color: rgb(33 50 66);
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 8px;
    border-radius: 16px 16px 0 0;
  }
  .header > span {
    font-size: 2em;
    font-weight: bold;
    color: #42b883;
    margin-right: 5px;
  }
  .header .header-letter {
    color: #ffffff;
    border-radius: 9px;
    padding: 5px;
  }
  .header .header-label{
    background: #cdcdcd;
    border-radius: 9px;
    padding: 5px;
    color: #1a1a1a;
  }
</style>