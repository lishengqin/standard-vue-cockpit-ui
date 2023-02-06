<template>
  <div>
    <LsqButton @click="visible1 = true">打开弹窗,挂载在#app节点上</LsqButton>
    <LsqModal teleport="#app" width="600px" height="400px" v-model:visible="visible1">
      <template #title>
        <span style="color: #de7373">自定义标题</span>
      </template>
      <div>我是弹窗的内容</div>
    </LsqModal>

    <LsqButton @click="visible2 = true">去掉弹窗头部</LsqButton>
    <LsqModal :hideHead="true" width="600px" height="400px" v-model:visible="visible2">
      <template #title>
        <span style="color: #de7373">自定义标题</span>
      </template>
      <div>我是弹窗的内容</div>
    </LsqModal>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const visible1 = ref(false);
const visible2 = ref(false);
</script>
