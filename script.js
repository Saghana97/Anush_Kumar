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

//to toggle
input_tag_1 = document.getElementById("input-1");
input_tag_2 = document.getElementById("input-2");
p_tag_1 = document.getElementById("p-1");
p_tag_2 = document.getElementById("p-2");

document.getElementById("toggle").addEventListener("click",function(){
    var temp = p_tag_1.innerHTML;
    p_tag_1.innerHTML = p_tag_2.innerHTML;
    p_tag_2.innerHTML = temp;
    temp = input_tag_1.value;
    input_tag_1.value = input_tag_2.value;
    input_tag_2.value = temp;
});

//retrive date
var cur_date = new Date();
var day_arr = ["Monday","Tuesday","Wednessday","Thursday","Friday","Saturday","Sunday"];
var month_arr = ["Jan'","Feb'","Mar'","Apr'","May","Jun'","Jul'","Aug'","Sep'","Oct'","Nov'","Dec'"];
var s_date = document.getElementById("date");
var s_year = document.getElementById("year");
var s_day = document.getElementById("day");
var s_month = document.getElementById("month");

s_day.innerHTML = day_arr[cur_date.getUTCDay()-1];
s_date.innerHTML = cur_date.getUTCDate();
s_year.innerHTML = cur_date.getUTCFullYear().toString().substr(2);
s_month.innerHTML = month_arr[cur_date.getUTCMonth()];

//hover @ sticky side nav

document.getElementById("li-1").addEventListener("mouseover",function(){
    document.getElementById("hover-1").style.display = "block";
});
document.getElementById("li-1").addEventListener("mouseleave",function(){
    document.getElementById("hover-1").style.display = "none";
});
document.getElementById("li-2").addEventListener("mouseover",function(){
    document.getElementById("hover-2").style.display = "block";
});
document.getElementById("li-2").addEventListener("mouseleave",function(){
    document.getElementById("hover-2").style.display = "none";
});
document.getElementById("li-3").addEventListener("mouseover",function(){
    document.getElementById("hover-3").style.display = "block";
});
document.getElementById("li-3").addEventListener("mouseleave",function(){
    document.getElementById("hover-3").style.display = "none";
});