<template>
  <div class="example-warp">
    <LsqModuleBlock class="module" title="标题" height="200px">
      <div>我是内容</div>
    </LsqModuleBlock>
    <LsqModuleBlock
      class="module"
      title="标题"
      height="200px"
      v-model="activeTab1"
      :tabs="tabs"
      @tabChange="tabChange"
    >
      <div>我是内容，当前处于的tab是：{{ activeTab1 }}</div>
    </LsqModuleBlock>
  </div>
  <div class="example-warp">
    <LsqModuleBlock class="module" height="200px" :hideHead="true">
      <div>隐藏头部的模块组件</div>
    </LsqModuleBlock>
    <LsqModuleBlock
      class="module"
      height="200px"
      v-model="activeTab2"
      :tabs="tabs"
      type="border-card"
    >
      <template #title>我是自定义标题</template>
      <div style="text-align: center">
        <LsqTabs :tabs="tabs" v-model="contentTab" type="border-card"></LsqTabs>
      </div>
      <div>我是内容，当前处于的tab是：{{ activeTab2 + '---' + contentTab }}</div>
    </LsqModuleBlock>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const activeTab1 = ref('one');
const activeTab2 = ref('three');
const tabs = [
  { label: '页签1', value: 'one' },
  { label: '页签2', value: 'two' },
  { label: '页签3', value: 'three' },
];
const tabChange = tab => {
  alert('点击了tab：' + JSON.stringify(tab));
};

const contentTab = ref('one');
</script>
<style lang="scss" scoped>
.example-warp {
  display: flex;
  margin-bottom: 16px;
  .module {
    flex: 1;
    overflow: hidden;
    margin-left: 50px;
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
