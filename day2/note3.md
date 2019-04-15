#<center>第二天</center>
---
##实体字符：
1. `&+xxx+;`
    + >空格：`&nbsp;`
1. 常见实体字符：
    + `< = &lt;`
    + `> = &gt;`
---
## 表格标签：
1. 常用属性：
   + `border`
   + `celspacing` ：表格数据格子之间的距离
   + `cellpadding`：数据格子填充物，取值为像素单位
   + `style` 在其中写`css`样式:
     + `css`样式结构：样式属性 + 样式值
     + `border-collapse:collapse` ：表格边框线合并 在`<table>`中的`style`中设置，并作用于每一个单元格，使单元格之间没有距离
1. 表格常用标签：
   + 表头： `<th></th>`：每个单元格用一个`th`表示
   + 一行： `<tr></tr>`
   + 一个单元格： `<td></td>`
1. 复杂表格：
   + 无边框：`border="0px"`
   + 单元格背景颜色: `bgcolor="red"` 用于`<td>`中
   + 对齐方式：`align` 作用于`<tr>`上，定义`<td>`的对齐方式，取值如下：
     + `center`
     + `left`
     + `right`
   + 合并单元格
     + `colspan` 合并行单元格
     + `rowspan` 合并列单元格
---
##列表标签：
1. **有序列表(orderlist)：**
   + `<ol></ol>`
   + 子标签：`<tr>`标签就是`<table>`标签的子标签，子标签必须在父标签中才能起作用
   + `<ol>` 的子标签:`<li>`
      + `ol>li{列表项$}*8+tab` 可以快捷创建列表项，其中的`>`表示`ol`的子标签
2. **无序列表（unorderlist）：**
   + `<ul></ul>`
   + 子标签：`<li></li>`
3. 用`type`属性定义序号类型，较少用：
   + `<ol> type` 值取`1 a A i I`
   + `<ul> type` 值取  `disc square circle` ： 实心点 正方形 空心圆
---
##表单标签：
1. `<form>`标签： 所有表单标签必须被`<form>`包裹
2. `<input>`标签
>
```
<form class="" action="index.html" method="post">
  <input type="text" name="" value="">
</form>
```
>效果：
<form>
  <input>
</form>

  + `type` 可选值
    + `password`
    + `submit` 提交按钮 配合`value`可以定义按钮显示文字
    + `reset` 重置表单，回到表单初始状态，不是清空，同样可以配合`value`
    + `radio` 单选框，配合`name`属性可以得到只能选一个（相同`name`的只能选一个）。默认值设置：`checked=""` 或`checked` 不用赋值，哪怕没等号都可以，只要存在就是默认勾选
    + `checkbox` 复选框 同`radio`
    + >`ctrl + a` 右键 $\rightarrow$ 重排代码格式
  + `placeholder` 占位符
  ```
  <input placeholder="请输入六位密码">
  ```
  + `value`默认值
  + `maxlength` 最大输入长度，一般用于密码框
##下拉框
1. `<section>`
1. `<option>`
   + `value`
##文本区域
1. `<textarea>`
   + `rows` 显示的行数
   + `cols` 显示的列数 超出后会显示滚动条
   + 在内容区域设置默认值，在`textarea`内容区域，空格是会被打印下来的。
---
### 1.行内标签 ： 没有自己的高度宽度，不会独自占用一行
1. a span u small...
### 2.块级标签 ： 一些出来就会独自占一行
1. p h div...
hr br 不用分类 语义标签
