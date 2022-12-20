<script setup>
import { NMessageProvider, NConfigProvider, zhCN, dateZhCN } from 'naive-ui';
import MessageApi from '@/components/NaiveUiMessageApi.vue';
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <MessageApi />
    </n-message-provider>
    <router-view />
  </n-config-provider>
</template>

<style scoped></style>
