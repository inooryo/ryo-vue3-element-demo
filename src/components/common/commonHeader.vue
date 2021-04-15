<template>
  <div class="h-100 common-header flex-vc flex-sb border-box flex">
    <div class="header-left">
      <h2>inoo-demo</h2>
    </div>
    <div class="header-right">
      hi,{{userInfo.loginName}}
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name:'common-header'
  }
</script>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useStore } from "vuex";
const store = useStore();
const userInfo = computed(() => store.state.userInfo)
</script>

<style lang='less' scoped>
.common-header{
  border-bottom: 1px solid @borderColor;
  padding: 0 20px;
  .header-lfet{
    line-height: 100%;
  } 
  .header-right{
    line-height: 1;
  }
}
</style>