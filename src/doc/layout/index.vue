<template>
  <div class="doc-layout">
    <Header />
    <div class="content">
      <LeftMenu class="left-menu" />
      <div class="right-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from './Header.vue';
import LeftMenu from './LeftMenu.vue';
</script>
<style lang="scss" scoped>
.doc-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    display: flex;
    overflow-x: hidden;
    .left-menu {
      width: 400px;
      padding-left: 100px;
      padding-top: 30px;
      box-sizing: border-box;
      border-right: 1px solid var(--border-color);
    }
    .right-content {
      flex: 1;
      overflow: auto;
      padding: 30px;
    }
  }
}
</style>
