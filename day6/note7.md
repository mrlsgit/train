##第六天
1.  **选择器优先级**
    1. id选择器
    2. 类选择器
    3. 标签选择器
    4. 通配符选择器
    5. 后代选择器 某个元素的所有后代
       + `div p{xxx}`
    6. 子代选择器 某个元素的子元素
       1. `div > p{xxx}`
    7. 并集选择器 每个标签、id、class之间用`,`连接，类似于或逻辑
    8. 交集选择器 每个标签、id、class之间用空格连接，类似于与逻辑
       1. `.class1 li{xxx} ` 只给同时拥有`.class1`的`<li>`标签设置属性
    9. 伪类选择器：形容元素状态："li:hover" 鼠标移上去的状态
2. **定位**
   1. 相对定位 ：优先级:`top left `较高，取值可以有负值
   2. 决对定位 ：
      1. 相对于有定位属性的父级元素进行定位，并遵守就近原则
      2. 若父级都没有定位属性，则相对于`body`定位
   3. 固定定位`fixed`：相对于窗口定位
      1. `z-index` z序列 ：决定层模型层级关系，需要配合`position`属性使用

3. **隐藏指定元素**
    1. `display:none` 隐藏
    2. 配合`float`可以实现隐藏的选项卡
    3. 要显示的元素要与事件元素构成整体
4. `html`：布局、分块
5. `css`： 样式 选择器
6. `<a>`标签状态：LoVeHAte
    1. `a:link{}` 未访问过的
    2. `a:visited{}s` 交给浏览器判断是否已经访问过
    3. `a:active{}` 点击的那一瞬间
    4. `a:hover{}` 鼠标悬停
```
a:link{}//

a:hover{}
a:active{}
```
---
1. 若为定义宽高，则自动取父级100%的宽高
2. 长得差不多的元素用`ul li`
---
## 作业
1. html文件
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="./practice2.css">
  </head>
  <body>
      <div class="head">
        <div class="head-center">
          <ul class="head-left" style="
          clear:both;">
            <li>在校学生</li>
            <span>|</span>
            <li>教职员工</li>
            <span>|</span>
            <li>校友</li>
            <span>|</span>
            <li>访客</li>
          </ul>
          <ul class="head-right">
            <li><a href="#">旧版入口</a></li>
            <li>网上服务大厅</li>
            <li>OA系统</li>
            <li>English</li>
          </ul>
        </div>
      </div>
      <div class="advertise">
          <div class="adv-center">
              <div class="adv-left"></div>
              <div class="adv-right">
                <input type="text" placeholder="请输入关键字"><div class="search-icon"></div>
              </div>
          </div>
      </div>
      <div class="fonction-sector">
        <div class="center">
          <ul>
            <li><a href="#">网站首页</a></li>
            <li>
                <a href="#">学校概况</a>
                  <div>
                  <ul class="innerul">
                    <li>学校简介</li>
                    <li>标识文化</li>
                    <li>现任领导</li>
                  </ul>
              </div>
            </li>
              <li>
                <a href="#">机构设置</a>
                  <div>
                  <ul class="innerul">
                    <li>学校简介</li>
                    <li>标识文化</li>
                    <li>现任领导</li>
                  </ul>
              </div>
            </li>
              <li>
                <a href="#">师资队伍</a>
                  <div>
                  <ul class="innerul">
                    <li>学校简介</li>
                    <li>标识文化</li>
                    <li>现任领导</li>
                  </ul>
              </div>
            </li>
              <li>
                <a href="#">教育教学</a>
                  <div>
                  <ul class="innerul">
                    <li>学校简介</li>
                    <li>标识文化</li>
                    <li>现任领导</li>
                  </ul>
              </div>
            </li>
              <li>
                <a href="#">科学研究</a>
                  <div>
                  <ul class="innerul">
                    <li>学校简介</li>
                    <li>标识文化</li>
                    <li>现任领导</li>
                  </ul>
              </div>
            </li>
              <li>
                <a href="#">招生就业</a>
                  <div>
                  <ul class="innerul">
                    <li>学校简介</li>
                    <li>标识文化</li>
                    <li>现任领导</li>
                  </ul>
              </div>
            </li>
              <li>
                <a href="#">合作交流</a>
                  <div>
                  <ul class="innerul">
                    <li>学校简介</li>
                    <li>标识文化</li>
                    <li>现任领导</li>
                  </ul>
              </div>
            </li>
                <li>
                  <a href="#">校友工作</a>
                    <div>
                    <ul class="innerul">
                      <li>学校简介</li>
                      <li>标识文化</li>
                      <li>现任领导</li>
                    </ul>
                </div>
            </li>
             <li>
               <a href="#">诚聘英才</a>
                 <div>
                 <ul class="innerul">
                   <li>学校简介</li>
                   <li>标识文化</li>
                   <li>现任领导</li>
                 </ul>
            </div>
            </li>
            <li>
              <a href="#">公共服务</a>
                <div>
                <ul class="innerul">
                  <li>学校简介</li>
                  <li>标识文化</li>
                  <li>现任领导</li>
                </ul>
            </div>
          </li>
          </ul>
        </div>
      </div>
      <div class="main-pic">
          <div class="center-pic">
              <div class="prev"></div>
              <div class="prev next"></div>
              <div class="bottom-bar">
                <div class="prev"></div>
                <div class="next prev"></div>
                <div class="prev month">3月</div>
                <ul class="month-day">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                  <li>10</li>
                  <li>11</li>
                  <li>12</li>
                  <li>13</li>
                  <li>14</li>
                  <li>15</li>
                  <li>16</li>
                  <li>17</li>
                  <li>18</li>
                  <li>19</li>
                  <li>20</li>
                  <li>21</li>
                  <li>22</li>
                  <li>23</li>
                  <li>24</li>
                  <li>25</li>
                  <li>26</li>
                  <li>27</li>
                  <li>28</li>
                  <li>29</li>
                  <li>30</li>
                  <li>31</li>
                </ul>
              </div>
              <div class="pic1">
              </div>
          </div>
      </div>
  </body>
</html>

```
2. 同目录下的style.css文件
```
*{
  margin:0px;
  padding:0px;
}
.head{
  height:44px;
  background-color:#0073b4;
  color:white;
}
.head-center{
  width:69.5rem;
  margin:0 auto;
}
.head-left{
  list-style:none;
  width:210px;
  height:44px;
  float:left;
}
.head-left li:hover, .head-right li:hover{
  text-decoration: underline;
  color: rgb(201, 200, 197);
}
.head-left li , .head-right li,.head-left span{
  float:left;
  line-height:44px;
  font-size:12px;
  text-decoration:none;
  padding:0 2px;
}
.head-right{
  list-style:none;
  float:right;
}
.head-right a{
  color:red;
  text-decoration:none;
}
.advertise{
  height:8.05rem;
  background-color: #ececec;
}
.adv-center{
  width: 69.5rem;
  margin: 0 auto;
  padding-top:15px;
  background-image: url(./imgs/logo_bg.jpg);
  background-size:100% 100%;
  position: relative;
}
.adv-left{
  width:397px;
  height:96px;
  background-image:url(./imgs/logo_1.png);
  background-size:100% 100%;
}
.adv-right{
  width:300px;
  position:absolute;
  height:32px;
  bottom:20px;
  right:0px;
}
.adv-right input{
  height:32px;
  width:243px;
  padding:0px;
  margin:0px;
  padding-left:7px;
  border:1px solid #b8b8b8;
  border-right:none;
}
.search-icon{
  background-image: url(./imgs/main-t-161108_07.jpg);
  display: inline-block;
  height:32px;
  width:37px;
  margin-bottom: -12.5px;
  border:1px solid #b8b8b8;
  border-left:none;
}
.fonction-sector{
  height:57px;
}
.center{
  margin: 0 auto;
  height:inherit;
  width:1100px;
}
.center > ul > li{
  list-style: none;
  float:left;
  height:57;
  padding:0px;
  color:#333;
  text-align:center;
}
.center >  ul  li  a{
  text-decoration:none;
  color:inherit;
  font-size:18px;
  padding: 16.5px 4px;
  display:block;
  width:90px;
  height:inherit;
}
.center >ul > li a:hover{
  background-color: #0073b4;
  color:white;
}
.fonction-sector ul  li:hover .innerul{
  display:block;
  background-color:#0073a4;
}
.innerul{
  position:relative;
  z-index: 1;
  display: none;
}
.innerul li{
  background-color: #1d8eb8;
  padding:12px;
  text-align:center;
  list-style:none;
  color:white;
  font-size:18px;
}
.innerul li:hover{
  background-color:#0073b4;
}
.main-pic {
  width:100%;
  background-color:#ececec;
  height:413px;
  z-index: -1;
}
.center-pic{
  position:relative;
  width:1300px;
  height:inherit;
  margin:0 auto;  
}
.center-pic .pic1{
  margin:0 auto;
  width:inherit;
  height:inherit;
  background-size:100% 100%;
  background-image: url(http://www.swust.edu.cn/_upload/article/images/4d/33/0cd1161a46778cf54fce52ab9298/a4253502-f42c-4ff2-998d-68d348a6fdc6.jpg);
}
.main-pic  .prev{
  height:62px;
  width:57px;
  background-image:url(http://www.swust.edu.cn/_upload/customPortletMode/00/c3/195/images/prev.png);
  background-size:100% 100%;
  position: absolute;
  top : calc(50% - 31px);
  left : 1rem;
}
.center-pic .next{
  transform:rotate(180deg);
  left: calc(100% - 1rem - 57px);
}
.center-pic .bottom-bar{
  width:1150px;
  height:45px;
  position: absolute;
  bottom:0px;
  left: calc((100% - 1150px) / 2);
  background-color:#0073b4;
}
.bottom-bar .prev{
  position: absolute;
  top:0px;
  left:5px;
  margin:0px;
  height:45px;
  width:14px;
  background-size:70% 70%;
  background-position:center;
  background-repeat: no-repeat;
  background-image: url(http://www.swust.edu.cn/_upload/customPortletMode/00/c3/195/images/prev.png);
}
.bottom-bar .next{
  transform:rotate(180deg);
  left: calc(100% - 14px - 3px);
}
.bottom-bar > .month{
  left: 30px;
  line-height: 45px;
  font-weight:bold;
  background-image: none;
  width:50px;
  color:white;
}
.bottom-bar .month-day{
  list-style: none;
  color:gray;
  width:90%;
  height:inherit;  
  line-height: 45px;
  margin-left:10%;
}
.month-day li{
  width: calc( 90% / 31);
  float:left;
  text-align: center;
}
.month-day li:hover{
  color:white;
  background-color:rgb(201, 200, 197);
}
```