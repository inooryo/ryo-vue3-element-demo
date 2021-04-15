<template>
  <div class="h-100">
    <div class="header border-box">
      <slot name="header"></slot>
    </div>
    <div class="main border-box">
      <div class="aside border-box h-100">
        <slot name="aside"></slot>
      </div>
      <div
           class="content border-box h-100">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {

};
</script>

<script setup lang="ts">
import { defineProps } from "vue";
const { asideWith, headerHeight } = defineProps({
  asideWith: {
    type: String,
    default: "200px"
  },
  headerHeight: {
    type: String,
    default: "45px"
  },
});
</script>

<style lang='less'  scoped>
.aside {
  position: fixed;
}
.header{
  height: v-bind(headerHeight);
  // border: 1px solid #000;
}
.aside{
  width: v-bind(asideWith);
  // border: 1px solid #000;
}
.content{
  margin-left: v-bind(asideWith);
  // border: 1px solid #000;
}
.main{
  height: calc(100% - v-bind(headerHeight));
}
</style>