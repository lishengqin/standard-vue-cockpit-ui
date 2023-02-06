const e=`<template>\r
  <div>\r
    <LsqButton @click="openDialog">打开弹窗</LsqButton>\r
    <LsqModal\r
      teleport="#app"\r
      title="弹窗的标题"\r
      width="1000px"\r
      height="600px"\r
      v-model:visible="visible"\r
    >\r
      <div>\r
        <LsqModuleBlock title="查询表单">\r
          <LsqSearchTable\r
            v-model:searchForm="searchForm"\r
            labelWidth="120px"\r
            :columns="columns"\r
            :asyncGetData="asyncGetData"\r
            @reset="reset"\r
            @search="search"\r
            ref="acSearchTable"\r
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
              <n-input label="关键字" valueKey="keyword" type="text" placeholder="关键字查询" />\r
            </template>\r
            <template #centerContent>中间我自定义的内容，自己增加的，瞎逼逼的</template>\r
          </LsqSearchTable>\r
        </LsqModuleBlock>\r
      </div>\r
    </LsqModal>\r
  </div>\r
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
const columns = [\r
  { type: 'index', title: '序号' },\r
  { key: 'keyword', title: '关键字' },\r
  { key: 'name', title: '用户的姓名' },\r
  { key: 'age', title: '用户的年龄' },\r
  { key: 'address', title: '用户的地址' },\r
];\r
\r
const asyncGetData = query => {\r
  let pageSize = query.pageSize;\r
  let page = query.page;\r
  let total = 40;\r
  let list = new Array(pageSize).fill(0).map((one, index) => {\r
    return {\r
      name: pageSize * (page - 1) + index + 1 + '张三',\r
      age: '18岁',\r
      keyword: query.keyword,\r
      address:\r
        '浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12',\r
    };\r
  });\r
  return { data: list, total: total };\r
};\r
const acSearchTable = ref();\r
const reset = () => {\r
  console.log('重置');\r
};\r
const search = () => {\r
  console.log('查询');\r
};\r
\r
const visible = ref(false);\r
const openDialog = () => {\r
  visible.value = true;\r
};\r
</script>\r
`;export{e as default};
