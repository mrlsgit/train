/*******全局变量***********/
var nav_index = 0; //导航栏上哪个被激活

/********** 显示时间 *******/
function showTime(){
  var time = document.querySelector(".time");
  window.setInterval(function(){
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var muintes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var tstring;
    tstring =Math.floor( hours/10)+'' + hours%10 + ':' 
    +Math.floor( muintes/10) + '' + muintes%10 + ':'
    +Math.floor( seconds/10) + '' + seconds%10;
    time.innerHTML=tstring;
  },1000);
}
/************导航栏特效**************/
/*
  版本0.3
*/
function navBarEffect(){
	var sectorsLi = document.querySelectorAll(".nav-bar li a");
    var sectorsSpan = document.querySelectorAll(".nav-bar ul li a span");
    /******进入页面时圆圈需要有个特效*******/
    sectorsSpan[nav_index].style.animation ="circle_active_ani  .2s";
	sectorsSpan[nav_index].style.animationFillMode="forwards";
    sectorsSpan[nav_index].style.backgroundColor="#ffd03f";
    /********添加逻辑：*******/
    /*
    * 当鼠标点击了导航栏时，所点的导航栏应该有实心动画，并且没有其他效果
    *
    */
    for(let i = 0; i < sectorsLi.length; i ++){
    	sectorsLi[i].onmouseover=function(){
    		if( i  != nav_index){
               // 执行特效
               sectorsSpan[i].style.animation ="circle_ani  .2s";
               sectorsSpan[i].style.animationFillMode="forwards";
    		}
    	}
    }
    for(let i = 0; i < sectorsLi.length; i ++){
    	sectorsLi[i].onmouseout=function(){
            if(i != nav_index){
                //消除特效 或直接display : none
                //清除特效应该用removeAtrribute("style","box-shadow");
                sectorsSpan[i].removeAttribute("style", "box-shadow");
            }
        }
    }
    for(let i = 0; i < sectorsLi.length; i ++){
        sectorsLi[i].onclick=function(){
            //清除其他所有的特效，并执行当前特效
            for(var j = 0; j < sectorsSpan.length; j ++){
                sectorsSpan[j].removeAttribute("style", "box-shadow");
                sectorsSpan[j].style.backgroundColor="white";
            }
            sectorsSpan[i].style.animation= "circle_active_ani .2s";
            sectorsSpan[i].style.animationFillMode="forwards";
            sectorsSpan[i].style.backgroundColor="#ffd03f";
            nav_index = i; 
        }
    }
}
/*******************光标闪动***************/
function cursorbink(){
  var cursor = document.querySelector(".main-string .cursor");
  window.setInterval(function(){
    // cursor.style.display="none";
    cursor.style.backgroundColor="#4c5ea2";
  }, 500);
  window.setInterval(function(){
    // cursor.style.display="inline-block";
    cursor.style.backgroundColor="white";
  },1000);
}