const e=`<template>\r
  <div class="example-warp">\r
    <LsqModuleTitle>\r
      <template #title>\r
        <span>自定义标题</span>\r
        <img src="@/assets/tip.png" alt="" class="tip-img" />\r
      </template>\r
    </LsqModuleTitle>\r
    <LsqModuleTitle title="标题">\r
      <template #headRight>\r
        <span>我是右侧内容</span>\r
      </template>\r
    </LsqModuleTitle>\r
\r
    <LsqModuleTitle title="标题" :tabs="tabs" v-model="activeTab1"></LsqModuleTitle>\r
    <LsqModuleTitle\r
      class="xxx"\r
      title="标题"\r
      :tabs="tabs"\r
      v-model="activeTab2"\r
      type="border-card"\r
      @tabChange="tabChange"\r
    >\r
      <template #one>我是自定义页切1</template>\r
    </LsqModuleTitle>\r
  </div>\r
</template>\r
<script setup>\r
import { ref } from 'vue';\r
const activeTab1 = ref('one');\r
const activeTab2 = ref('two');\r
const tabs = [\r
  { label: '页签1', value: 'one' },\r
  { label: '页签2', value: 'two' },\r
  { label: '页签3', value: 'three' },\r
];\r
const tabChange = tab => {\r
  alert('点击了tab：' + JSON.stringify(tab));\r
};\r
</script>\r
<style lang="scss" scoped>\r
.example-warp {\r
  display: flex;\r
  flex-direction: column;\r
  row-gap: 16px;\r
}\r
.tip-img {\r
  width: 20px;\r
  height: 20px;\r
  margin-left: 16px;\r
}\r
</style>\r
`;export{e as default};
