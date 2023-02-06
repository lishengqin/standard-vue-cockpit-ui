const r=`<script setup>\r
const list = [{ name: '第1行！！' }, { name: '第2行！！' }, { name: '第3行！！' }];\r
</script>\r
<template>\r
  <div class="example-warp">\r
    <div class="module">\r
      <LsqModuleBlock title="滚动列表">\r
        <p>内容没有超出高度，不会自动滚动</p>\r
        <LsqScrollList :list="list" style="height: 150px">\r
          <div class="item" v-for="(item, index) in list" :key="index">\r
            {{ item.name }}\r
          </div>\r
        </LsqScrollList>\r
      </LsqModuleBlock>\r
    </div>\r
\r
    <div class="module">\r
      <LsqModuleBlock title="滚动列表">\r
        <p>修改step，改变滚动速度</p>\r
        <LsqScrollList :list="list" :step="1" style="height: 100px">\r
          <div class="item" v-for="(item, index) in list" :key="index">\r
            {{ item.name }}\r
          </div>\r
        </LsqScrollList>\r
      </LsqModuleBlock>\r
    </div>\r
\r
    <div class="module">\r
      <LsqModuleBlock title="滚动列表">\r
        <p>设置modelValue，即使大于容器高度也不滚动</p>\r
        <LsqScrollList :list="list" :modelValue="false" style="height: 100px">\r
          <div class="item" v-for="(item, index) in list" :key="index">\r
            {{ item.name }}\r
          </div>\r
        </LsqScrollList>\r
      </LsqModuleBlock>\r
    </div>\r
\r
    <div class="module">\r
      <LsqModuleBlock title="滚动列表">\r
        <p>列表为空时，可以自定义空的展示内容，默认是 暂无数据</p>\r
        <LsqScrollList :list="[]" :modelValue="false" style="height: 100px">\r
          <template #empty>\r
            <div style="text-align: center; padding-top: 10px">自定义空时展示的内容</div>\r
          </template>\r
        </LsqScrollList>\r
      </LsqModuleBlock>\r
    </div>\r
  </div>\r
</template>\r
<style scoped lang="scss">\r
.example-warp {\r
  display: flex;\r
  .module {\r
    flex: 1;\r
    margin-left: 50px;\r
    &:first-child {\r
      margin-left: 0;\r
    }\r
    p {\r
      color: rgb(235, 178, 26);\r
    }\r
  }\r
}\r
\r
.item {\r
  padding: 0 10px;\r
  border-bottom: 1px solid var(--border-color);\r
  height: 40px;\r
  line-height: 40px;\r
}\r
</style>\r
`;export{r as default};
