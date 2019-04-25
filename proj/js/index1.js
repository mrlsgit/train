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
function navBarEffect(){
  var sectorsLi = document.querySelectorAll(".nav-bar li a");
  var sectorsSpan = document.querySelectorAll(".nav-bar ul li a span");
  for(let i = 0; i < sectorsLi.length; i ++){
    sectorsLi[i].onmouseover=function(){
      if( i != nav_index){
        sectorsSpan[i].style.animation ="circle_ani  .2s";
        sectorsSpan[i].style.animationFillMode="forwards";
      }
    };
    sectorsLi[i].onmouseout=function(){
      if(i != nav_index){
        sectorsSpan[i].style.animation = "none";
        sectorsSpan[i].style.boxShadow="0 0 0 1px white";
      }
    };
    sectorsLi[i].onclick=function(){
      nav_index = i;
      var sectorsSpan = document.querySelectorAll(".nav-bar ul li a span");
      for(var temp = 0;  temp < sectorsSpan.length; temp ++){
        if(i != temp){
          // console.log('akjf;alj');
          // console.log(temp);
          sectorsSpan[temp].style.boxShadow="0 0 0 10px white";
          // sectorsSpan[temp].style.backgroundColor="red";
          // console.log(sectorsSpan[temp]);
        }
      }
      if(i == nav_index){
        sectorsSpan[i].style.backgroundColor="#ffd03f";
        sectorsSpan[i].style.animation ="circle_active_ani  .2s";
        sectorsSpan[i].style.animationFillMode="forwards";
      }
      
      // window.location.reload();
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