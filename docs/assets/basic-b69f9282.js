import{_ as d,r as c,o as i,c as _,b as l,a as t,a0 as n,X as r}from"./index-3af25e0c.js";const p="/standard-vue-cockpit-ui/assets/dataGroupItemBac-6c26794e.png";const m={class:"example-warp"},f={class:"example-warp"},v={__name:"basic",setup(x){const e=[{name:"已决赔款",value:"2.22",unit:"亿元"},{name:"未决赔款",value:"2.22",unit:"亿元"},{name:"赔付户数",value:"2.22",unit:"万户"},{name:"所占比例",prop:"rate",unit:"%"}],a={rate:"3.56"},u={width:"310px",height:"80px",padding:"0 30px",background:"url("+p+") transparent no-repeat","background-size":"100% 100%"};return(b,g)=>{const s=c("LsqDataGroup"),o=c("lsqModuleBlock");return i(),_(r,null,[l("div",m,[t(o,{title:"示例1",class:"module"},{default:n(()=>[t(s,{list:e,data:a})]),_:1}),t(o,{title:"示例2-2列",class:"module"},{default:n(()=>[t(s,{list:e,data:a,columnCount:2})]),_:1})]),l("div",f,[t(o,{title:"示例3-2列且居中",class:"module"},{default:n(()=>[t(s,{list:e,data:a,columnCount:2,justifyContent:"center"})]),_:1}),t(o,{title:"示例4-每项样式自定义",class:"module"},{default:n(()=>[t(s,{list:e,data:a,columnCount:2,justifyContent:"center",itemStyle:u})]),_:1})])],64)}}},k=d(v,[["__scopeId","data-v-63cb12f8"]]);export{k as default};