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
import { debounce } from 'lodash';
import { usePageScale } from '@packages/index';
const myRef = ref('');
onMounted(() => {
  usePageScale(myRef.value);
});
</script>
<style lang="scss" scoped></style>
