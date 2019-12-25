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
    i1.setAttribute("onclick","edit_row()");
    i1.setAttribute("class","fa fa-pencil");
    td.appendChild(i1);
    var i2 = document.createElement("i");
    i2.setAttribute("onclick","delete_row()");
    i2.setAttribute("class","fa fa-trash");
    td.appendChild(i2);
    row.insertCell(cell_count+itr).innerHTML =td.innerHTML;

    document.getElementById("modal-box").style.display = "none";
    document.getElementById("main").style.overflow = "auto";

    for(var itr=0;itr<itr<table.rows[0].cells.length-1;itr++){
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
function edit_row(){
    var table = document.getElementById("table");
    var td = event.target.parentNode;
    var data = td.parentNode.innerText;
    var data_arr = data.split("  ");
    console.log(data_arr)
}


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