<template>
  <LsqModuleBlock title="查询表单">
    <LsqSearchForm
      v-model:searchForm="searchForm"
      @reset="reset"
      @search="search"
      labelWidth="120px"
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
        <n-select
          label="状态"
          valueKey="state"
          filterable
          clearable
          placeholder="选择状态"
          :options="searchState.stateOptions"
        />
        <n-select
          label="状态"
          valueKey="state"
          filterable
          clearable
          placeholder="选择状态"
          :options="searchState.stateOptions"
        />
        <n-select
          label="状态"
          valueKey="state"
          filterable
          clearable
          placeholder="选择状态"
          :options="searchState.stateOptions"
        />
        <n-input label="关键字" valueKey="keyword" type="text" placeholder="关键字查询" />
      </template>
    </LsqSearchForm>
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
const reset = () => {
  window.$message.success('点击重置按钮啦');
  console.log(searchForm.value);
};
const search = () => {
  window.$message.success('点击查询按钮啦');
  console.log(searchForm.value);
};
</script>
