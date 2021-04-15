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
// import { routeItme } from "@c/commonComponents/interface";
import { getStatic } from "@/api/static";
import commonPage from '@c/common/commonPage.vue'
import commonHeader from '@c/common/commonHeader.vue'
import commonAside from '@c/common/commonAside.vue'

const asideMaker = (n:Number) => {
  let numberArr = new Array(n).fill(0).map((v, i) => i + 1).map(v => {
    return {
      label: '路由' + v,
      index: 'index' + v
    };
  })

  return numberArr;
}
let activeIndex = ref('')
let asideCol  = reactive(asideMaker(9))
const changeIndex = (route ) => {
  activeIndex.value = route.index
}

const getStaticData = () => {
  getStatic('Json/test.json').then(r => {
    console.log(r);
  })
}

onMounted(() => {
  activeIndex.value = asideCol[0].index
  getStaticData()
})

</script>

<style scoped>

</style>