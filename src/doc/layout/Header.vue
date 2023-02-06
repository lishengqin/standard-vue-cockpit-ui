<template>
  <div class="navbar">
    <div class="flex">
      <span class="title">lsq自定义公共组件</span>
    </div>
    <NAutoComplete
      v-model:value="value"
      :input-props="{
        autocomplete: 'disabled',
      }"
      :options="options"
      placeholder="搜索"
      :on-select="select"
    ></NAutoComplete>
  </div>
</template>
<script setup>
import { NAutoComplete } from 'naive-ui';
import { computed, onMounted, ref, h, nextTick } from 'vue';
import { menuList } from './const';
import router from '@/router';
const nemMenus = ref([]);
const getAllNameMenu = list => {
  list.forEach(one => {
    if (one.name) {
      nemMenus.value.push(one);
    } else if (one.children) {
      getAllNameMenu(one.children);
    }
  });
};
onMounted(() => {
  getAllNameMenu(menuList);
});
const value = ref('');
const options = computed(() => {
  let list = nemMenus.value.filter(
    one =>
      one.name.toUpperCase().indexOf(value.value.toUpperCase()) > -1 ||
      one.zhName.indexOf(value.value) > -1
  );

  return list.map(one => {
    let text = one.name;
    if (one.name.indexOf('lsq-') === 0) {
      text = one.name.replace(/-(\w)/g, (_, c) => c.toUpperCase());
      text = text.substr(0, 1).toUpperCase() + text.substr(1);
    }
    return {
      label: one.zhName + '   ' + text,
      value: one.name,
    };
  });
});
const select = name => {
  router.push({ name: name });
  nextTick(() => {
    value.value = '';
  });
};
</script>
<style lang="scss" scoped>
.navbar {
  height: 55px;
  border-bottom: 1px solid var(--border-color);
  padding: 0 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .flex {
    display: flex;
    align-items: center;
  }
  img {
    width: 32px;
    height: 32px;
  }
  .title {
    margin-left: 16px;
    font-size: 20px;
    font-weight: bold;
    color: #2d7ee7;
  }
  .n-auto-complete {
    width: 300px;
  }
}
</style>
