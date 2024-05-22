<template>
  <div>
    <MyInput ref="inpRef" a="1" b="2" c="3" v-model="text">
      <template #prepend>
        <el-button>Http://</el-button>
      </template>
      <template #append>
        <el-button>Search</el-button>
      </template>
    </MyInput>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import MyInput from './components/MyInput.vue';
const text = ref('Hello World');
const inpRef = ref(null);
onMounted(() => {
  // console.log('父组件', inpRef.value);
  inpRef.value.focus();
});
</script>
