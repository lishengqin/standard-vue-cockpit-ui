const n=`<template>\r
  <div class="example-warp">\r
    <LsqModuleBlock style="max-width: 482px" class="module" title="饼状图-1列图例">\r
      <LsqPieChart style="height: 200px" legendNameWidth="90px" :data="chartData1"></LsqPieChart>\r
    </LsqModuleBlock>\r
    <LsqModuleBlock style="max-width: 450px" class="module" title="饼状图-图例文字过多换行">\r
      <LsqPieChart\r
        style="height: 200px"\r
        legendNameWidth="80px"\r
        :legendWrap="true"\r
        :data="chartData2"\r
        :emphasis="emphasis"\r
      ></LsqPieChart>\r
    </LsqModuleBlock>\r
  </div>\r
</template>\r
<script setup>\r
import { computed, onMounted, ref } from 'vue';\r
\r
import { chunk } from 'lodash-es';\r
const chartData1 = computed(() => {\r
  let list = [\r
    {\r
      name: '类型1',\r
      value: 100,\r
    },\r
    { name: '类型2', value: 50 },\r
    { name: '类型3', value: 70 },\r
  ];\r
  return list;\r
});\r
\r
const chartData2 = computed(() => {\r
  let list = [\r
    {\r
      name: '1我是超多文字的文字文字类型1',\r
      value: 100,\r
    },\r
    { name: '2我是超多文字的文字文字类型1', value: 50 },\r
    { name: '3我是超多文字的文字文字类型1', value: 70 },\r
  ];\r
  return list;\r
});\r
const emphasis = computed(() => {\r
  return {\r
    label: {\r
      color: '#90B6D2',\r
      show: true,\r
      fontSize: '14',\r
      formatter: function (v) {\r
        let wrapLength = 8;\r
        let text = '\\n' + v.name;\r
        if (v.name.length >= wrapLength) {\r
          let list = chunk(v.name.split(''), wrapLength);\r
          text = list.map(one => one.join('')).join('\\n');\r
        }\r
        return '{value|' + +v.percent + '%' + '\\n}' + '{v|' + text + '}';\r
      },\r
      rich: {\r
        value: {\r
          color: '#27E0FD',\r
          fontSize: '32',\r
          fontWeight: 'bold',\r
          padding: [8, 8, 0, 0],\r
          display: 'block',\r
        },\r
        v: {\r
          color: '#90B6D2',\r
          fontSize: '14',\r
          lineHeight: 16,\r
          padding: [-4, 8, 0, 0],\r
        },\r
      },\r
    },\r
  };\r
});\r
</script>\r
<style lang="scss" scoped>\r
.example-warp {\r
  display: flex;\r
  margin-bottom: 16px;\r
  .module {\r
    flex: 1;\r
    margin-left: 50px;\r
    &:first-child {\r
      margin-left: 0;\r
    }\r
  }\r
}\r
</style>\r
`;export{n as default};
