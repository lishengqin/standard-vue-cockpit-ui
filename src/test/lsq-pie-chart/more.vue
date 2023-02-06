<template>
  <div class="example-warp">
    <LsqModuleBlock class="module" title="饼状图-不要图例-而且绑定了图表点击事件">
      <LsqPieChart
        ref="pieChart"
        style="height: 200px"
        :showLegend="false"
        :data="chartData1"
      ></LsqPieChart>
    </LsqModuleBlock>
    <LsqModuleBlock class="module" title="饼状图-2列图例">
      <LsqPieChart
        style="height: 200px"
        legendNameWidth="60px"
        legendItemWidth="200px"
        :data="chartData2"
        :legendColumnCount="2"
        videoLeft="15%"
      ></LsqPieChart>
    </LsqModuleBlock>
  </div>
  <div class="example-warp">
    <LsqModuleBlock class="module" title="自定义饼状图属性">
      <LsqPieChart
        style="height: 200px"
        :showLegend="false"
        :chartOptions="chartOptions"
        :data="chartData3"
        :hideVideo="true"
      ></LsqPieChart>
    </LsqModuleBlock>
    <LsqModuleBlock class="module" title=""></LsqModuleBlock>
  </div>
</template>
<script setup>
import { computed, ref, onMounted } from 'vue';
const chartData1 = computed(() => {
  let list = [
    {
      name: '类型1',
      value: 100,
    },
    { name: '类型2', value: 50 },
    { name: '类型3', value: 70 },
  ];
  return list;
});
const pieChart = ref();
onMounted(() => {
  pieChart.value.chart.on('Click', serie => {
    console.log(serie);
    alert('点击了：' + serie.name);
  });
});

const chartData2 = computed(() => {
  let list = [
    {
      name: '类型1',
      value: 100,
      legendValue: '100亩',
    },
    { name: '类型2', value: 50, legendValue: '50 亩' },
    { name: '类型3', value: 70, legendValue: '70 亩' },
    {
      name: '类型4',
      value: 100,
      legendValue: '100亩',
    },
    { name: '类型5', value: 50, legendValue: '50 亩' },
    { name: '类型6', value: 70, legendValue: '70 亩' },
    {
      name: '类型7',
      value: 100,
      legendValue: '100亩',
    },
    { name: '类型8', value: 50, legendValue: '50 亩' },
    { name: '类型9', value: 70, legendValue: '70 亩' },
  ];
  return list;
});

const chartData3 = [
  { value: 7, name: '类型1', xx: 'dewd类型1' },
  { value: 6, name: '类型2', xx: 'dewd类型2' },
  { value: 10, name: '类型3', xx: 'dewd类型3' },
  { value: 13, name: '类型4', xx: 'dewd类型4' },
  { value: 9, name: '类型5', xx: 'dewd类型5' },
];
const chartOptions = computed(() => {
  const seriesData = chartData3;
  return {
    tooltip: {
      show: true,
    },
    grid: {
      top: '0%',
      right: '0%',
      bottom: '0%',
      left: '0%',
      containLabel: true,
    },
    series: [
      {
        unit: '亿元',
        name: '下达资金',
        type: 'pie',
        radius: [17, 120],
        avoidLabelOverlap: true,
        startAngle: 0,
        center: ['50%', '15%'],
        roseType: 'area',
        label: {
          show: true,
          color: '#fff',
          formatter: params => {
            return `${params.data.value}万元`;
          },
          emphasis: {
            show: true,
          },
        },
        labelLine: {
          show: true,
          smooth: false,
          length: 20,
          length2: 10,
          emphasis: {
            show: true,
          },
        },
        data: [
          ...seriesData,
          ...seriesData.map(() => {
            return {
              value: 0,
              name: '',
              label: { show: false },
              labelLine: { show: false },
              emphasis: {
                label: { show: false },
                labelLine: { show: false },
              },
            };
          }),
        ],
      },
    ],
  };
});
</script>

<style lang="scss" scoped>
.example-warp {
  display: flex;
  margin-bottom: 16px;
  .module {
    flex: 1;
    margin-left: 50px;
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
