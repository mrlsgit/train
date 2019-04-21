1. **常用css样式：**
   1. `text-decoration:underline;` 添加下划线
   1. `text-align:center;` 水平居中
   1. `line-height:40px;` 行高
   1. `font-style:italic;` 设置斜体
   1. `font-weight:700` 设置字体大小
   1.  `letter-spacing:50px` 字体间距
   1. `display` 属性：
      + **`inline` 行内元素:没有宽高。且即使设置宽高也不起作用，只有在`display:block;`或`line-block`之后设置宽高才起作用**
      + `block` 块级元素：有宽高，要换行
      + `inline-block` 行内块级元素：有宽高，不换行
   1. **垂直居中:`line-height:`**
       + 当取值与行高`height`相等时，单行内容垂直对齐
   1. 背景相关样式:
        1. **`background-image:`**
        2. **`background-size:` 可以设置背景图片完全展示（小方块里放大图片时用）**
        1. `background-repeat:` （大方块里放小图片时用）
        1. `background-position:` 改变图片位置
           + `center` 图片居中对齐
    1. 通用属性：
       1. `id`
       1. `class`
       1. `style`
       1. `title`
1. **盒子模型三要素：**
   1. `内容宽高`
   1. `内外边距`
   1. `边框线`
     + `border-radius`边框半径

---
###作业
1. 文件1
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>homeword ver1</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
      <div class="container">
        <table>
            <tr>
                <td id="img1">送恋人</td>
                <td id="img2">送长辈</td>
                <td id="img3">送朋友</td>
            </tr>
          </table>
          <table>
            <tr>
                <td id="img4">生日祝福</td>
                <td id="img5">表白求婚</td>
                <td id="img6">开业商务</td>
                <td id="img7">周年纪念</td>
            </tr>
        </table>
      </div>
  </body>
</html>
```
2. 文件2style.css(同级目录)：
```
body{
  background-color: #E9ECF0;
  font-size: 24px;
  font-weight: bold;
}
.container{
  width:70%;
  height:500px;
  margin:auto;
  padding: 0px;
  background-color: white;
}
table{
  text-align: center;
  width: 100%;
  height:50%;
  margin: 8px;
  margin-left: 1px;
}
td{
  border-radius: 8px;
  padding-bottom: 40%;
  background-color: gray;
  background-size:100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
#img1{
  background-image: url(https://img02.hua.com/m/home/img/m_home_use_love.png);
}
#img2{
  background-image: url(https://img02.hua.com/m/home/img/m_home_use_parent.png);
}
#img3{
  background-image: url(https://img02.hua.com/m/home/img/m_home_use_friend.png);
}
#img4{
  background-image: url(https://img02.hua.com/m/home/img/m_home_use_birthday.png);
}
#img5{
  background-image: url(https://img02.hua.com/m/home/img/m_home_use_profess.png);
}
#img6{
  background-image: url(https://img02.hua.com/m/home/img/m_home_use_business.png);
}
#img7{
  background-image: url(https://img02.hua.com/m/home/img/m_home_use_anniversary.png);
}

```
