<template>
  <div class="menu-list">
    <div v-for="menu in _menuList" :key="menu.name" @click="menuLink(menu)">
      <div
        :class="{ menu: true, active: menu.name === routeName, menu_expand: menu.expand }"
        @click="menuClick(menu)"
      >
        {{ menu.zhName }}
        <NIcon size="26" v-if="menu.children?.length">
          <ChevronDownOutline />
        </NIcon>
      </div>
      <div class="children" v-show="menu.expand">
        <div
          :class="{ menu: true, active: menu.name === routeName }"
          v-for="child in menu.children"
          :key="child.name"
          @click="menuLink(child)"
        >
          <div :class="{ menu: true, active: child.name === routeName }">{{ child.zhName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ChevronDownOutline } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
import { computed, reactive, ref } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import { menuList } from './const';
import { cloneDeep } from 'lodash-es';
const Route = useRoute();
const props = defineProps({});
const routeName = computed(() => {
  return Route.name;
});
const menuLink = menu => {
  if (!menu.name) return;
  router.push({ name: menu.name });
};
const _menuList = reactive(cloneDeep(menuList));
const menuClick = menu => {
  if (!menu.children?.length) return;
  menu.expand = !menu.expand;
};
</script>
<style lang="scss" scoped>
.menu-list {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  .children {
    padding-left: 20px;
  }
  .menu {
    padding: 10px 16px;
    width: 220px;
    cursor: pointer;
    display: flex;
    align-items: center;
    i {
      margin-left: 8px;
    }
    &:hover {
      color: #2d7ee7;
    }
    &.active {
      background: rgba(64, 158, 255, 0.2);
      color: #2d7ee7;
      border-radius: 8px;
    }
    &.menu_expand {
      i {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
