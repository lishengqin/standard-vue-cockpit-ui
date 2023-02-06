const r=`<template>\r
  <div class="example-warp">\r
    <LsqModuleBlock class="module" title="饼状图-不要图例-而且绑定了图表点击事件">\r
      <LsqPieChart\r
        ref="pieChart"\r
        style="height: 200px"\r
        :showLegend="false"\r
        :data="chartData1"\r
      ></LsqPieChart>\r
    </LsqModuleBlock>\r
    <LsqModuleBlock class="module" title="饼状图-2列图例">\r
      <LsqPieChart\r
        style="height: 200px"\r
        legendNameWidth="60px"\r
        legendItemWidth="200px"\r
        :data="chartData2"\r
        :legendColumnCount="2"\r
        videoLeft="15%"\r
      ></LsqPieChart>\r
    </LsqModuleBlock>\r
  </div>\r
  <div class="example-warp">\r
    <LsqModuleBlock class="module" title="自定义饼状图属性">\r
      <LsqPieChart\r
        style="height: 200px"\r
        :showLegend="false"\r
        :chartOptions="chartOptions"\r
        :data="chartData3"\r
        :hideVideo="true"\r
      ></LsqPieChart>\r
    </LsqModuleBlock>\r
    <LsqModuleBlock class="module" title=""></LsqModuleBlock>\r
  </div>\r
</template>\r
<script setup>\r
import { computed, ref, onMounted } from 'vue';\r
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
const pieChart = ref();\r
onMounted(() => {\r
  pieChart.value.chart.on('Click', serie => {\r
    console.log(serie);\r
    alert('点击了：' + serie.name);\r
  });\r
});\r
\r
const chartData2 = computed(() => {\r
  let list = [\r
    {\r
      name: '类型1',\r
      value: 100,\r
      legendValue: '100亩',\r
    },\r
    { name: '类型2', value: 50, legendValue: '50 亩' },\r
    { name: '类型3', value: 70, legendValue: '70 亩' },\r
    {\r
      name: '类型4',\r
      value: 100,\r
      legendValue: '100亩',\r
    },\r
    { name: '类型5', value: 50, legendValue: '50 亩' },\r
    { name: '类型6', value: 70, legendValue: '70 亩' },\r
    {\r
      name: '类型7',\r
      value: 100,\r
      legendValue: '100亩',\r
    },\r
    { name: '类型8', value: 50, legendValue: '50 亩' },\r
    { name: '类型9', value: 70, legendValue: '70 亩' },\r
  ];\r
  return list;\r
});\r
\r
const chartData3 = [\r
  { value: 7, name: '类型1', xx: 'dewd类型1' },\r
  { value: 6, name: '类型2', xx: 'dewd类型2' },\r
  { value: 10, name: '类型3', xx: 'dewd类型3' },\r
  { value: 13, name: '类型4', xx: 'dewd类型4' },\r
  { value: 9, name: '类型5', xx: 'dewd类型5' },\r
];\r
const chartOptions = computed(() => {\r
  const seriesData = chartData3;\r
  return {\r
    tooltip: {\r
      show: true,\r
    },\r
    grid: {\r
      top: '0%',\r
      right: '0%',\r
      bottom: '0%',\r
      left: '0%',\r
      containLabel: true,\r
    },\r
    series: [\r
      {\r
        unit: '亿元',\r
        name: '下达资金',\r
        type: 'pie',\r
        radius: [17, 120],\r
        avoidLabelOverlap: true,\r
        startAngle: 0,\r
        center: ['50%', '15%'],\r
        roseType: 'area',\r
        label: {\r
          show: true,\r
          color: '#fff',\r
          formatter: params => {\r
            return \`\${params.data.value}万元\`;\r
          },\r
          emphasis: {\r
            show: true,\r
          },\r
        },\r
        labelLine: {\r
          show: true,\r
          smooth: false,\r
          length: 20,\r
          length2: 10,\r
          emphasis: {\r
            show: true,\r
          },\r
        },\r
        data: [\r
          ...seriesData,\r
          ...seriesData.map(() => {\r
            return {\r
              value: 0,\r
              name: '',\r
              label: { show: false },\r
              labelLine: { show: false },\r
              emphasis: {\r
                label: { show: false },\r
                labelLine: { show: false },\r
              },\r
            };\r
          }),\r
        ],\r
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
    margin-left: 50px;\r
    &:first-child {\r
      margin-left: 0;\r
    }\r
  }\r
}\r
</style>\r
`;export{r as default};
