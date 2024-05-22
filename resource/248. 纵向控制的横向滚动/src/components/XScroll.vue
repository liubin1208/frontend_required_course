<template>
  <div v-size-ob="handleChange" class="scroll-container">
    <div class="v-scroll">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const size = reactive({
  w: 0,
  h: 0,
});
function handleChange({ width, height }) {
  size.w = width;
  size.h = height;
}
</script>

<style scoped>
.scroll-container {
  width: 100%;
  height: 100%;
}
.v-scroll {
  --w: calc(v-bind(size.w) * 1px);
  --h: calc(v-bind(size.h) * 1px);
  width: var(--h);
  height: var(--w);
  position: relative;
  overflow: auto;
  transform-origin: left top;
  transform: translateY(var(--h)) rotate(-90deg);
}
/* 隐藏滚动条 */
.v-scroll::-webkit-scrollbar {
  display: none;
}
.content {
  position: absolute;
  width: var(--w);
  height: var(--h);
  top: 0;
  left: var(--h);
  transform-origin: left top;
  transform: rotate(90deg);
}
</style>
