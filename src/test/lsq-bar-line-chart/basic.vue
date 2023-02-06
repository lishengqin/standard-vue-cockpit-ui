<template>
  <div class="example-warp">
    <LsqModuleBlock class="module" title="柱状图">
      <LsqBarLineChart style="height: 200px" :chartOptions="chartOptions1"></LsqBarLineChart>
    </LsqModuleBlock>
    <LsqModuleBlock class="module" title="折现图">
      <LsqBarLineChart style="height: 200px" :chartOptions="chartOptions2"></LsqBarLineChart>
    </LsqModuleBlock>
    <LsqModuleBlock class="module" title="混合图表">
      <LsqBarLineChart style="height: 200px" :chartOptions="chartOptions3"></LsqBarLineChart>
    </LsqModuleBlock>
  </div>
  <div class="example-warp">
    <LsqModuleBlock class="module" title="横向折线图">
      <LsqBarLineChart style="height: 200px" :chartOptions="chartOptions4"></LsqBarLineChart>
    </LsqModuleBlock>
    <LsqModuleBlock class="module" title="横向柱状图">
      <LsqBarLineChart style="height: 200px" :chartOptions="chartOptions5"></LsqBarLineChart>
    </LsqModuleBlock>
    <LsqModuleBlock class="module"></LsqModuleBlock>
  </div>
</template>
<script setup>
import { computed } from 'vue';
const chartOptions1 = computed(() => {
  let dataX = ['2020', '2021', '2022', '2023'];
  let seriesData1 = [10, 45, 70, 22];
  return {
    xAxis: { data: dataX },
    yAxis: {
      name: '亩',
    },
    grid: { top: '20%' },
    series: [
      {
        unit: '亩',
        name: '同比分析',
        barWidth: 36,
        type: 'bar',
        itemStyle: {
          color: '#EBB21A',
        },
        data: seriesData1,
      },
    ],
  };
});
const chartOptions2 = computed(() => {
  let dataX = ['2020', '2021', '2022', '2023'];
  let seriesData1 = [10, 45, 70, 22];
  return {
    xAxis: { data: dataX },
    yAxis: {
      name: '亩',
    },
    grid: { top: '20%' },
    series: [
      {
        unit: '亩',
        name: '同比分析',
        barWidth: 36,
        type: 'line',
        lineStyle: {
          color: '#ff6d6e',
        },
        itemStyle: {
          color: '#ff6d6e',
        },
        data: seriesData1,
      },
    ],
  };
});

const chartOptions3 = computed(() => {
  let dataX = ['2020', '2021', '2022', '2023'];
  let seriesData1 = [10, 45, 70, 22];
  let seriesData2 = [120, 145, 170, 122];
  return {
    xAxis: { data: dataX },
    yAxis: [
      {
        name: '元',
      },
    ],
    grid: { top: '20%' },
    series: [
      {
        unit: '元',
        name: '支出',
        type: 'line',
        smooth: false,
        itemStyle: {
          color: '#03C3FF',
        },
        data: seriesData1,
      },
      {
        unit: '元',
        name: '收入',
        type: 'bar',
        lineStyle: {
          color: '#ff6d6e',
        },
        itemStyle: {
          color: '#ff6d6e',
        },
        data: seriesData2,
      },
    ],
  };
});
const chartOptions4 = computed(() => {
  let dataX = ['2020', '2021', '2022', '2023'];
  let seriesData1 = [10, 45, 70, 22];
  return {
    xAxis: { type: 'value' },
    yAxis: {
      data: dataX,
      type: 'category',
    },
    grid: { top: '20%' },
    series: [
      {
        unit: '亩',
        name: '同比分析',
        type: 'line',
        lineStyle: {
          color: '#ff6d6e',
        },
        itemStyle: {
          color: '#ff6d6e',
        },
        data: seriesData1,
      },
    ],
  };
});
const chartOptions5 = computed(() => {
  let dataX = ['2020', '2021', '2022', '2023'];
  let seriesData1 = [10, 45, 70, 22];
  return {
    xAxis: { name: '亩', type: 'value', nameLocation: 'end' },
    yAxis: {
      data: dataX,
      type: 'category',
    },
    grid: { top: '20%' },
    series: [
      {
        unit: '亩',
        name: '同比分析',
        type: 'bar',
        itemStyle: {
          color: '#ff6d6e',
        },
        data: seriesData1,
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
    overflow: hidden;
    margin-left: 50px;
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
