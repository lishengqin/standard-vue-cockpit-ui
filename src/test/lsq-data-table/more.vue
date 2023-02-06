<template>
  <div class="example-warp">
    <LsqModuleBlock title="列表不分页">
      <LsqDataTable :columns="columns" :data="data" :pagination="false" />
    </LsqModuleBlock>
    <LsqModuleBlock title="列表前端分页,每页展示6条">
      <LsqDataTable :columns="columns" :data="data" maxHeight="270px" :pagination="pagination1" />
    </LsqModuleBlock>
    <LsqModuleBlock title="后端分页查询">
      <LsqDataTable :columns="columns2" :asyncGetData="asyncGetData" />
    </LsqModuleBlock>
  </div>
</template>
<script setup>
const columns = [
  { key: 'name', title: '用户的姓名' },
  { key: 'age', title: '用户的年龄' },
  { key: 'address', title: '用户的地址', ellipsis: false },
];
const pagination1 = {
  pageSize: 6,
};
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

/* 异步请求列表 */
const columns2 = [
  { type: 'index', title: '序号' },
  { key: 'name', title: '用户的姓名' },
  { key: 'age', title: '用户的年龄' },
  { key: 'address', title: '用户的地址' },
];
const asyncGetData = ({ page, pageSize }) => {
  let total = 40;
  let list = new Array(pageSize).fill(0).map((one, index) => {
    return {
      name: pageSize * (page - 1) + index + 1 + '张三',
      age: '18岁',
      address:
        '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12',
    };
  });
  return { data: list, total: total };
};
</script>
<style lang="scss" scoped>
.example-warp {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
</style>
