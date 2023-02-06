<template>
  <div class="example-warp">
    <LsqModuleBlock style="max-width: 482px" class="module" title="饼状图-1列图例">
      <LsqPieChart style="height: 200px" legendNameWidth="90px" :data="chartData1"></LsqPieChart>
    </LsqModuleBlock>
    <LsqModuleBlock style="max-width: 450px" class="module" title="饼状图-图例文字过多换行">
      <LsqPieChart
        style="height: 200px"
        legendNameWidth="80px"
        :legendWrap="true"
        :data="chartData2"
        :emphasis="emphasis"
      ></LsqPieChart>
    </LsqModuleBlock>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';

import { chunk } from 'lodash-es';
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

const chartData2 = computed(() => {
  let list = [
    {
      name: '1我是超多文字的文字文字类型1',
      value: 100,
    },
    { name: '2我是超多文字的文字文字类型1', value: 50 },
    { name: '3我是超多文字的文字文字类型1', value: 70 },
  ];
  return list;
});
const emphasis = computed(() => {
  return {
    label: {
      color: '#90B6D2',
      show: true,
      fontSize: '14',
      formatter: function (v) {
        let wrapLength = 8;
        let text = '\n' + v.name;
        if (v.name.length >= wrapLength) {
          let list = chunk(v.name.split(''), wrapLength);
          text = list.map(one => one.join('')).join('\n');
        }
        return '{value|' + +v.percent + '%' + '\n}' + '{v|' + text + '}';
      },
      rich: {
        value: {
          color: '#27E0FD',
          fontSize: '32',
          fontWeight: 'bold',
          padding: [8, 8, 0, 0],
          display: 'block',
        },
        v: {
          color: '#90B6D2',
          fontSize: '14',
          lineHeight: 16,
          padding: [-4, 8, 0, 0],
        },
      },
    },
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
