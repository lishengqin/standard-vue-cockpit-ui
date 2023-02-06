const n=`<template>\r
  <div class="example-warp">\r
    <LsqModuleBlock title="列表不分页">\r
      <LsqDataTable :columns="columns" :data="data" :pagination="false" />\r
    </LsqModuleBlock>\r
    <LsqModuleBlock title="列表前端分页,每页展示6条">\r
      <LsqDataTable :columns="columns" :data="data" maxHeight="270px" :pagination="pagination1" />\r
    </LsqModuleBlock>\r
    <LsqModuleBlock title="后端分页查询">\r
      <LsqDataTable :columns="columns2" :asyncGetData="asyncGetData" />\r
    </LsqModuleBlock>\r
  </div>\r
</template>\r
<script setup>\r
const columns = [\r
  { key: 'name', title: '用户的姓名' },\r
  { key: 'age', title: '用户的年龄' },\r
  { key: 'address', title: '用户的地址', ellipsis: false },\r
];\r
const pagination1 = {\r
  pageSize: 6,\r
};\r
const data = [\r
  {\r
    name: '张三1',\r
    age: '18岁',\r
    address:\r
      '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12',\r
  },\r
  { name: '张三2', age: '18岁', address: '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12' },\r
  { name: '张三3', age: '18岁', address: '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12' },\r
  { name: '张三4', age: '18岁', address: '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12' },\r
  { name: '张三5', age: '18岁', address: '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12' },\r
  { name: '张三6', age: '18岁', address: '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12' },\r
  { name: '张三7', age: '18岁', address: '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12' },\r
];\r
\r
/* 异步请求列表 */\r
const columns2 = [\r
  { type: 'index', title: '序号' },\r
  { key: 'name', title: '用户的姓名' },\r
  { key: 'age', title: '用户的年龄' },\r
  { key: 'address', title: '用户的地址' },\r
];\r
const asyncGetData = ({ page, pageSize }) => {\r
  let total = 40;\r
  let list = new Array(pageSize).fill(0).map((one, index) => {\r
    return {\r
      name: pageSize * (page - 1) + index + 1 + '张三',\r
      age: '18岁',\r
      address:\r
        '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12',\r
    };\r
  });\r
  return { data: list, total: total };\r
};\r
</script>\r
<style lang="scss" scoped>\r
.example-warp {\r
  display: flex;\r
  flex-direction: column;\r
  row-gap: 16px;\r
}\r
</style>\r
`;export{n as default};
