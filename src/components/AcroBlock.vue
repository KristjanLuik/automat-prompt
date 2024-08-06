<script setup lang="ts">
import {AcroElement} from "../store.ts";
import {ref} from 'vue'

const props = defineProps<AcroElement>();
const color = ref('green');

</script>

<template>
  <div class="acro-block">
    <div class="define">
      <div class="letter"><a :id="props.letter" :href="`#${props.letter}`"><span>{{ props.letter }}</span></a></div>
      <div class="meaning">{{ props.meaning }}</div>
    </div>
    <div class="do">
      <div class="do-title"><span>✓{{ props.dos.title }}</span></div>
      <div v-for="doo in props.dos.points" class="do-point">
        <p>{{ doo }}</p>
      </div>
    </div>
    <div class="dont">
      <div class="dont-title"><span>🙅‍♂️{{ props.donts.title }}</span></div>
      <div v-for="dont in props.donts.points" class="dont-point">
        <p>{{ dont }}</p>
      </div>
    </div>
    <span class="line"></span>
  </div>
</template>

<style scoped>
.acro-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 64px 4px 4px;
  border-bottom: solid 1px #42b883;

  & > div {
    max-width: 340px;
    margin-right: 16px;
  }
}

.define {
  display: flex;

  .letter span {
    /*display: block;*/
    background-color: v-bind(color);
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    margin-right: 3px;
    padding: 4px;
    border-radius: 4px;
  }
}

.do .do-title span {
  display: block;
  background-color: #42b883;
  color: #ffffff;
  padding: 4px;
  margin-right: 3px;
  border-radius: 4px;
  margin-bottom: 8px;
}

.dont .dont-title span {
  display: block;
  background-color: #ff4d4d;
  color: #ffffff;
  padding: 4px;
  margin-right: 3px;
  border-radius: 4px;
  margin-bottom: 8px;
}
.dont-point > p,
.do-point > p {
  margin-bottom: 8px;
  transition: box-shadow 0.3s ease;
}

.dont-point > p:hover,
.do-point > p:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

</style>