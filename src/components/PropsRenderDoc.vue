<template>
  <div>
    <div class="props-block">
      <h1>{{ comName + ' Props : 组件属性' }}</h1>
      <LsqScrollTable
        :bodyWrap="true"
        :columns="propsColums"
        :list="comProps.props"
      ></LsqScrollTable>
    </div>
    <div class="props-block">
      <div class="" v-for="other in comProps.other" :key="other.name">
        <h1 style="color: brown">{{ other.name + ' — Props引用属性说明：' }}</h1>
        <LsqScrollTable :bodyWrap="true" :columns="otherColums" :list="other.value">
          <template #value="{ row }">
            <span>{{ (row.value || []).join(' | ') || '自行填写' }}</span>
          </template>
        </LsqScrollTable>
      </div>
    </div>

    <div class="props-block">
      <h1>{{ comName + ' Emits : 组件方法' }}</h1>
      <LsqScrollTable
        :bodyWrap="true"
        :columns="emitsColumns"
        :list="comProps.emits"
      ></LsqScrollTable>
    </div>
    <div class="props-block">
      <h1>{{ comName + ' Events : 组件实例方法' }}</h1>
      <LsqScrollTable
        :bodyWrap="true"
        :columns="eventsColumns"
        :list="comProps.events"
      ></LsqScrollTable>
    </div>
    <div class="props-block">
      <h1>{{ comName + ' Slots : 组件插槽' }}</h1>
      <LsqScrollTable
        :bodyWrap="true"
        :columns="slotsColumns"
        :list="comProps.slots"
      ></LsqScrollTable>
    </div>
  </div>
</template>
<script setup>
import example_code from '../../public/example_code.json';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const Route = useRoute();
const comProps = computed(() => {
  let obj = example_code.find(one => {
    return one.componentName === Route.name;
  });
  console.log(obj);
  return obj;
});
const comName = computed(() => {
  let name = Route.name;
  return name
    .split('-')
    .map(i => i.replace(i[0], i[0].toUpperCase()))
    .join('');
});
const propsColums = [
  { label: '参数', prop: 'propName' },
  { label: '描述', prop: 'comment' },
  { label: '类型', prop: 'type' },
  { label: '默认值', prop: 'default' },
];
const otherColums = [
  { label: '字段名', prop: 'name' },
  { label: '描述', prop: 'comment' },
  { label: '可填值', prop: 'value' },
];
const emitsColumns = [
  { label: '参数', prop: 'name' },
  { label: '描述', prop: 'comment' },
];
const eventsColumns = [
  { label: '参数', prop: 'name' },
  { label: '描述', prop: 'comment' },
];
const slotsColumns = [
  { label: '参数', prop: 'name' },
  { label: '描述', prop: 'comment' },
];
</script>
<style lang="scss" scoped>
.ac-scroll-table {
  :deep() {
    .cell {
      white-space: pre !important;
    }
  }
}
</style>
