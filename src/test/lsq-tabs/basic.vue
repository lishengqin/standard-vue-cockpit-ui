<template>
  <LsqTabs v-model="active1" :tabs="tabs1" />
</template>
<script setup>
import { ref } from 'vue';
const active1 = ref('one');
const tabs1 = [
  { label: '页切1', value: 'one' },
  { label: '页切2', value: 'two' },
  { label: '页切3', value: 'three' },
];
</script>
