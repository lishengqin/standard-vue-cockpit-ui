import{_ as v,n as d,r as i,o as x,c as V,b as t,a as n,a0 as _,e as c,Q as w,R as g}from"./index-3d21079a.js";const f=e=>(w("data-v-83da3608"),e=e(),g(),e),L={class:"example-warp"},S={class:"module"},B=f(()=>t("p",null,"左侧默认展示，而且还可以点击按钮手动控制展开收起",-1)),P={class:"module"},k=f(()=>t("p",null,"右侧面板默认收起",-1)),q={__name:"more",setup(e){const a=d(!0),p=d(),m=()=>{var s;(s=p.value)==null||s.showChange(!a.value)},r=d(!1);return(s,o)=>{const h=i("LsqButton"),u=i("LsqSidePanel");return x(),V("div",L,[t("div",S,[B,n(h,{onClick:m},{default:_(()=>[c("手动触发左面板展开收起")]),_:1}),n(u,{ref_key:"acSidePanelLeftRef",ref:p,modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=l=>a.value=l),hideArrow:!1,offset:25,width:"200px",height:"400px"},{default:_(()=>[c(" 我是自定义的左侧内容 ")]),_:1},8,["modelValue"])]),t("div",P,[k,n(u,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=l=>r.value=l),hideArrow:!1,offset:25,width:"200px",height:"400px",position:"right"},{default:_(()=>[c(" 我是自定义的右侧内容 ")]),_:1},8,["modelValue"])])])}}},I=v(q,[["__scopeId","data-v-83da3608"]]);export{I as default};
