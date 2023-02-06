<template>
  <div class="example-warp">
    <LsqTabs type="border-card" v-model="active1" :tabs="tabs1" />
    <LsqTabs type="card" v-model="active2" :tabs="tabs1" />
    <LsqTabs type="card" v-model="active3" :tabs="tabs1">
      <template #one="{ tab }">
        <div style="display: flex; align-items: center">
          <img class="tip-img" src="@/assets/tip.png" alt="" />
          {{ '自定义' + tab.label }}
        </div>
      </template>
    </LsqTabs>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const active1 = ref('one');
const tabs1 = [
  { label: '页切1', value: 'one' },
  { label: '页切2', value: 'two' },
  { label: '页切3', value: 'three' },
];

const active2 = ref('one');
const active3 = ref('one');
</script>
<style lang="scss" scoped>
.example-warp {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
.tip-img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
</style>
