<template>
  <LsqModuleBlock title="查询表单 ——  有必填的 ——  一行放4个">
    <LsqSearchForm v-model:searchForm="searchForm" :columnCount="4">
      <template #searchForm>
        <n-select
          label="类型"
          valueKey="type"
          filterable
          :required="true"
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
        <n-input label="" valueKey="keyword" type="text" placeholder="关键字查询" />
      </template>
    </LsqSearchForm>
  </LsqModuleBlock>
</template>
<script setup>
import { ref } from 'vue';
import { NSelect, NInput } from 'naive-ui';
const searchForm = ref({ a: 'dewd', type: 'one', state: 'two', keyword: 'dewdewd' });
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
</script>
