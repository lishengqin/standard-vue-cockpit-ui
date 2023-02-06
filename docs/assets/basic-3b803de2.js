const t=`<template>\r
  <LsqButton @click="click">primary按钮</LsqButton>\r
  <LsqButton @click="click">按 钮</LsqButton>\r
</template>\r
<script setup>\r
const click = () => {\r
  console.log('触发点击事件');\r
};\r
</script>\r
`;export{t as default};
