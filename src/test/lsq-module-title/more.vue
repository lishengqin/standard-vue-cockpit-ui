<template>
  <div class="example-warp">
    <LsqModuleTitle>
      <template #title>
        <span>自定义标题</span>
        <img src="@/assets/tip.png" alt="" class="tip-img" />
      </template>
    </LsqModuleTitle>
    <LsqModuleTitle title="标题">
      <template #headRight>
        <span>我是右侧内容</span>
      </template>
    </LsqModuleTitle>

    <LsqModuleTitle title="标题" :tabs="tabs" v-model="activeTab1"></LsqModuleTitle>
    <LsqModuleTitle
      class="xxx"
      title="标题"
      :tabs="tabs"
      v-model="activeTab2"
      type="border-card"
      @tabChange="tabChange"
    >
      <template #one>我是自定义页切1</template>
    </LsqModuleTitle>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const activeTab1 = ref('one');
const activeTab2 = ref('two');
const tabs = [
  { label: '页签1', value: 'one' },
  { label: '页签2', value: 'two' },
  { label: '页签3', value: 'three' },
];
const tabChange = tab => {
  alert('点击了tab：' + JSON.stringify(tab));
};
</script>
<style lang="scss" scoped>
.example-warp {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
.tip-img {
  width: 20px;
  height: 20px;
  margin-left: 16px;
}
</style>
