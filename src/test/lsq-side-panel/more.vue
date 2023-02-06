<template>
  <div class="example-warp">
    <div class="module">
      <p>左侧默认展示，而且还可以点击按钮手动控制展开收起</p>
      <LsqButton @click="changeLeftPanel">手动触发左面板展开收起</LsqButton>
      <LsqSidePanel
        ref="acSidePanelLeftRef"
        v-model="leftExpand"
        :hideArrow="false"
        :offset="25"
        width="200px"
        height="400px"
      >
        我是自定义的左侧内容
      </LsqSidePanel>
    </div>
    <div class="module">
      <p>右侧面板默认收起</p>
      <LsqSidePanel
        v-model="rightExpand"
        :hideArrow="false"
        :offset="25"
        width="200px"
        height="400px"
        position="right"
      >
        我是自定义的右侧内容
      </LsqSidePanel>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
// 左侧
const leftExpand = ref(true);
const acSidePanelLeftRef = ref();
const changeLeftPanel = () => {
  acSidePanelLeftRef.value?.showChange(!leftExpand.value);
};
// 右侧
const rightExpand = ref(false);
</script>
<style lang="scss" scoped>
.example-warp {
  display: flex;
  justify-content: space-between;
  p {
    color: rgb(235, 178, 26);
  }
  .ac-button {
    margin-bottom: 20px;
  }
}
</style>
