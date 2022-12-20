# 滚动表格

滚动表格，滚动表格与滚动列表相似，都是用于自动滚动，但滚动表格有表头，样式排版是一个表格，<span style="color:#EBB21A">同样只有当展示的内容高度大于容器的高度，则会开始自动的从下往上进行滚动。</span>

## 基础用法

基础用法，设置容器高度，传属性 list 数组 和 columns 数组给滚动列表组件。

<ExampleModule fileName="basic"/>

## 更多用法

更多用法，可以通过当前列的 `prop` 作为当前单元格的插槽，插槽有提供 `row` `index` `column`;
同时还可以根据当前的业务场景，传属性控制样式，比如这列的宽度、文字对齐方式、表头文字可以换行等等；

<!-- <ExampleModule fileName="more"/>-->
<PropsRenderDoc />
