<template>
  <commonPage>
    <template v-slot:header>
      <commonHeader />
    </template>
    <template v-slot:aside>
      <commonAside @changeIndex='changeIndex' :asideCol='asideCol' :activeIndex='activeIndex' />
    </template>
    <template v-slot:main>
    </template>
  </commonPage>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { routeItme } from "@c/commonComponents/interface";
import commonPage from '@c/common/commonPage.vue'
import commonHeader from '@c/common/commonHeader.vue'
import commonAside from '@c/common/commonAside.vue'

const asideMaker = (n:Number) :Array<routeItme> => {
  let numberArr = new Array(n).fill(0).map((v, i) => i + 1).map(v => {
    return {
      label: '路由' + v,
      index: 'index' + v
    };
  })

  return numberArr;
}
let activeIndex = ref('')
let asideCol :Array<routeItme> = reactive(asideMaker(9))
const changeIndex = (route :routeItme) => {
  activeIndex.value = route.index
  console.log(activeIndex.value);
}

onMounted(() => {
  activeIndex.value = asideCol[0].index
})

</script>

<style scoped>

</style>