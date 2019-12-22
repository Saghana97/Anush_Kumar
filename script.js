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
document.getElementById("li-4").addEventListener("mouseover",function(){
    document.getElementById("hover-4").style.display = "block";
});
document.getElementById("li-4").addEventListener("mouseleave",function(){
    document.getElementById("hover-4").style.display = "none";
});
//way button toggle
document.getElementById("oneway-click").addEventListener("click",function(){
    document.getElementById("oneway-click").classList.remove("flight-booking-li-1");
    document.getElementById("oneway-click").classList.add("flight-booking-li");
    document.getElementById("twoway-click").classList.remove("flight-booking-li");
    document.getElementById("twoway-click").classList.add("flight-booking-li-1");
    document.getElementById("multicity-click").classList.remove("flight-booking-li-1");
    document.getElementById("multicity-click").classList.add("flight-booking-li-1");


    document.getElementById("oneway-click-span").classList.remove("flight-booking-span-1");
    document.getElementById("oneway-click-span").classList.add("flight-booking-span");
    document.getElementById("twoway-click-span").classList.remove("flight-booking-span");
    document.getElementById("twoway-click-span").classList.add("flight-booking-span-1");
    document.getElementById("multicity-click-span").classList.remove("flight-booking-span");
    document.getElementById("multicity-click-span").classList.add("flight-booking-span-1");
});
document.getElementById("twoway-click").addEventListener("click",function(){
    document.getElementById("oneway-click").classList.remove("flight-booking-li");
    document.getElementById("oneway-click").classList.add("flight-booking-li-1");
    document.getElementById("twoway-click").classList.remove("flight-booking-li-1");
    document.getElementById("twoway-click").classList.add("flight-booking-li");
    document.getElementById("multicity-click").classList.remove("flight-booking-li");
    document.getElementById("multicity-click").classList.add("flight-booking-li-1");

    document.getElementById("oneway-click-span").classList.remove("flight-booking-span");
    document.getElementById("oneway-click-span").classList.add("flight-booking-span-1");
    document.getElementById("twoway-click-span").classList.remove("flight-booking-span-1");
    document.getElementById("twoway-click-span").classList.add("flight-booking-span");
    document.getElementById("multicity-click-span").classList.remove("flight-booking-span");
    document.getElementById("multicity-click-span").classList.add("flight-booking-span-1");
});
document.getElementById("multicity-click").addEventListener("click",function(){
    document.getElementById("oneway-click").classList.remove("flight-booking-li");
    document.getElementById("oneway-click").classList.add("flight-booking-li-1");
    document.getElementById("twoway-click").classList.remove("flight-booking-li");
    document.getElementById("twoway-click").classList.add("flight-booking-li-1");
    document.getElementById("multicity-click").classList.remove("flight-booking-li-1");
    document.getElementById("multicity-click").classList.add("flight-booking-li");   

    document.getElementById("oneway-click-span").classList.remove("flight-booking-span");
    document.getElementById("oneway-click-span").classList.add("flight-booking-span-1");
    document.getElementById("twoway-click-span").classList.remove("flight-booking-span");
    document.getElementById("twoway-click-span").classList.add("flight-booking-span-1");
    document.getElementById("multicity-click-span").classList.remove("flight-booking-span-1");
    document.getElementById("multicity-click-span").classList.add("flight-booking-span"); 
});

//fare button toggle
document.getElementById("regular-fare-btn").addEventListener("click",function(){
    document.getElementById("regular-fare-btn").classList.add("fare-content-li");
    document.getElementById("regular-fare-btn").classList.remove("fare-content-li-1");

    document.getElementById("student-fare-btn").classList.remove("fare-content-li");
    document.getElementById("student-fare-btn").classList.add("fare-content-li-1");
});
document.getElementById("student-fare-btn").addEventListener("click",function(){
    document.getElementById("student-fare-btn").classList.remove("fare-content-li-1");
    document.getElementById("student-fare-btn").classList.add("fare-content-li");

    document.getElementById("regular-fare-btn").classList.remove("fare-content-li-1");
    document.getElementById("regular-fare-btn").classList.add("fare-content-li-1");
});

//more hover
document.getElementById("more-hover-btn").addEventListener("mouseover",function(){
    document.getElementById("more-hover").style.zIndex="11";
})
document.getElementById("more-hover").addEventListener("mouseleave",function(){
    document.getElementById("more-hover").style.zIndex="-1";
})