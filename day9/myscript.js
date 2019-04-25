function animation(){
  var allblock = document.querySelectorAll(".container .line li");
  for(let i = 0; i < allblock.length; i ++){
    
    allblock[i].onclick=function(){
      // allblock[i].style.backgroundColor="red";
      fly(allblock[i]);
    }
  }
}
function fly(a){
  window.setInterval(function(){
    a.top += 1;
    a.left += 1;
  },1000);
}