
<script lang='ts'>
  export default{
    methods: {
      onOtherClick(){
        console.log(this.name);
        console.log(56465);
      } 
    }
  }
</script>


<script setup lang='ts'>
// import { ref } from "vue";
  ref: name  = 'me'
  ref: count   = 1

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
    <el-button type="primary" size="mini" @click="">1234</el-button>
    
  </div>
</template>

<style scoped>

</style>