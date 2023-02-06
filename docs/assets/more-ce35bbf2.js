const r=`<template>\r
  <div class="example-warp">\r
    <LsqTabs type="border-card" v-model="active1" :tabs="tabs1" />\r
    <LsqTabs type="card" v-model="active2" :tabs="tabs1" />\r
    <LsqTabs type="card" v-model="active3" :tabs="tabs1">\r
      <template #one="{ tab }">\r
        <div style="display: flex; align-items: center">\r
          <img class="tip-img" src="@/assets/tip.png" alt="" />\r
          {{ '自定义' + tab.label }}\r
        </div>\r
      </template>\r
    </LsqTabs>\r
  </div>\r
</template>\r
<script setup>\r
import { ref } from 'vue';\r
const active1 = ref('one');\r
const tabs1 = [\r
  { label: '页切1', value: 'one' },\r
  { label: '页切2', value: 'two' },\r
  { label: '页切3', value: 'three' },\r
];\r
\r
const active2 = ref('one');\r
const active3 = ref('one');\r
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
  margin-right: 8px;\r
}\r
</style>\r
`;export{r as default};
