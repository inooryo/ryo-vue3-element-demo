<template>
  <div>counter: {{counter}}</div>
  <bottom />
  <button @click="increment">Increment</button>
</template>

<script setup lang='ts'>
import bottom from "./buttom.tsx";

import { ref } from "vue";

ref: name = "me";
ref: count = 1;
const counter = ref(0);

const increment = () => {
  counter.value++;
};

const addName = () => {
  console.log(count);
  count += 1;
  name += count;
  return name;
};
</script>
