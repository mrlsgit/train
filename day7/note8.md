### <center>第八天</center>
1. **移动端尺寸单位**
    1. `em`  相对自己的`font-size`的像素单位
       1. 浏览器默认字体大小为16px，而`font-`具有继承性
       2. 因此`em`可以不是固定值
    2. `rem` 相对于`<html>`标签的`font-size`（`root em`）
    3. 可以使用js 读取屏幕宽度，然后根据宽度计算出对应的尺寸并设置根元素的font-size
    ```
      const oHtml = document.getElementsByTaName('html')[0]
      cons width= oHtml.clientWidth; //获取html页面的可视化区域宽度
      oHtml.style.fontSize=12*(width/320) + "px";
    ```
          1. 界面一打开就会运行，但是不会主动重复运行
    4. vw 视口宽度(viewport width) 所有的设备宽度都看成100vw;
    5. vh 视口高度(viewport height) 同上
    6. `min-width` 设置最小宽度，小于之后会出现左右滚动条
    7. `max-width` 设置最大宽度，大于则不会放大
---
1. `<meta>` 设置元信息
2. `<script>` 标签引入js
3. 宽高 背景色 边框 定位
---
1. 主题
   1. 模仿 多功能 元素丰富性要求高
   2. 自立主题
      + 自己定义网页
      + 。。。页面设计 功能设计 界面设计能力
2. 首页
3. 专门介绍的页面
4. 不用全部写，只需要写特征页面
---
1. html文件
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>第七天作业</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container">
        <div class="header">
              <div class="left">
                  <a href="#" class="logo"></a>
                  <a href="#" class="search"></a>
              </div>
              <div class="right">
                  <a href="#" class="open">打开豆瓣app</a>
              </div>
        </div>
        <div class="content">
              <ul class="options">
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
              </ul>
              <div class="pic-area">
                <div class="main-pic"></div>
                <div class="side-pic pic1">
                </div>
                <div class="side-pic pic2">
                </div>
              </div>
        </div>
    </div>
  </body>
</html>

```
2. 同级目录下的style.css
```
*{
  margin:0px;
  padding:0px;
}
body{
  background-color:#f6f6f6;
}
.container{
  width:90vw;
  margin:0 auto;
  max-width: 650px;
  background-color: white;
}
.container .header{
  width:100%;
  max-width: inherit;
  height:3rem;
  background-color: white;
  box-sizing: border-box;
  padding: 10px 30px;
  box-shadow:0 1px 2px rgba(0,0,0,0.08);
}
.header .left{
  float:left;
}
.header .right{
  float:right;
  padding:10px auto;
}
.header .left .logo{
  display:inline-block;
  width: 48px;
  height:22px;
  background-image: url(./douban.png);
  background-repeat: no-repeat;;
  background-size: 100% 100%;
  margin-right:10px;
}
.header .left .search{
  display: inline-block;
  height:18.28571px;
  width:24.57143px;
  background-image: url(./search.png);
  background-size: 100% 100%;
}
.header .right .open{
  text-decoration: none;
  font-size:13px;
  display: inline-block;
  width:75px;
  height:13px;
  padding:8px 13px;
  float:right;
  color:white;
  font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
  font-weight: 500;
  background-color:#00b600;
  border-radius: 6px;
  line-height: 1;
}
.content .options{
  width:90%;
  height:100px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  background-color:inherit;
  list-style: none;
}
.options li{
  background-color: #f6f6f6;
  font-size: 15px;
  display: inline-block;
  border-radius: 4px;
  width: calc((100% / 2) - 30px);
  height:20px;
  margin:3px;
  padding:12px;
  float:left;
}
.pic-area{
  width:calc(90% - 6px);
  height:40vw;
  max-height: 294px;
  margin: 20px auto;
}
.main-pic{
  width:70%;
  height:inherit;
  max-height: 294px;
  background-color: #f8b;
  background: url("https://img3.doubanio.com/view/note/l/public/p59792220.jpg") center center / cover no-repeat rgb(250, 250, 250);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  float: left;
}
.side-pic{
  width: calc(30% - 4px);
  height:calc(20vw - 2px);
  max-height: 147px;
  display: inline-block;
  background-color: #f0b;
  background-size:100% 100%;
  background-repeat: no-repeat;
  float: right;
}
.pic-area > .pic1{
  background: url("https://img3.doubanio.com/view/note/l/public/p59945590.jpg") center center / cover no-repeat rgb(250, 250, 250);
}
.pic-area > .pic2{
  margin-top:4px;
  background: url("https://img3.doubanio.com/view/note/l/public/p59945605.jpg") center center / cover no-repeat rgb(250, 250, 250);
}

```
