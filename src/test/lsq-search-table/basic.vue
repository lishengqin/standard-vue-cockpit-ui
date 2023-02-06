<template>
  <LsqModuleBlock title="查询表单">
    <LsqSearchTable
      v-model:searchForm="searchForm"
      labelWidth="120px"
      :columns="columns"
      :asyncGetData="asyncGetData"
      @reset="reset"
      @search="search"
      ref="acSearchTable"
    >
      <template #searchForm>
        <n-select
          label="类型"
          valueKey="type"
          filterable
          clearable
          placeholder="选择类型"
          :options="searchState.typeOptions"
        />
        <n-input label="关键字" valueKey="keyword" type="text" placeholder="关键字查询" />
      </template>
      <template #centerContent>中间我自定义的内容，自己增加的，瞎逼逼的</template>
    </LsqSearchTable>
  </LsqModuleBlock>
</template>
<script setup>
import { ref } from 'vue';
import { NSelect, NInput } from 'naive-ui';
const searchForm = ref({ type: 'one', state: 'two', keyword: 'dewdewd' });
const searchState = {
  typeOptions: [
    { label: '选项1', value: 'one' },
    { label: '选项2', value: 'two' },
  ],
  stateOptions: [
    { label: '状态1', value: 'one' },
    { label: '状态2', value: 'two' },
  ],
};
const columns = [
  { type: 'index', title: '序号' },
  { key: 'keyword', title: '关键字' },
  { key: 'name', title: '用户的姓名' },
  { key: 'age', title: '用户的年龄' },
  { key: 'address', title: '用户的地址' },
];

const asyncGetData = query => {
  let pageSize = query.pageSize;
  let page = query.page;
  let total = 40;
  let list = new Array(pageSize).fill(0).map((one, index) => {
    return {
      name: pageSize * (page - 1) + index + 1 + '张三',
      age: '18岁',
      keyword: query.keyword,
      address:
        '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12',
    };
  });
  return { data: list, total: total };
};
const acSearchTable = ref();
const reset = () => {
  console.log('重置');
};
const search = () => {
  console.log('查询');
};
</script>
