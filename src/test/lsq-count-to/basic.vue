<template>
  <div>
    <span>基础使用：</span>
    <LsqCountTo value="100"></LsqCountTo>
  </div>
  <div>
    <span>基础使用：</span>
    <LsqCountTo value="100.123456"></LsqCountTo>
  </div>
  <div>
    <span>定时循环滚动：</span>
    <LsqCountTo value="100" :loop="true" :setIntervalTime="1000"></LsqCountTo>
  </div>

  <div>
    <span>保留4位小数：</span>
    <LsqCountTo value="100.123456789" :decimals="4"></LsqCountTo>
  </div>
  <div>
    <span>不需要滚动：</span>
    <LsqCountTo value="100" :autoplay="false"></LsqCountTo>
  </div>
  <div>
    <span>自定义颜色和文字大小：</span>
    <LsqCountTo value="100" color="yellow" fontSize="40px"></LsqCountTo>
  </div>
</template>
<script setup></script>
