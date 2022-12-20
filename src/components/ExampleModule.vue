<template>
  <div class="example-module">
    <div class="content">
      <component :is="render"></component>
    </div>
    <div class="op-btns">
      <span @click="e => clipboard(comStr, e)">复制代码</span>
      <span @click="changeShowExampleSource">
        {{ showExampleSource ? '隐藏源码' : '查看源码' }}
      </span>
    </div>
    <template v-if="showExampleSource">
      <div class="example-source">{{ comStr }}</div>
      <div class="example-float-control" @click="changeShowExampleSource">隐藏源代码</div>
    </template>
  </div>
</template>
<script setup>
import { computed, getCurrentInstance, onMounted, ref } from 'vue';
import clipboard from '@/utils/clipboard';
import { useRoute } from 'vue-router';
const Route = useRoute();
const instance = getCurrentInstance();
// 渲染组件
const render = ref(null);
// 渲染组件的文本
const comStr = ref('');
const getRenderAndStr = () => {
  import(`../test/${Route.name}/${instance.attrs.filename}.vue`).then(renderModule => {
    render.value = renderModule.default;
  });
  import(`../test/${Route.name}/${instance.attrs.filename}.vue?raw`).then(comStrModule => {
    comStr.value = comStrModule.default;
  });
};
onMounted(() => {
  getRenderAndStr();
});
// 源码展示收起
const showExampleSource = ref(false);
const changeShowExampleSource = () => {
  showExampleSource.value = !showExampleSource.value;
};
</script>
<style lang="scss" scoped>
.example-module {
  border: 1px solid var(--border-color);
  overflow: hidden;
  border-radius: 4px;
  .content {
    // background: #062152;
    padding: 24px;
    border-bottom: 1px solid var(--border-color);
  }
  .op-btns {
    padding: 8px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span {
      background: #062152;
      padding: 4px 8px;
      border-radius: 2px;
      margin-left: 16px;
      color: #ebb21a;
      cursor: pointer;
    }
  }
  .example-source {
    padding: 16px;
    white-space: pre;
    background: #262727;
  }
  .example-float-control {
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    cursor: pointer;
  }
}
</style>
