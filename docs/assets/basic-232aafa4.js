import{n as p,r as s,o as w,c as g,a as t,a0 as l,e as m,b as S,M as b,a6 as L,N as B}from"./index-3af25e0c.js";const F={__name:"basic",setup(q){const i=p({type:"one",state:"two",keyword:"dewdewd"}),y={typeOptions:[{label:"选项1",value:"one"},{label:"选项2",value:"two"}],stateOptions:[{label:"状态1",value:"one"},{label:"状态2",value:"two"}]},v=[{type:"index",title:"序号"},{key:"keyword",title:"关键字"},{key:"name",title:"用户的姓名"},{key:"age",title:"用户的年龄"},{key:"address",title:"用户的地址"}],_=o=>{let e=o.pageSize,r=o.page,c=40;return{data:new Array(e).fill(0).map((u,a)=>({name:e*(r-1)+a+1+"张三",age:"18岁",keyword:o.keyword,address:"浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12"})),total:c}},h=p(),k=()=>{console.log("重置")},x=()=>{console.log("查询")},n=p(!1),f=()=>{n.value=!0};return(o,e)=>{const r=s("LsqButton"),c=s("LsqSearchTable"),d=s("LsqModuleBlock"),u=s("LsqModal");return w(),g("div",null,[t(r,{onClick:f},{default:l(()=>[m("打开弹窗")]),_:1}),t(u,{teleport:"#app",title:"弹窗的标题",width:"1000px",height:"600px",visible:n.value,"onUpdate:visible":e[1]||(e[1]=a=>n.value=a)},{default:l(()=>[S("div",null,[t(d,{title:"查询表单"},{default:l(()=>[t(c,{searchForm:i.value,"onUpdate:searchForm":e[0]||(e[0]=a=>i.value=a),labelWidth:"120px",columns:v,asyncGetData:_,onReset:k,onSearch:x,ref_key:"acSearchTable",ref:h},{searchForm:l(()=>[t(b(L),{label:"类型",valueKey:"type",filterable:"",clearable:"",placeholder:"选择类型",options:y.typeOptions},null,8,["options"]),t(b(B),{label:"关键字",valueKey:"keyword",type:"text",placeholder:"关键字查询"})]),centerContent:l(()=>[m("中间我自定义的内容，自己增加的，瞎逼逼的")]),_:1},8,["searchForm"])]),_:1})])]),_:1},8,["visible"])])}}};export{F as default};