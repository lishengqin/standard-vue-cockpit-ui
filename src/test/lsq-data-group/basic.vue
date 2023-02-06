<template>
  <div class="example-warp">
    <lsqModuleBlock title="示例1" class="module">
      <LsqDataGroup :list="list" :data="data" />
    </lsqModuleBlock>

    <lsqModuleBlock title="示例2-2列" class="module">
      <LsqDataGroup :list="list" :data="data" :columnCount="2" />
    </lsqModuleBlock>
  </div>
  <div class="example-warp">
    <lsqModuleBlock title="示例3-2列且居中" class="module">
      <LsqDataGroup :list="list" :data="data" :columnCount="2" justifyContent="center" />
    </lsqModuleBlock>

    <lsqModuleBlock title="示例4-每项样式自定义" class="module">
      <LsqDataGroup
        :list="list"
        :data="data"
        :columnCount="2"
        justifyContent="center"
        :itemStyle="itemStyle"
      />
    </lsqModuleBlock>
  </div>
</template>
<script setup>
import dataGroupItemBacImg from '@/assets/dataGroupItemBac.png';

const list = [
  {
    name: '已决赔款',
    value: '2.22',
    unit: '亿元',
  },
  {
    name: '未决赔款',
    value: '2.22',
    unit: '亿元',
  },
  {
    name: '赔付户数',
    value: '2.22',
    unit: '万户',
  },
  {
    name: '所占比例',
    prop: 'rate',
    unit: '%',
  },
];
const data = {
  rate: '3.56',
};
const itemStyle = {
  width: '310px',
  height: '80px',
  padding: '0 30px',
  background: 'url(' + dataGroupItemBacImg + ') transparent no-repeat',
  'background-size': '100% 100%',
};
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
