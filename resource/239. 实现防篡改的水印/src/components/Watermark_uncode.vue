<template>
  <div class="watermark-container" ref="parentRef">
    <slot></slot>
  </div>
</template>

<script setup>
import useWatermarkBg from './useWatermarkBg';
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'watermark',
  },
  fontSize: {
    type: Number,
    default: 40,
  },
  gap: {
    type: Number,
    default: 20,
  },
});
const bg = useWatermarkBg(props);
</script>

<style scoped>
.watermark-container {
  position: relative;
}
</style>
