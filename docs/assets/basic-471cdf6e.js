const n=`<script setup>\r
const list = [\r
  { name: '第1行！！' },\r
  { name: '第2行！！' },\r
  { name: '第3行！！' },\r
  { name: '第4行！！' },\r
  { name: '第5行！！' },\r
];\r
</script>\r
<template>\r
  <LsqModuleBlock title="滚动列表">\r
    <LsqScrollList :list="list" style="height: 200px">\r
      <div class="item" v-for="(item, index) in list" :key="index">\r
        {{ item.name }}\r
      </div>\r
    </LsqScrollList>\r
  </LsqModuleBlock>\r
</template>\r
<style scoped>\r
.item {\r
  padding: 0 10px;\r
  border-bottom: 1px solid var(--border-color);\r
  height: 40px;\r
  line-height: 40px;\r
}\r
</style>\r
`;export{n as default};
