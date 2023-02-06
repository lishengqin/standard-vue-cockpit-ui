const e=`<template>\r
  <LsqModuleBlock title="查询表单">\r
    <LsqSearchForm\r
      v-model:searchForm="searchForm"\r
      @reset="reset"\r
      @search="search"\r
      labelWidth="120px"\r
    >\r
      <template #searchForm>\r
        <n-select\r
          label="类型"\r
          valueKey="type"\r
          filterable\r
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
        <n-select\r
          label="状态"\r
          valueKey="state"\r
          filterable\r
          clearable\r
          placeholder="选择状态"\r
          :options="searchState.stateOptions"\r
        />\r
        <n-select\r
          label="状态"\r
          valueKey="state"\r
          filterable\r
          clearable\r
          placeholder="选择状态"\r
          :options="searchState.stateOptions"\r
        />\r
        <n-input label="关键字" valueKey="keyword" type="text" placeholder="关键字查询" />\r
      </template>\r
    </LsqSearchForm>\r
  </LsqModuleBlock>\r
</template>\r
<script setup>\r
import { ref } from 'vue';\r
import { NSelect, NInput } from 'naive-ui';\r
const searchForm = ref({ type: 'one', state: 'two', keyword: 'dewdewd' });\r
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
const reset = () => {\r
  window.$message.success('点击重置按钮啦');\r
  console.log(searchForm.value);\r
};\r
const search = () => {\r
  window.$message.success('点击查询按钮啦');\r
  console.log(searchForm.value);\r
};\r
</script>\r
`;export{e as default};
