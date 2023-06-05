# 1. usePageScale

根据大屏尺寸，对开发的页面进行缩放。`usePageScale(dom,width,height)` ,dom:需要缩放的 dom 节点；width:大屏的宽度，默认 1920；height:大屏的高度，默认 1080。

```vue
<template>
  <div ref="myRef" class="doc-page">
    <layout>
      <router-view></router-view>
    </layout>
  </div>
</template>
<script setup>
import layout from './layout';
import { onMounted } from 'vue';
import { usePageScale } from 'standard-vue-cockpit-ui';
const myRef = ref('');
onMounted(() => {
  usePageScale(myRef.value, 1920, 1080);
});
</script>
<style lang="scss" scoped></style>
```
