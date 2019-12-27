var firebaseConfig = {
    apiKey: "AIzaSyDmvSh1pgF7smAg5rgVKeCljZ_SbwENAyU",
    authDomain: "nykaa-db.firebaseapp.com",
    databaseURL: "https://nykaa-db.firebaseio.com",
    projectId: "nykaa-db",
    storageBucket: "nykaa-db.appspot.com",
    messagingSenderId: "1066727922905",
    appId: "1:1066727922905:web:b2bbe6631b83fe650ab2c8",
    measurementId: "G-ZK4QWPSN8J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database().ref();



//
var details = {
    "Product":0,
    "Mrp Sales":1,
    "Subtotal sales":2,
    "Units sold":3,
    "Avg sales price":4,
    "No of orders":5,
    "Avg order val":6,
};

//retrive the data
var table = document.getElementById("table");

database.on("value",function(data){
    var y = data.val();
    for(let init in y){
        let nest_data = y[init];
        var curr_row = table.rows.length;
        var row = table.insertRow(curr_row);

        for(let j in details){
            row.insertCell(details[j]).innerHTML = nest_data[j];
        }

        var td = document.createElement("td");
        var i1 = document.createElement("i");
        i1.setAttribute("onclick","edit_row("+(curr_row)+")");
        i1.setAttribute("class","fa fa-pencil");
        td.appendChild(i1);
        var i2 = document.createElement("i");
        i2.setAttribute("onclick","delete_row("+curr_row+")");
        i2.setAttribute("class","fa fa-trash");
        td.appendChild(i2);
        row.insertCell(7).innerHTML =td.innerHTML;
    }    
});

//insert at firebase
document.getElementById("ins-btn").addEventListener("click",function(){
    document.getElementById("plus-img").style.transform = "rotate(360deg)";
    document.getElementById("add-btn").style.display = "block";
    document.getElementById("edit-add-btn").style.display = "none";
    document.getElementById("modal-box").style.display = "block";
    document.getElementById("main").style.overflow = "hidden";
});
var data_1;
database.on("value",function(data){
    data_1 = data.val().length-1;
    console.log(data_1)
})
document.getElementById("add-btn").addEventListener("click",function(){
    
    database.child(data_1+1).set({
        "Product": document.getElementById("input1").value,
        "Mrp Sales": document.getElementById("input2").value,
        "Subtotal sales": document.getElementById("input3").value,
        "Units sold": document.getElementById("input4").value,
        "Avg sales price": document.getElementById("input5").value,
        "No of orders": document.getElementById("input6").value,
        "Avg order val": document.getElementById("input7").value,
    })
});

document.getElementById("close-btn").addEventListener("click",function(){
    document.getElementById("modal-box").style.display = "none";
    document.getElementById("main").style.overflow = "auto";
});