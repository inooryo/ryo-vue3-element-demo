<template>
  <div class="h-100">
    <div class="header">
      123
    </div>
    <div class="main">
      <div class="aside">

      </div>
      <div class="content">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    props:['asideWith', 'headerHeight'],
    mounted() {
      console.log(this.headerHeight); 
    }
  }
</script>

<script setup lang="ts">
import { defineProps } from "vue";
// const { asideWith, headerHeight } = defineProps({
//   asideWith:{
//     type:Number
//   },
//   headerHeight:{
//     type:Number
//   }
// });

// console.log(asideWith, headerHeight);
</script>

<style lang='less'  scoped>
  .header{
    height: var(--headerHeight);
  }
</style>