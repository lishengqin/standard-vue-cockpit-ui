import{_,s,n as v,L as f,r as c,o as g,c as x,b as m,a,a0 as n,M as o,X as w}from"./index-a3925d09.js";const L={class:"example-warp"},V={class:"example-warp"},b={__name:"more",setup(C){const i=s(()=>[{name:"类型1",value:100},{name:"类型2",value:50},{name:"类型3",value:70}]),u=v();f(()=>{u.value.chart.on("Click",e=>{console.log(e),alert("点击了："+e.name)})});const h=s(()=>[{name:"类型1",value:100,legendValue:"100亩"},{name:"类型2",value:50,legendValue:"50 亩"},{name:"类型3",value:70,legendValue:"70 亩"},{name:"类型4",value:100,legendValue:"100亩"},{name:"类型5",value:50,legendValue:"50 亩"},{name:"类型6",value:70,legendValue:"70 亩"},{name:"类型7",value:100,legendValue:"100亩"},{name:"类型8",value:50,legendValue:"50 亩"},{name:"类型9",value:70,legendValue:"70 亩"}]),r=[{value:7,name:"类型1",xx:"dewd类型1"},{value:6,name:"类型2",xx:"dewd类型2"},{value:10,name:"类型3",xx:"dewd类型3"},{value:13,name:"类型4",xx:"dewd类型4"},{value:9,name:"类型5",xx:"dewd类型5"}],p=s(()=>{const e=r;return{tooltip:{show:!0},grid:{top:"0%",right:"0%",bottom:"0%",left:"0%",containLabel:!0},series:[{unit:"亿元",name:"下达资金",type:"pie",radius:[17,120],avoidLabelOverlap:!0,startAngle:0,center:["50%","15%"],roseType:"area",label:{show:!0,color:"#fff",formatter:d=>`${d.data.value}万元`,emphasis:{show:!0}},labelLine:{show:!0,smooth:!1,length:20,length2:10,emphasis:{show:!0}},data:[...e,...e.map(()=>({value:0,name:"",label:{show:!1},labelLine:{show:!1},emphasis:{label:{show:!1},labelLine:{show:!1}}}))]}]}});return(e,d)=>{const l=c("LsqPieChart"),t=c("LsqModuleBlock");return g(),x(w,null,[m("div",L,[a(t,{class:"module",title:"饼状图-不要图例-而且绑定了图表点击事件"},{default:n(()=>[a(l,{ref_key:"pieChart",ref:u,style:{height:"200px"},showLegend:!1,data:o(i)},null,8,["data"])]),_:1}),a(t,{class:"module",title:"饼状图-2列图例"},{default:n(()=>[a(l,{style:{height:"200px"},legendNameWidth:"60px",legendItemWidth:"200px",data:o(h),legendColumnCount:2,videoLeft:"15%"},null,8,["data"])]),_:1})]),m("div",V,[a(t,{class:"module",title:"自定义饼状图属性"},{default:n(()=>[a(l,{style:{height:"200px"},showLegend:!1,chartOptions:o(p),data:r,hideVideo:!0},null,8,["chartOptions"])]),_:1}),a(t,{class:"module",title:""})])],64)}}},k=_(b,[["__scopeId","data-v-49937fd5"]]);export{k as default};