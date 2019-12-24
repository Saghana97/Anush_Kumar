// month toggle
document.getElementById("btn-last").addEventListener("click",function(){
    document.getElementById("btn-last").classList.remove("btn-normal");
    document.getElementById("btn-last").classList.add("btn-active");

    document.getElementById("btn-overall").classList.remove("btn-active");
    document.getElementById("btn-overall").classList.add("btn-normal");
});
document.getElementById("btn-overall").addEventListener("click",function(){
    document.getElementById("btn-overall").classList.remove("btn-normal");
    document.getElementById("btn-overall").classList.add("btn-active");

    document.getElementById("btn-last").classList.remove("btn-active");
    document.getElementById("btn-last").classList.add("btn-normal");
});

//filter toggle
document.getElementById("product-li").addEventListener("click",function(){
    document.getElementById("product-li").classList.add("view-by-filter-ul-li-active");

    document.getElementById("brand-li").classList.remove("view-by-filter-ul-li-active");
    document.getElementById("brand-li").classList.add("view-by-filter-ul-li");

    document.getElementById("month-li").classList.remove("view-by-filter-ul-li-active");
    document.getElementById("month-li").classList.add("view-by-filter-ul-li");
});
document.getElementById("brand-li").addEventListener("click",function(){
    document.getElementById("product-li").classList.remove("view-by-filter-ul-li-active");
    document.getElementById("product-li").classList.add("view-by-filter-ul-li");

    document.getElementById("brand-li").classList.add("view-by-filter-ul-li-active");

    document.getElementById("month-li").classList.remove("view-by-filter-ul-li-active");
    document.getElementById("month-li").classList.add("view-by-filter-ul-li");
});
document.getElementById("month-li").addEventListener("click",function(){
    document.getElementById("product-li").classList.remove("view-by-filter-ul-li-active");
    document.getElementById("product-li").classList.add("view-by-filter-ul-li");

    document.getElementById("brand-li").classList.remove("view-by-filter-ul-li-active");
    document.getElementById("brand-li").classList.add("view-by-filter-ul-li-");

    document.getElementById("month-li").classList.add("view-by-filter-ul-li-active");
});

//filter button
document.getElementById("filter-btn").addEventListener("click",function(){
    document.getElementById("plus-img").classList.add("anim-img-active");
});