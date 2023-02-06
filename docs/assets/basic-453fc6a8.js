const a=`<template>\r
  <LsqDataTable :columns="columns" :data="data" />\r
</template>\r
<script setup>\r
const columns = [\r
  { key: 'name', title: '用户的姓名' },\r
  { key: 'age', title: '用户的年龄' },\r
  { key: 'address', title: '用户的地址' },\r
];\r
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
</script>\r
`;export{a as default};
