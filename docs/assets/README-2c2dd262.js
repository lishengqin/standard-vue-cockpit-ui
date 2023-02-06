import{d as s,o as n,c,b as t,e as o}from"./index-a3925d09.js";const a={class:"markdown-body"},p=t("h1",null,"组件快速上手",-1),r=t("p",null,[o("引入 "),t("code",{class:""},"@anchu/standard-vue-cockpit-components"),o(" 组件，有按需引入和完整引入 2 种方式。")],-1),d=t("h3",null,"完整引入",-1),l=t("pre",null,[t("code",{class:"language-js"},`import CockpitUI from '@anchu/standard-vue-cockpit-components';
import '@anchu/standard-vue-cockpit-components/lib/style.css';
createApp(App).use(CockpitUI);
`)],-1),u=t("h3",null,"按需引入",-1),i=t("pre",null,[t("code",{class:"language-js"},`import { LsqButton, LsqModuleBlock } from '@anchu/standard-vue-cockpit-components';
import '@anchu/standard-vue-cockpit-components/lib/style.css';
createApp(App).use(LsqButton).use(LsqModuleBlock);
`)],-1),_=[p,r,d,l,u,i],v={},B="",x=s({__name:"README",setup(m,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(h,k)=>(n(),c("div",a,_))}});export{x as default,B as excerpt,v as frontmatter};
