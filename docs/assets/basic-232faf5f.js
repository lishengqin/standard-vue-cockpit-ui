import{n as c,r as p,o as x,$ as _,a0 as l,a as s,M as d,a6 as w,N as f,e as v}from"./index-3d21079a.js";const N={__name:"basic",setup(S){const n=c({type:"one",state:"two",keyword:"dewdewd"}),i={typeOptions:[{label:"选项1",value:"one"},{label:"选项2",value:"two"}],stateOptions:[{label:"状态1",value:"one"},{label:"状态2",value:"two"}]},u=[{type:"index",title:"序号"},{key:"keyword",title:"关键字"},{key:"name",title:"用户的姓名"},{key:"age",title:"用户的年龄"},{key:"address",title:"用户的地址"}],y=t=>{let e=t.pageSize,a=t.page,o=40;return{data:new Array(e).fill(0).map((g,k)=>({name:e*(a-1)+k+1+"张三",age:"18岁",keyword:t.keyword,address:"浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12"})),total:o}},m=c(),h=()=>{console.log("重置")},b=()=>{console.log("查询")};return(t,e)=>{const a=p("LsqSearchTable"),o=p("LsqModuleBlock");return x(),_(o,{title:"查询表单"},{default:l(()=>[s(a,{searchForm:n.value,"onUpdate:searchForm":e[0]||(e[0]=r=>n.value=r),labelWidth:"120px",columns:u,asyncGetData:y,onReset:h,onSearch:b,ref_key:"acSearchTable",ref:m},{searchForm:l(()=>[s(d(w),{label:"类型",valueKey:"type",filterable:"",clearable:"",placeholder:"选择类型",options:i.typeOptions},null,8,["options"]),s(d(f),{label:"关键字",valueKey:"keyword",type:"text",placeholder:"关键字查询"})]),centerContent:l(()=>[v("中间我自定义的内容，自己增加的，瞎逼逼的")]),_:1},8,["searchForm"])]),_:1})}}};export{N as default};
