<template>
  <div ref="myRef" class="doc-page">
    <layout>
      <router-view></router-view>
    </layout>
  </div>
</template>
<script setup>
import layout from './layout';
import { ref, onMounted, onBeforeUnmount } from 'vue';
const myRef = ref('');
onMounted(() => {});
</script>
<style lang="scss" scoped></style>
