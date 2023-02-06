<template>
  <LsqDataTable :columns="columns" :data="data" />
</template>
<script setup>
const columns = [
  { key: 'name', title: '用户的姓名' },
  { key: 'age', title: '用户的年龄' },
  { key: 'address', title: '用户的地址' },
];
const data = [
  {
    name: '张三1',
    age: '18岁',
    address:
      '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12',
  },
  { name: '张三2', age: '18岁', address: '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12' },
  { name: '张三3', age: '18岁', address: '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12' },
  { name: '张三4', age: '18岁', address: '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12' },
  { name: '张三5', age: '18岁', address: '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12' },
  { name: '张三6', age: '18岁', address: '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12' },
  { name: '张三7', age: '18岁', address: '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12' },
];
</script>
