<template>
  <LsqButton @click="click">primary按钮</LsqButton>
  <LsqButton @click="click">按 钮</LsqButton>
</template>
<script setup>
const click = () => {
  console.log('触发点击事件');
};
</script>
