import{d as s,o as c,c as n,b as t,e}from"./index-3af25e0c.js";const a={class:"markdown-body"},r=t("h1",null,"组件快速上手",-1),d=t("p",null,[e("引入 "),t("code",{class:""},"standard-vue-cockpit-ui"),e(" 组件，有按需引入和完整引入 2 种方式。")],-1),i=t("h3",null,"完整引入",-1),p=t("pre",null,[t("code",{class:"language-js"},`import CockpitUI from 'standard-vue-cockpit-ui';
import 'standard-vue-cockpit-ui/lib/style.css';
createApp(App).use(CockpitUI);
`)],-1),l=t("h3",null,"按需引入",-1),u=t("pre",null,[t("code",{class:"language-js"},`import { LsqButton, LsqModuleBlock } from 'standard-vue-cockpit-ui';
import 'standard-vue-cockpit-ui/lib/style.css';
createApp(App).use(LsqButton).use(LsqModuleBlock);
`)],-1),_=[r,d,i,p,l,u],v={},B="",x=s({__name:"README",setup(m,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(h,k)=>(c(),n("div",a,_))}});export{x as default,B as excerpt,v as frontmatter};
