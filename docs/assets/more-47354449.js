import{_ as m,r as x,o as p,c as u,a as e,a0 as n}from"./index-3af25e0c.js";const g={class:"example-warp"},f={__name:"more",setup(y){const o=[{key:"name",title:"用户的姓名"},{key:"age",title:"用户的年龄"},{key:"address",title:"用户的地址",ellipsis:!1}],c={pageSize:6},l=[{name:"张三1",age:"18岁",address:"浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12"},{name:"张三2",age:"18岁",address:"浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12"},{name:"张三3",age:"18岁",address:"浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12"},{name:"张三4",age:"18岁",address:"浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12"},{name:"张三5",age:"18岁",address:"浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12"},{name:"张三6",age:"18岁",address:"浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12"},{name:"张三7",age:"18岁",address:"浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12"}],r=[{type:"index",title:"序号"},{key:"name",title:"用户的姓名"},{key:"age",title:"用户的年龄"},{key:"address",title:"用户的地址"}],_=({page:d,pageSize:s})=>{let a=40;return{data:new Array(s).fill(0).map((k,i)=>({name:s*(d-1)+i+1+"张三",age:"18岁",address:"浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12浙江省杭州市滨江区寰诺大厦浙xxx江省杭州市滨江区12"})),total:a}};return(d,s)=>{const a=x("LsqDataTable"),t=x("LsqModuleBlock");return p(),u("div",g,[e(t,{title:"列表不分页"},{default:n(()=>[e(a,{columns:o,data:l,pagination:!1})]),_:1}),e(t,{title:"列表前端分页,每页展示6条"},{default:n(()=>[e(a,{columns:o,data:l,maxHeight:"270px",pagination:c})]),_:1}),e(t,{title:"后端分页查询"},{default:n(()=>[e(a,{columns:r,asyncGetData:_})]),_:1})])}}},h=m(f,[["__scopeId","data-v-fa03726d"]]);export{h as default};