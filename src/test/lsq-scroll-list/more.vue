<script setup>
const list = [{ name: '第1行！！' }, { name: '第2行！！' }, { name: '第3行！！' }];
</script>
<template>
  <div class="example-warp">
    <div class="module">
      <LsqModuleBlock title="滚动列表">
        <p>内容没有超出高度，不会自动滚动</p>
        <LsqScrollList :list="list" style="height: 150px">
          <div class="item" v-for="(item, index) in list" :key="index">
            {{ item.name }}
          </div>
        </LsqScrollList>
      </LsqModuleBlock>
    </div>

    <div class="module">
      <LsqModuleBlock title="滚动列表">
        <p>修改step，改变滚动速度</p>
        <LsqScrollList :list="list" :step="1" style="height: 100px">
          <div class="item" v-for="(item, index) in list" :key="index">
            {{ item.name }}
          </div>
        </LsqScrollList>
      </LsqModuleBlock>
    </div>

    <div class="module">
      <LsqModuleBlock title="滚动列表">
        <p>设置modelValue，即使大于容器高度也不滚动</p>
        <LsqScrollList :list="list" :modelValue="false" style="height: 100px">
          <div class="item" v-for="(item, index) in list" :key="index">
            {{ item.name }}
          </div>
        </LsqScrollList>
      </LsqModuleBlock>
    </div>

    <div class="module">
      <LsqModuleBlock title="滚动列表">
        <p>列表为空时，可以自定义空的展示内容，默认是 暂无数据</p>
        <LsqScrollList :list="[]" :modelValue="false" style="height: 100px">
          <template #empty>
            <div style="text-align: center; padding-top: 10px">自定义空时展示的内容</div>
          </template>
        </LsqScrollList>
      </LsqModuleBlock>
    </div>
  </div>
</template>
<style scoped lang="scss">
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
  }
}

.item {
  padding: 0 10px;
  border-bottom: 1px solid var(--border-color);
  height: 40px;
  line-height: 40px;
}
</style>
