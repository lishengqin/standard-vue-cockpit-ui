<template>
  <div class="example-warp">
    <LsqSidePanel width="200px" height="400px">我是自定义的左侧内容</LsqSidePanel>
    <LsqSidePanel width="200px" height="400px" position="right">
      <LsqModuleBlock title="最新资讯" height="200px">咨询内容</LsqModuleBlock>
      <LsqModuleBlock title="公告公示" height="200px">公告公示</LsqModuleBlock>
    </LsqSidePanel>
  </div>
</template>
<style lang="scss" scoped>
.example-warp {
  display: flex;
  justify-content: space-between;
}
</style>
