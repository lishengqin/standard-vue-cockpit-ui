const t=`<template>\r
  <LsqScrollTable :columns="columns" :list="list" style="height: 140px">\r
    <template #state="{ row }">\r
      <span>{{ stateMap[row.state] }}</span>\r
    </template>\r
  </LsqScrollTable>\r
</template>\r
<script setup>\r
const stateMap = {\r
  0: '已报修',\r
  1: '使用中',\r
  2: '申请报废',\r
};\r
const columns = [\r
  { label: '序号', type: 'index', width: '60px' },\r
  { label: '设备姓名', prop: 'name' },\r
  { label: '使用年限(年)', prop: 'year' },\r
  { label: '状态', prop: 'state' },\r
];\r
const list = [\r
  { name: '设备1', year: '3', state: '1', className: 'custom-row' },\r
  { name: '设备2', year: '10', state: '2' },\r
  { name: '设备3', year: '5', state: '0' },\r
  { name: '设备4', year: '1', state: '1' },\r
  { name: '设备5', year: '12', state: '2' },\r
];\r
</script>\r
`;export{t as default};
