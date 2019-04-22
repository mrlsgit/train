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
