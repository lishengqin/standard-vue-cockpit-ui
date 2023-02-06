const e=`<template>\r
  <div class="example-warp">\r
    <LsqSidePanel width="200px" height="400px">我是自定义的左侧内容</LsqSidePanel>\r
    <LsqSidePanel width="200px" height="400px" position="right">\r
      <LsqModuleBlock title="最新资讯" height="200px">咨询内容</LsqModuleBlock>\r
      <LsqModuleBlock title="公告公示" height="200px">公告公示</LsqModuleBlock>\r
    </LsqSidePanel>\r
  </div>\r
</template>\r
<style lang="scss" scoped>\r
.example-warp {\r
  display: flex;\r
  justify-content: space-between;\r
}\r
</style>\r
`;export{e as default};
