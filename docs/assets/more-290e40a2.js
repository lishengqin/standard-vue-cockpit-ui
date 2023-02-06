const e=`<template>\r
  <div>\r
    <LsqButton @click="visible1 = true">打开弹窗,挂载在#app节点上</LsqButton>\r
    <LsqModal teleport="#app" width="600px" height="400px" v-model:visible="visible1">\r
      <template #title>\r
        <span style="color: #de7373">自定义标题</span>\r
      </template>\r
      <div>我是弹窗的内容</div>\r
    </LsqModal>\r
\r
    <LsqButton @click="visible2 = true">去掉弹窗头部</LsqButton>\r
    <LsqModal :hideHead="true" width="600px" height="400px" v-model:visible="visible2">\r
      <template #title>\r
        <span style="color: #de7373">自定义标题</span>\r
      </template>\r
      <div>我是弹窗的内容</div>\r
    </LsqModal>\r
  </div>\r
</template>\r
<script setup>\r
import { ref } from 'vue';\r
const visible1 = ref(false);\r
const visible2 = ref(false);\r
</script>\r
`;export{e as default};
