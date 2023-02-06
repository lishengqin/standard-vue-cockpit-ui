const r=`<template>\r
  <div class="example-warp">\r
    <LsqModuleBlock class="module" title="柱状图">\r
      <LsqBarLineChart style="height: 200px" :chartOptions="chartOptions1"></LsqBarLineChart>\r
    </LsqModuleBlock>\r
    <LsqModuleBlock class="module" title="折现图">\r
      <LsqBarLineChart style="height: 200px" :chartOptions="chartOptions2"></LsqBarLineChart>\r
    </LsqModuleBlock>\r
    <LsqModuleBlock class="module" title="混合图表">\r
      <LsqBarLineChart style="height: 200px" :chartOptions="chartOptions3"></LsqBarLineChart>\r
    </LsqModuleBlock>\r
  </div>\r
  <div class="example-warp">\r
    <LsqModuleBlock class="module" title="横向折线图">\r
      <LsqBarLineChart style="height: 200px" :chartOptions="chartOptions4"></LsqBarLineChart>\r
    </LsqModuleBlock>\r
    <LsqModuleBlock class="module" title="横向柱状图">\r
      <LsqBarLineChart style="height: 200px" :chartOptions="chartOptions5"></LsqBarLineChart>\r
    </LsqModuleBlock>\r
    <LsqModuleBlock class="module"></LsqModuleBlock>\r
  </div>\r
</template>\r
<script setup>\r
import { computed } from 'vue';\r
const chartOptions1 = computed(() => {\r
  let dataX = ['2020', '2021', '2022', '2023'];\r
  let seriesData1 = [10, 45, 70, 22];\r
  return {\r
    xAxis: { data: dataX },\r
    yAxis: {\r
      name: '亩',\r
    },\r
    grid: { top: '20%' },\r
    series: [\r
      {\r
        unit: '亩',\r
        name: '同比分析',\r
        barWidth: 36,\r
        type: 'bar',\r
        itemStyle: {\r
          color: '#EBB21A',\r
        },\r
        data: seriesData1,\r
      },\r
    ],\r
  };\r
});\r
const chartOptions2 = computed(() => {\r
  let dataX = ['2020', '2021', '2022', '2023'];\r
  let seriesData1 = [10, 45, 70, 22];\r
  return {\r
    xAxis: { data: dataX },\r
    yAxis: {\r
      name: '亩',\r
    },\r
    grid: { top: '20%' },\r
    series: [\r
      {\r
        unit: '亩',\r
        name: '同比分析',\r
        barWidth: 36,\r
        type: 'line',\r
        lineStyle: {\r
          color: '#ff6d6e',\r
        },\r
        itemStyle: {\r
          color: '#ff6d6e',\r
        },\r
        data: seriesData1,\r
      },\r
    ],\r
  };\r
});\r
\r
const chartOptions3 = computed(() => {\r
  let dataX = ['2020', '2021', '2022', '2023'];\r
  let seriesData1 = [10, 45, 70, 22];\r
  let seriesData2 = [120, 145, 170, 122];\r
  return {\r
    xAxis: { data: dataX },\r
    yAxis: [\r
      {\r
        name: '元',\r
      },\r
    ],\r
    grid: { top: '20%' },\r
    series: [\r
      {\r
        unit: '元',\r
        name: '支出',\r
        type: 'line',\r
        smooth: false,\r
        itemStyle: {\r
          color: '#03C3FF',\r
        },\r
        data: seriesData1,\r
      },\r
      {\r
        unit: '元',\r
        name: '收入',\r
        type: 'bar',\r
        lineStyle: {\r
          color: '#ff6d6e',\r
        },\r
        itemStyle: {\r
          color: '#ff6d6e',\r
        },\r
        data: seriesData2,\r
      },\r
    ],\r
  };\r
});\r
const chartOptions4 = computed(() => {\r
  let dataX = ['2020', '2021', '2022', '2023'];\r
  let seriesData1 = [10, 45, 70, 22];\r
  return {\r
    xAxis: { type: 'value' },\r
    yAxis: {\r
      data: dataX,\r
      type: 'category',\r
    },\r
    grid: { top: '20%' },\r
    series: [\r
      {\r
        unit: '亩',\r
        name: '同比分析',\r
        type: 'line',\r
        lineStyle: {\r
          color: '#ff6d6e',\r
        },\r
        itemStyle: {\r
          color: '#ff6d6e',\r
        },\r
        data: seriesData1,\r
      },\r
    ],\r
  };\r
});\r
const chartOptions5 = computed(() => {\r
  let dataX = ['2020', '2021', '2022', '2023'];\r
  let seriesData1 = [10, 45, 70, 22];\r
  return {\r
    xAxis: { name: '亩', type: 'value', nameLocation: 'end' },\r
    yAxis: {\r
      data: dataX,\r
      type: 'category',\r
    },\r
    grid: { top: '20%' },\r
    series: [\r
      {\r
        unit: '亩',\r
        name: '同比分析',\r
        type: 'bar',\r
        itemStyle: {\r
          color: '#ff6d6e',\r
        },\r
        data: seriesData1,\r
      },\r
    ],\r
  };\r
});\r
</script>\r
\r
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
