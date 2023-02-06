const e=`<template>\r
  <LsqTabs v-model="active1" :tabs="tabs1" />\r
</template>\r
<script setup>\r
import { ref } from 'vue';\r
const active1 = ref('one');\r
const tabs1 = [\r
  { label: '页切1', value: 'one' },\r
  { label: '页切2', value: 'two' },\r
  { label: '页切3', value: 'three' },\r
];\r
</script>\r
`;export{e as default};
