const n=`<template>\r
  <div class="example-warp">\r
    <lsqModuleBlock title="自定义某一项的name" class="module">\r
      <LsqDataGroup :list="list" :data="data">\r
        <template #oneName="{ name }">\r
          <span class="rect"></span>\r
          <span>{{ name }}</span>\r
        </template>\r
      </LsqDataGroup>\r
    </lsqModuleBlock>\r
\r
    <lsqModuleBlock title="示例2-在unit后append内容" class="module">\r
      <LsqDataGroup :list="list" :data="data" :columnCount="2">\r
        <template #rateAppend>\r
          <img\r
            src="../../assets/up.png"\r
            alt=""\r
            style="width: 20px; height: 20px; margin-left: 8px"\r
          />\r
        </template>\r
      </LsqDataGroup>\r
    </lsqModuleBlock>\r
  </div>\r
  <div class="example-warp">\r
    <lsqModuleBlock title="展示类型type：type2" class="module">\r
      <LsqDataGroup :list="list" :data="data" type="type2">\r
        <template #oneName="{ name }">\r
          <span class="rect"></span>\r
          <span>{{ name }}</span>\r
        </template>\r
      </LsqDataGroup>\r
    </lsqModuleBlock>\r
    <lsqModuleBlock title="展示类型type：type3" class="module">\r
      <LsqDataGroup :list="list" :data="data" type="type3"></LsqDataGroup>\r
    </lsqModuleBlock>\r
  </div>\r
  <div class="example-warp">\r
    <lsqModuleBlock title="展示类型type：type4" class="module">\r
      <LsqDataGroup :list="list" :data="data" type="type4"></LsqDataGroup>\r
    </lsqModuleBlock>\r
    <lsqModuleBlock title="" class="module"></lsqModuleBlock>\r
  </div>\r
</template>\r
<script setup>\r
import dataGroupItemBacImg from '@/assets/dataGroupItemBac.png';\r
const list = [\r
  {\r
    name: '已决赔款',\r
    value: '2.22',\r
    prop: 'one',\r
    unit: '亿元',\r
  },\r
  {\r
    name: '未决赔款',\r
    value: '2.22',\r
    unit: '亿元',\r
  },\r
  {\r
    name: '赔付户数',\r
    value: '2',\r
    unit: '户',\r
  },\r
  {\r
    name: '所占比例',\r
    prop: 'rate',\r
    unit: '%',\r
  },\r
];\r
const data = {\r
  rate: '3.56',\r
};\r
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
  .rect {\r
    width: 10px;\r
    height: 10px;\r
    display: inline-block;\r
    background: #ebb21a;\r
    margin-right: 8px;\r
  }\r
}\r
</style>\r
`;export{n as default};
