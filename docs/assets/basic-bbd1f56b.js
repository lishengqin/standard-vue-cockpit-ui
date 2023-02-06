const n=`<template>\r
  <div class="example-warp">\r
    <lsqModuleBlock title="示例1" class="module">\r
      <LsqDataGroup :list="list" :data="data" />\r
    </lsqModuleBlock>\r
\r
    <lsqModuleBlock title="示例2-2列" class="module">\r
      <LsqDataGroup :list="list" :data="data" :columnCount="2" />\r
    </lsqModuleBlock>\r
  </div>\r
  <div class="example-warp">\r
    <lsqModuleBlock title="示例3-2列且居中" class="module">\r
      <LsqDataGroup :list="list" :data="data" :columnCount="2" justifyContent="center" />\r
    </lsqModuleBlock>\r
\r
    <lsqModuleBlock title="示例4-每项样式自定义" class="module">\r
      <LsqDataGroup\r
        :list="list"\r
        :data="data"\r
        :columnCount="2"\r
        justifyContent="center"\r
        :itemStyle="itemStyle"\r
      />\r
    </lsqModuleBlock>\r
  </div>\r
</template>\r
<script setup>\r
import dataGroupItemBacImg from '@/assets/dataGroupItemBac.png';\r
\r
const list = [\r
  {\r
    name: '已决赔款',\r
    value: '2.22',\r
    unit: '亿元',\r
  },\r
  {\r
    name: '未决赔款',\r
    value: '2.22',\r
    unit: '亿元',\r
  },\r
  {\r
    name: '赔付户数',\r
    value: '2.22',\r
    unit: '万户',\r
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
const itemStyle = {\r
  width: '310px',\r
  height: '80px',\r
  padding: '0 30px',\r
  background: 'url(' + dataGroupItemBacImg + ') transparent no-repeat',\r
  'background-size': '100% 100%',\r
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
}\r
</style>\r
`;export{n as default};
