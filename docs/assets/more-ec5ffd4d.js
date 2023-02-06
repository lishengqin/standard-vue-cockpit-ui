const n=`<template>\r
  <div class="example-warp">\r
    <div class="module">\r
      <p>左侧默认展示，而且还可以点击按钮手动控制展开收起</p>\r
      <LsqButton @click="changeLeftPanel">手动触发左面板展开收起</LsqButton>\r
      <LsqSidePanel\r
        ref="acSidePanelLeftRef"\r
        v-model="leftExpand"\r
        :hideArrow="false"\r
        :offset="25"\r
        width="200px"\r
        height="400px"\r
      >\r
        我是自定义的左侧内容\r
      </LsqSidePanel>\r
    </div>\r
    <div class="module">\r
      <p>右侧面板默认收起</p>\r
      <LsqSidePanel\r
        v-model="rightExpand"\r
        :hideArrow="false"\r
        :offset="25"\r
        width="200px"\r
        height="400px"\r
        position="right"\r
      >\r
        我是自定义的右侧内容\r
      </LsqSidePanel>\r
    </div>\r
  </div>\r
</template>\r
<script setup>\r
import { ref } from 'vue';\r
// 左侧\r
const leftExpand = ref(true);\r
const acSidePanelLeftRef = ref();\r
const changeLeftPanel = () => {\r
  acSidePanelLeftRef.value?.showChange(!leftExpand.value);\r
};\r
// 右侧\r
const rightExpand = ref(false);\r
</script>\r
<style lang="scss" scoped>\r
.example-warp {\r
  display: flex;\r
  justify-content: space-between;\r
  p {\r
    color: rgb(235, 178, 26);\r
  }\r
  .ac-button {\r
    margin-bottom: 20px;\r
  }\r
}\r
</style>\r
`;export{n as default};
