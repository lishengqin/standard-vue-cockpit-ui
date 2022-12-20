<template>
  <LsqScrollTable :columns="columns" :list="list" style="height: 140px">
    <template #state="{ row }">
      <span>{{ stateMap[row.state] }}</span>
    </template>
  </LsqScrollTable>
</template>
<script setup>
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
const list = [
  { name: '设备1', year: '3', state: '1', className: 'custom-row' },
  { name: '设备2', year: '10', state: '2' },
  { name: '设备3', year: '5', state: '0' },
  { name: '设备4', year: '1', state: '1' },
  { name: '设备5', year: '12', state: '2' },
];
</script>
