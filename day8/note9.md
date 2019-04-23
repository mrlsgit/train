## <center>第八天</center>
1. js ： 完成界面的交互动作，提升用户体验。有交互性。
2. 建议放到`<\body>`元素的前面
3. 规范：$ _ 英文 数字 
4. 严格区分大小写，变量用`var`声明
   1. 不能用数字开头
   1. 若遇到有`-`的属性如：`background-color`，则用驼峰法：`backgroundColor`
   1. `document`是html自带的元素
   1. `console.log(xxx)` 控制台输出
5. 事件的三要素：
   1. 事件源 
   2. 事件
   3. 事件处理函数
5. 变量类型
   1. `var test = {name:'your name',gender:'your gender'}` 键值对
   1. 每个成员之间用逗号分割
   2. 字符串用`'xxx'` 单引号或`"xxx"` 双引号包括
   3. 数组`[1,2,3]`， 数组里的值可以是任意的数据类型：`[1,2,"aaa", obj,true,yourvar]`
   4. js中只有数字没有整型，浮点型之分
6. 函数：
   1. 声明：
   ```
   function functionName(){
       console.log("hello world");
   }
   ```
   2. js函数，变量可以先调用后声明，调用和声明不分先后--变量提升，
      1. 只提升变量声明，不提升变量赋值$\rightarrow$使用前需要赋值