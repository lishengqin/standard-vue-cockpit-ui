const e=`<template>\r
  <LsqModuleBlock title="查询表单 ——  有必填的 ——  一行放4个">\r
    <LsqSearchForm v-model:searchForm="searchForm" :columnCount="4">\r
      <template #searchForm>\r
        <n-select\r
          label="类型"\r
          valueKey="type"\r
          filterable\r
          :required="true"\r
          clearable\r
          placeholder="选择类型"\r
          :options="searchState.typeOptions"\r
        />\r
        <n-select\r
          label="状态"\r
          valueKey="state"\r
          filterable\r
          clearable\r
          placeholder="选择状态"\r
          :options="searchState.stateOptions"\r
        />\r
        <n-input label="" valueKey="keyword" type="text" placeholder="关键字查询" />\r
      </template>\r
    </LsqSearchForm>\r
  </LsqModuleBlock>\r
</template>\r
<script setup>\r
import { ref } from 'vue';\r
import { NSelect, NInput } from 'naive-ui';\r
const searchForm = ref({ a: 'dewd', type: 'one', state: 'two', keyword: 'dewdewd' });\r
const searchState = {\r
  typeOptions: [\r
    { label: '选项1', value: 'one' },\r
    { label: '选项2', value: 'two' },\r
  ],\r
  stateOptions: [\r
    { label: '状态1', value: 'one' },\r
    { label: '状态2', value: 'two' },\r
  ],\r
};\r
</script>\r
`;export{e as default};
