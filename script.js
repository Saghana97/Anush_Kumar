// hide the nav bar
var headerItem = document.getElementById("header");
var oldOffset;
document.addEventListener("scroll",function(){
    var newOffset = window.pageYOffset;
    var headerItem = document.getElementById("header");
    //console.log(window.screen.width);
    if(window.screen.width > 414 && window.pageYOffset>105){
        headerItem.style.top = "0px";
    }
    if(window.screen.width > 414 && oldOffset - newOffset >0){
        headerItem.style.top = "-70px";
    }
    oldOffset = newOffset;
});