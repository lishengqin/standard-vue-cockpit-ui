<script setup>
const list = [
  { name: '第1行！！' },
  { name: '第2行！！' },
  { name: '第3行！！' },
  { name: '第4行！！' },
  { name: '第5行！！' },
];

const stateMap = {
  0: '已报修',
  1: '使用中',
  2: '申请报废',
};
const columns = [
  { label: '序号', type: 'index', width: '60px' },
  { label: '设备姓名', prop: 'name' },
  { label: '使用年限(年)', prop: 'year' },
  { label: '状态', prop: 'state' },
];
const tableList = [
  { name: '设备1', year: '3', state: '1', className: 'custom-row' },
  { name: '设备2', year: '10', state: '2' },
  { name: '设备3', year: '5', state: '0' },
  { name: '设备4', year: '1', state: '1' },
  { name: '设备5', year: '12', state: '2' },
];
</script>
<template>
  <div style="margin-left: 30px">
    <LsqButton>按钮</LsqButton>

    <div style="width: 300px; margin-top: 100px">
      <p style="margin-bottom: 10px">自动滚动列表</p>
      <LsqScrollList :list="list" style="height: 200px">
        <div class="item" v-for="(item, index) in list" :key="index">
          {{ item.name }}
        </div>
      </LsqScrollList>
    </div>

    <div style="width: 400px; margin-top: 100px">
      <p style="margin-bottom: 10px">自动滚动表格</p>
      <LsqScrollTable :columns="columns" :list="tableList" style="height: 140px">
        <template #state="{ row }">
          <span>{{ stateMap[row.state] }}</span>
        </template>
      </LsqScrollTable>
    </div>
  </div>
</template>

<style scoped>
.item {
  padding: 0 10px;
  border-bottom: 1px solid var(--border-color);
  height: 40px;
  line-height: 40px;
}
</style>
