1. **`box-sizing`**:
   + `border-box` : 盒子宽度 `width padding` 中交大的值 称‘ie盒子模型’，这样即使内部填充物很大，盒子也不会被撑大
2. 样式的继承性，父类有，子类就有：
   + `text-` 开头，具有继承性
   + `font-` 开头，具有继承性
   + `line-` 开头，具有继承性
1. 浮动：
   + 网页默认文档流：从左往右，从上到下
   + 浮动可以使网页脱离基本文档流
   + 只有左右浮动，使用`float`属性定义
   + 在排列的时候会忽略前面普通的元素
   + **有浮动属性的元素不会占用没有浮动属性元素的位置**
     + **不会覆盖别人，只会被别人覆盖**
   + **没有浮动属性的元素会忽略浮动属性元素的存在**
     + **没有浮动属性的元素只会理会同样没有浮动属性的元素的存在，即：只会理会基本文档流中的**
   + 清除前面的浮动，左浮动右浮动都清除：
      ```
      <div style="clear:both；">
      </div>
      ```
    +  一次浮动完成后
1. 定位：`positon`，必须配合其他属性用：`top left right bottom` 偏移量
   +  `relative`：相对定位：相对自己原来的位置，原来的位置仍然保留
   + `absolut`:相对于有定位属性的父级进行定位，若无父级，就相对于body，也称层模型，

---
1. 去除网页自带`margin padding`:
   ```
   *{
     margin:0;
     padding:0;
   }
   ```
---
###作业
1. index.html:
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>homework ver2</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
        <div class="item-container">
            <p>爱情鲜花推荐</p>
            <div class="item">
                <div class="item-common item-img">
                </div>
                <div class="item-common item-des">
                    <div class="item-des-name">
                        <span class="item-title item-title-font">一往情深</span>
                        <span class="item-title-detail item-title-font">精品玫瑰礼盒：19枝红玫...</span>
                        <div class="item-type">精品优选</div>
                    </div>
                    <div class="item-slogan">经典爆款，年销售冠军！</div>
                    <div class="item-sell">
                        <span class="item-price">￥245<del>￥315</del></span>
                        <div class="shopping-cart"></div>
                        <span class="have-sell">已销售5.2万件</span>
                    </div>
                </div>
            </div>
        </div>
  </body>
</html>
```
2. 同级目录下的style.css文件：
```
body{
  margin:0px;
  background-color: #E9ECF0;
}
.container{
  margin:auto;
  padding:13.7px;
  box-sizing: border-box;
  width:625px;
  height:40rem;
  background-color: white;
}
.container > p{
  font-weight: bold;
  font-size: 26px;
  text-align:center
}
.item-container{
  box-shadow:1px 1px 10px gray;
}
.img-container{
  display: inline-block;
  width:50%;
  height:329px;
}
.img-container > img{
  width: 100%;
  height:100%;
  display: inline-block;
}
.des-container{
  float:right;
  display:inline-block;
  width: 43%;
  height:100%;
  background-color: white;
  clear:both;
  margin-right:17px;
  margin-top:35px;
}
.des-container  a{
  text-decoration: none;
  color:black;
}
.des-title{
  padding-top: 30px;
  font-size: 26px;
}
.des-detail{
  font-size:23px;
}
.des-btn{

  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 10px;
  display:inline-block;
  border:1px solid #FF734C;
  padding: 3px;
  border-radius: 15px;
}
.des-btn span{
  color:#FF734C;
}
.des-em{
  display: block;
  font-size:20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.des-sell{
  font-size:15px;
  margin-bottom: 0px;
  margin-top: 1px;
}
.shopping-cart{
  display:inline-block;
  float:right;
  margin-top:-25px;
}
.price{
  font-size: 30px;
  margin-top: 35px;
  margin-bottom:0px;
}
.price del{
  color:gray;
  font-size: 17px;
  margin:5px;
}

```
