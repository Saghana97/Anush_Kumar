//side nav hover
$("#side-nav-hover").resize(function(e){
    console.log("hi")
  });

//sidenav -lock 
document.getElementById("sidenav-lock").addEventListener("click",function(){
    document.getElementById("nykaa-img").setAttribute("src","Assets/icon/NykaaLogoSvg.svg");
    document.getElementById("nykaa-img").style.width = "150px";
    document.getElementById("side-nav-hover").style.width = "150px";
    document.getElementById("top-nav").style.marginLeft = "150px";
    document.getElementById("top-nav").style.width = "87%";
    document.getElementById("middle-content").style.marginLeft = "150px";
    document.getElementById("sidenav-lock").style.display = "none";
    document.getElementById("sidenav-lock-close").style.display = "block";
});
document.getElementById("sidenav-lock-close").addEventListener("click",function(){
    document.getElementById("nykaa-img").setAttribute("src","Assets/icon/Nykaa-small.png");
    document.getElementById("nykaa-img").style.width = "40px";
    document.getElementById("side-nav-hover").style.width = "50px";
    document.getElementById("top-nav").style.marginLeft = "50px";
    document.getElementById("top-nav").style.width = "94%";
    document.getElementById("middle-content").style.marginLeft = "50px";
    document.getElementById("sidenav-lock").style.display = "block";
    document.getElementById("sidenav-lock-close").style.display = "none";
})

//notify open
document.getElementById("notify").addEventListener("click",function(){
    var div = document.getElementById("notify-content");
    console.log(div.classList)
    if(div.classList.contains("notification-popup")){
        div.classList.remove("notification-popup");
        div.classList.add("notification-popup-open");
    }
    else{
        div.classList.add("notification-popup");
        div.classList.remove("notification-popup-open");
    }
})

//user open
document.getElementById("user").addEventListener("click",function(){
    var div = document.getElementById("user-content");
    console.log(div.classList)
    if(div.classList.contains("user-popup")){
        div.classList.remove("user-popup");
        div.classList.add("user-popup-open");
    }
    else{
        div.classList.add("user-popup");
        div.classList.remove("user-popup-open");
    }
})

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

//swipe the graph
document.getElementById("graph-btn-right").addEventListener("click",function(){
    document.getElementById("graph-sec").style.transform = "translateX(-550px)";
    document.getElementById("graph-btn-right").style.display = "none";
    document.getElementById("graph-btn-left").style.display = "block";
});
document.getElementById("graph-btn-left").addEventListener("click",function(){
    document.getElementById("graph-sec").style.transform = "translateX(0px)";
    document.getElementById("graph-btn-left").style.display = "none";
    document.getElementById("graph-btn-right").style.display = "block";
});

//insert table rows dynamically
document.getElementById("ins-btn").addEventListener("click",function(){
    document.getElementById("add-btn").style.display = "block";
    document.getElementById("edit-add-btn").style.display = "none";
    document.getElementById("modal-box").style.display = "block";
    document.getElementById("main").style.overflow = "hidden";
});

document.getElementById("add-btn").addEventListener("click",function(){
    var cell_count = 0;
    var table = document.getElementById("table");
    var tot_rows = (table.rows.length)-1;
    var row = table.insertRow(tot_rows+1);

    for(var itr=0;itr<table.rows[0].cells.length-1;itr++){
        row.insertCell(cell_count+itr).innerHTML = document.getElementById("input"+(itr+1)).value;
    }

    var td = document.createElement("td");
    var i1 = document.createElement("i");
    i1.setAttribute("onclick","edit_row("+(tot_rows+1)+")");
    i1.setAttribute("class","fa fa-pencil");
    td.appendChild(i1);
    var i2 = document.createElement("i");
    i2.setAttribute("onclick","delete_row()");
    i2.setAttribute("class","fa fa-trash");
    td.appendChild(i2);
    row.insertCell(cell_count+itr).innerHTML =td.innerHTML;

    document.getElementById("modal-box").style.display = "none";
    document.getElementById("main").style.overflow = "auto";

    for(var itr=0;itr<table.rows[0].cells.length-1;itr++){
        document.getElementById("input"+(itr+1)).value="";
    }
});

function validate(id){
    if(document.getElementById(id).value=""){
        return 1;
    }
    return 0;
}
document.getElementById("close-btn").addEventListener("click",function(){
    document.getElementById("modal-box").style.display = "none";
    document.getElementById("main").style.overflow = "auto";
});

//remove a row
function delete_row(){
    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

//Edit row
var current_row = 0;
function edit_row(row_index){
    document.getElementById("edit-add-btn").style.display = "block";
    document.getElementById("add-btn").style.display = "none";
    document.getElementById("modal-box").style.display = "block";
    document.getElementById("main").style.overflow = "hidden";

    var table = document.getElementById("table");
    for(var itr=0;itr<table.rows[0].cells.length-1;itr++){
        document.getElementById("input"+(itr+1)).value = table.rows[row_index].cells[itr].innerHTML;
    }
    current_row = row_index;
}
document.getElementById("edit-add-btn").addEventListener("click",function(){
    var cell_count = 0;
    var table = document.getElementById("table");
    var tot_rows = (table.rows.length)-1;
    var row = table.insertRow(current_row);

    for(var itr=0;itr<table.rows[0].cells.length-1;itr++){
        row.insertCell(cell_count+itr).innerHTML = document.getElementById("input"+(itr+1)).value;
    }
    var td = document.createElement("td");
    var i1 = document.createElement("i");
    i1.setAttribute("onclick","edit_row("+(tot_rows+1)+")");
    i1.setAttribute("class","fa fa-pencil");
    td.appendChild(i1);
    var i2 = document.createElement("i");
    i2.setAttribute("onclick","delete_row()");
    i2.setAttribute("class","fa fa-trash");
    td.appendChild(i2);
    row.insertCell(cell_count+itr).innerHTML =td.innerHTML;
    table.deleteRow(current_row+1);

    document.getElementById("modal-box").style.display = "none";
    document.getElementById("main").style.overflow = "auto";

    for(var itr=0;itr<table.rows[0].cells.length-1;itr++){
        document.getElementById("input"+(itr+1)).value="";
    }
})

//graph
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Babby Brown', 'MAC Cosmetics'],
        datasets: [{
            label: '',
            data: [46500, 51000],
            backgroundColor: [
                '#0298db',
                '#7fdde9'
            ],
            borderColor: [
                '#0298db',
                '#7fdde9'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 9,
                    fontFamily: 'sans-serif',
                },
                barPercentage: 0.4
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx2 = document.getElementById('myChart2');
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Babby Brown', 'MAC Cosmetics'],
        datasets: [{
            label: '',
            data: [30000, 40000],
            backgroundColor: [
                '#0298db',
                '#7fdde9'
            ],
            borderColor: [
                '#0298db',
                '#7fdde9'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 9,
                    fontFamily: 'sans-serif',
                },
                barPercentage: 0.4
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx3 = document.getElementById('myChart3');
var myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Babby Brown', 'MAC Cosmetics'],
        datasets: [{
            label: '',
            data: [800, 3600],
            backgroundColor: [
                '#0298db',
                '#7fdde9'
            ],
            borderColor: [
                '#0298db',
                '#7fdde9'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 9,
                    fontFamily: 'sans-serif',
                },
                barPercentage: 0.4
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx4 = document.getElementById('myChart4');
var myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Babby Brown', 'MAC Cosmetics'],
        datasets: [{
            label: '',
            data: [250, 450],
            backgroundColor: [
                '#0298db',
                '#7fdde9'
            ],
            borderColor: [
                '#0298db',
                '#7fdde9'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 9,
                    fontFamily: 'sans-serif',
                },
                barPercentage: 0.4
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx5 = document.getElementById('myChart5');
var myChart5 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Babby Brown', 'MAC Cosmetics'],
        datasets: [{
            label: '',
            data: [800, 3600],
            backgroundColor: [
                '#0298db',
                '#7fdde9'
            ],
            borderColor: [
                '#0298db',
                '#7fdde9'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 9,
                    fontFamily: 'sans-serif',
                },
                barPercentage: 0.4
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});