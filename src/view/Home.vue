
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  methods: {
    onOtherClick () {

    }
  }
})
</script>


<script setup>
// import { ref } from "vue";
ref: name = 'me'
ref: count = 1

const addName = () => {
  console.log(count);
  count += 1;
  name += count;
  return name;
}

</script>

<template>
  <div>
    {{name}}
    {{count}}
    <button @click="addName">click</button>
    <button @click="onOtherClick">click</button>
    <el-button type="primary"
               size="mini"
               @click="">1234</el-button>

  </div>
</template>

<style scoped>
</style>