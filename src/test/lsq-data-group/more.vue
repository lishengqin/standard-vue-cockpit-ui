<template>
  <div class="example-warp">
    <lsqModuleBlock title="自定义某一项的name" class="module">
      <LsqDataGroup :list="list" :data="data">
        <template #oneName="{ name }">
          <span class="rect"></span>
          <span>{{ name }}</span>
        </template>
      </LsqDataGroup>
    </lsqModuleBlock>

    <lsqModuleBlock title="示例2-在unit后append内容" class="module">
      <LsqDataGroup :list="list" :data="data" :columnCount="2">
        <template #rateAppend>
          <img
            src="../../assets/up.png"
            alt=""
            style="width: 20px; height: 20px; margin-left: 8px"
          />
        </template>
      </LsqDataGroup>
    </lsqModuleBlock>
  </div>
  <div class="example-warp">
    <lsqModuleBlock title="展示类型type：type2" class="module">
      <LsqDataGroup :list="list" :data="data" type="type2">
        <template #oneName="{ name }">
          <span class="rect"></span>
          <span>{{ name }}</span>
        </template>
      </LsqDataGroup>
    </lsqModuleBlock>
    <lsqModuleBlock title="展示类型type：type3" class="module">
      <LsqDataGroup :list="list" :data="data" type="type3"></LsqDataGroup>
    </lsqModuleBlock>
  </div>
  <div class="example-warp">
    <lsqModuleBlock title="展示类型type：type4" class="module">
      <LsqDataGroup :list="list" :data="data" type="type4"></LsqDataGroup>
    </lsqModuleBlock>
    <lsqModuleBlock title="" class="module"></lsqModuleBlock>
  </div>
</template>
<script setup>
import dataGroupItemBacImg from '@/assets/dataGroupItemBac.png';
const list = [
  {
    name: '已决赔款',
    value: '2.22',
    prop: 'one',
    unit: '亿元',
  },
  {
    name: '未决赔款',
    value: '2.22',
    unit: '亿元',
  },
  {
    name: '赔付户数',
    value: '2',
    unit: '户',
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
  .rect {
    width: 10px;
    height: 10px;
    display: inline-block;
    background: #ebb21a;
    margin-right: 8px;
  }
}
</style>
