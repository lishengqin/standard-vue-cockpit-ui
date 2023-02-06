<template>
  <div class="example-warp">
    <div class="module">
      <p>表头文字比较长时候，可以文字换行</p>
      <LsqScrollTable :headWrap="true" :columns="columns" :list="list" style="height: 140px">
        <template #state="{ row }">
          <span>{{ stateMap[row.state] }}</span>
        </template>
      </LsqScrollTable>
    </div>

    <div class="module">
      <p>列表文字居中，也可以在columns中单列设置【align】【headAlign】</p>
      <LsqScrollTable :align="'center'" :columns="columns" :list="list" style="height: 140px">
        <template #state="{ row }">
          <span>{{ stateMap[row.state] }}</span>
        </template>
      </LsqScrollTable>
    </div>

    <div class="module">
      <p>自定义某列的内容；点击某行的回调函数</p>
      <LsqScrollTable
        :columns="columns"
        :list="list"
        style="height: 140px"
        @rowClicked="rowClicked"
      >
        <template #state="{ row }">
          <span>{{ stateMap[row.state] }}</span>
        </template>
        <template #img>
          <img style="display: block" src="@/assets/btnBac.png" alt="" />
        </template>
      </LsqScrollTable>
    </div>
  </div>
</template>
<script setup>
const stateMap = {
  0: '已报修',
  1: '使用中',
  2: '申请报废',
};
const columns = [
  { label: '序号', type: 'index', width: '60px' },
  { label: '这是设备姓名，列文字比较长', prop: 'name', width: '140px' },
  { label: '使用年限(年)', prop: 'year' },
  { label: '状态', prop: 'state' },
  { label: '设备图片', prop: 'img' },
];
const list = [
  { name: '设备1', year: '3', state: '1', className: 'custom-row' },
  { name: '设备2', year: '10', state: '2' },
  { name: '设备3', year: '5', state: '0' },
  { name: '设备4', year: '1', state: '1' },
  { name: '设备5', year: '12', state: '2' },
];
const rowClicked = row => {
  console.log('点击了当前行：', row);
};
</script>
<style lang="scss" scoped>
.example-warp {
  display: flex;
  .module {
    flex: 1;
    margin-left: 50px;
    &:first-child {
      margin-left: 0;
    }
    p {
      color: rgb(235, 178, 26);
    }
    .ac-scroll-list {
      border: 1px solid #ff6d6e;
    }
  }
}
</style>
