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
/**************************/