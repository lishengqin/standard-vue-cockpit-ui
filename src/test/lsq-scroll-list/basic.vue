<script setup>
const list = [
  { name: '第1行！！' },
  { name: '第2行！！' },
  { name: '第3行！！' },
  { name: '第4行！！' },
  { name: '第5行！！' },
];
</script>
<template>
  <LsqModuleBlock title="滚动列表">
    <LsqScrollList :list="list" style="height: 200px">
      <div class="item" v-for="(item, index) in list" :key="index">
        {{ item.name }}
      </div>
    </LsqScrollList>
  </LsqModuleBlock>
</template>
<style scoped>
.item {
  padding: 0 10px;
  border-bottom: 1px solid var(--border-color);
  height: 40px;
  line-height: 40px;
}
</style>
