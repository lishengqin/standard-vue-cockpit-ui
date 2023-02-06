import{d as s,o as a,c,b as e,e as t}from"./index-3d21079a.js";const n={class:"markdown-body"},r=e("h1",null,"1. usePageScale",-1),d=e("p",null,[t("根据大屏尺寸，对开发的页面进行缩放。"),e("code",{class:""},"usePageScale(dom,width,height)"),t(" ,dom:需要缩放的 dom 节点；width:大屏的宽度，默认 1920；height:大屏的高度，默认 1080。")],-1),l=e("pre",null,[e("code",{class:"language-vue"},`<template>
  <div ref="myRef" class="doc-page">
    <layout>
      <router-view></router-view>
    </layout>
  </div>
</template>
<script setup>
import layout from './layout';
import { onMounted } from 'vue';
import { usePageScale } from '@anchu/standard-vue-cockpit-components';
const myRef = ref('');
onMounted(() => {
  usePageScale(myRef.value, 1920, 1080);
});
</script>
<style lang="scss" scoped></style>
`)],-1),u=[r,d,l],f={},h="",g=s({__name:"README",setup(i,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(m,p)=>(a(),c("div",n,u))}});export{g as default,h as excerpt,f as frontmatter};
