const r=`<template>\r
  <div class="example-warp">\r
    <div class="module">\r
      <p>表头文字比较长时候，可以文字换行</p>\r
      <LsqScrollTable :headWrap="true" :columns="columns" :list="list" style="height: 140px">\r
        <template #state="{ row }">\r
          <span>{{ stateMap[row.state] }}</span>\r
        </template>\r
      </LsqScrollTable>\r
    </div>\r
\r
    <div class="module">\r
      <p>列表文字居中，也可以在columns中单列设置【align】【headAlign】</p>\r
      <LsqScrollTable :align="'center'" :columns="columns" :list="list" style="height: 140px">\r
        <template #state="{ row }">\r
          <span>{{ stateMap[row.state] }}</span>\r
        </template>\r
      </LsqScrollTable>\r
    </div>\r
\r
    <div class="module">\r
      <p>自定义某列的内容；点击某行的回调函数</p>\r
      <LsqScrollTable\r
        :columns="columns"\r
        :list="list"\r
        style="height: 140px"\r
        @rowClicked="rowClicked"\r
      >\r
        <template #state="{ row }">\r
          <span>{{ stateMap[row.state] }}</span>\r
        </template>\r
        <template #img>\r
          <img style="display: block" src="@/assets/btnBac.png" alt="" />\r
        </template>\r
      </LsqScrollTable>\r
    </div>\r
  </div>\r
</template>\r
<script setup>\r
const stateMap = {\r
  0: '已报修',\r
  1: '使用中',\r
  2: '申请报废',\r
};\r
const columns = [\r
  { label: '序号', type: 'index', width: '60px' },\r
  { label: '这是设备姓名，列文字比较长', prop: 'name', width: '140px' },\r
  { label: '使用年限(年)', prop: 'year' },\r
  { label: '状态', prop: 'state' },\r
  { label: '设备图片', prop: 'img' },\r
];\r
const list = [\r
  { name: '设备1', year: '3', state: '1', className: 'custom-row' },\r
  { name: '设备2', year: '10', state: '2' },\r
  { name: '设备3', year: '5', state: '0' },\r
  { name: '设备4', year: '1', state: '1' },\r
  { name: '设备5', year: '12', state: '2' },\r
];\r
const rowClicked = row => {\r
  console.log('点击了当前行：', row);\r
};\r
</script>\r
<style lang="scss" scoped>\r
.example-warp {\r
  display: flex;\r
  .module {\r
    flex: 1;\r
    margin-left: 50px;\r
    &:first-child {\r
      margin-left: 0;\r
    }\r
    p {\r
      color: rgb(235, 178, 26);\r
    }\r
    .ac-scroll-list {\r
      border: 1px solid #ff6d6e;\r
    }\r
  }\r
}\r
</style>\r
`;export{r as default};
