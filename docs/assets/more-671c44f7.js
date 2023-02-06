const r=`<template>\r
  <div class="example-warp">\r
    <LsqModuleBlock class="module" title="标题" height="200px">\r
      <div>我是内容</div>\r
    </LsqModuleBlock>\r
    <LsqModuleBlock\r
      class="module"\r
      title="标题"\r
      height="200px"\r
      v-model="activeTab1"\r
      :tabs="tabs"\r
      @tabChange="tabChange"\r
    >\r
      <div>我是内容，当前处于的tab是：{{ activeTab1 }}</div>\r
    </LsqModuleBlock>\r
  </div>\r
  <div class="example-warp">\r
    <LsqModuleBlock class="module" height="200px" :hideHead="true">\r
      <div>隐藏头部的模块组件</div>\r
    </LsqModuleBlock>\r
    <LsqModuleBlock\r
      class="module"\r
      height="200px"\r
      v-model="activeTab2"\r
      :tabs="tabs"\r
      type="border-card"\r
    >\r
      <template #title>我是自定义标题</template>\r
      <div style="text-align: center">\r
        <LsqTabs :tabs="tabs" v-model="contentTab" type="border-card"></LsqTabs>\r
      </div>\r
      <div>我是内容，当前处于的tab是：{{ activeTab2 + '---' + contentTab }}</div>\r
    </LsqModuleBlock>\r
  </div>\r
</template>\r
<script setup>\r
import { ref } from 'vue';\r
const activeTab1 = ref('one');\r
const activeTab2 = ref('three');\r
const tabs = [\r
  { label: '页签1', value: 'one' },\r
  { label: '页签2', value: 'two' },\r
  { label: '页签3', value: 'three' },\r
];\r
const tabChange = tab => {\r
  alert('点击了tab：' + JSON.stringify(tab));\r
};\r
\r
const contentTab = ref('one');\r
</script>\r
<style lang="scss" scoped>\r
.example-warp {\r
  display: flex;\r
  margin-bottom: 16px;\r
  .module {\r
    flex: 1;\r
    overflow: hidden;\r
    margin-left: 50px;\r
    &:first-child {\r
      margin-left: 0;\r
    }\r
  }\r
}\r
</style>\r
`;export{r as default};
