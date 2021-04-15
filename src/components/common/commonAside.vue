<template>
  <div class="h-100 common-aside">
    <div class="aside-title tac">
      <h2>ASIDE</h2>
    </div>
    <ul>
      <li @click='asideClick(item)' :class="['aside-item cup', item.index === activeIndex ? 'aside-item-select' : '']"
          :key="index"
          v-for="(item, index) in asideCol">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "common-aside",
};
</script>

<script setup lang="ts">
import { defineProps, defineEmit, toRefs, computed } from "vue";
// import { routeItme } from "@c/commonComponents/interface";
import { useStore } from "vuex";

const store = useStore();
const emit = defineEmit(['changeIndex'])
let props = defineProps({
  asideCol: {
    type: Array,
    default: () => [],
  },
  activeIndex: {
    type: String,
    default: "",
  },
});

let { asideCol, activeIndex } = toRefs(props)
let activeIndexTry = computed(() => props.activeIndex)
const asideClick = (params :any) => {
  emit('changeIndex', params)
}

</script>

<style lang='less' scoped>
.common-aside {
  border-right: 1px solid @borderColor;
  .aside-item-select {
    background-color: rgba(11, 174, 238, 0.151);
    .aside-select-hover;
  }
}

.aside-select-hover {
    &::after {
      width: 100%;
      left: 0;
      right: 0;
      .after-common
    }
  
}

.after-common{
  content: "";
  transition: all 0.2s;
  height: 2px;
  position: absolute;
  bottom: 0;
  background-color: @mainColor;
  display: inline-block;
}

.aside-item {
  position: relative;
  width: 100%;
  transition: 0.2 all;
  padding:12px 0;
  text-align: center;
  &::after {
    width: 0;
    left: 50%;
    right: 50%;
    .after-common
  }
  &:hover{
    .aside-select-hover;
  }
}
.aside-title {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid @borderColor;
}
</style>