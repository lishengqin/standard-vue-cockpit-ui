const n=`<template>\r
  <div>\r
    <span>基础使用：</span>\r
    <LsqCountTo value="100"></LsqCountTo>\r
  </div>\r
  <div>\r
    <span>基础使用：</span>\r
    <LsqCountTo value="100.123456"></LsqCountTo>\r
  </div>\r
  <div>\r
    <span>定时循环滚动：</span>\r
    <LsqCountTo value="100" :loop="true" :setIntervalTime="1000"></LsqCountTo>\r
  </div>\r
\r
  <div>\r
    <span>保留4位小数：</span>\r
    <LsqCountTo value="100.123456789" :decimals="4"></LsqCountTo>\r
  </div>\r
  <div>\r
    <span>不需要滚动：</span>\r
    <LsqCountTo value="100" :autoplay="false"></LsqCountTo>\r
  </div>\r
  <div>\r
    <span>自定义颜色和文字大小：</span>\r
    <LsqCountTo value="100" color="yellow" fontSize="40px"></LsqCountTo>\r
  </div>\r
</template>\r
<script setup></script>\r
`;export{n as default};
