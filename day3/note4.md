#<center>第三天</center>
---
1. **块级标签可以自定高宽**
1. **行内标签没有高宽 不会独占一行**
1. **行内块级标签有高宽，不会独占一行**
   1. **`iframe`**
   1. **`<img>`**
   1. **`<input>`**
   1. **`<select>`**
   1. **`<textarea>`**
---
## css基础
1. **行内写样式**
   1. `style="样式属性:样式值"`
   eg:`<a style="width:200px;height:200px;border:2px solid red">aaa</a>`效果：
   <a style="width:200px;height:200px;border:2px solid red">aaa</a>
     + 所以行内标签宽高无效
     + `border:2px solid red` 设置边框宽度为2px 实心 红色，用空格隔开
---
1. 行内样式，使用`style`属性写入样式
   + `<div style="width:100px;height:100px; background-color:red;">`
2. 嵌入样式，在`<style>`标签里面使用css样式，使用`<style>`标签，在`<head>`标签中使用
   + 选择器：`css` 与页面元素相关联
      1. 标签选择器`div{属性：值}`,其中`div`就是标签名
3. 外部样式：`<link>`标签，写在`<head>`中:
   + `<link rel="stylesheet" type="text/css" href="">`，`href`为`css`文件路径
1. 优先级
   1. 行内关联方式
   2. 嵌入样式
   3. 外部样式 `<link>`时谁离元素更近，谁的优先级更高，>就近原则
---
## 常用属性
1. `text-decoration`文本修饰,`text-decoration:underline;`给文本加下划线
1. `color` 文字颜色,`color:red;`
1. `font-size` 文字大小
1. `font-weight` 可以文本加粗
---
## 作业
1. `index.html`文件：
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>homework3</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <!--为标题“勇气”添加样式，把h1标签默认的粗体样式去掉并将字体颜色设置为红色-->


    <h1>勇气</h1>

    <p>三年级时，我还是一个胆小如鼠的小女孩，上课从来不敢回答老师提出的问题，生怕回答错了老师会批评我。就一直没有这个勇气来回答老师提出的问题。学校举办的活动我也没勇气参加。</p>

    <p>到了三年级下学期时，我们班上了一节公开课，老师提出了一个很简单的问题，班里很多同学都举手了，甚至成绩比我差很多的，也举手了，还说着："我来，我来。"我环顾了四周，就我没有举手。</p>

  </body>
</html>

```
2. 同级目录下的`style.css`文件：
```
h1{
  font-weight:normal;
  color:red;
}

```
