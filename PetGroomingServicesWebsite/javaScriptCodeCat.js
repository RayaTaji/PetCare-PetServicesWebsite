var service1 = document.getElementById("fullgroom");
var service2 = document.getElementById("bathe");
var service3 = document.getElementById("hairtrim");
var service4 = document.getElementById("haircut");
function selectedSize() {
    if (document.getElementById("sizeSmall").checked == true) {
        labelChangeSmall();}

    else if (document.getElementById("sizeMedium").checked == true) {
        labelChangeMedium();
     
    }
    else if (document.getElementById("sizeLarge").checked == true) {
        labelChangeLarge();
   
    }
    else {
        document.write("Please select a size first");
    }
}


function labelChangeSmall() {
    var l1 = document.getElementById("grooming");
    var l2 = document.getElementById("bathing");
    var l3 = document.getElementById("trimming");
    var l4 = document.getElementById("styling");
    /////////////////////////////////////////
    //grooming price from medium to small and from large to small  
    if (l1.innerHTML === "Grooming") {
        l1.innerHTML = "Grooming: 3 JD"
    }
    else if (l1.innerHTML === "Grooming: 5 JD") {
        l1.innerHTML = "Grooming: 3 JD"
    }
    else if (l1.innerHTML === "Grooming: 7 JD") {
        l1.innerHTML = "Grooming: 3 JD"
    }
    /////////////////////////////////////////
    //bathing price from medium to small and from large to small  
    if (l2.innerHTML === "Bathing") {
        l2.innerHTML = "Bathing: 5 JD"
    }
    else if (l2.innerHTML === "Bathing: 7 JD") {
        l2.innerHTML = "Bathing: 5 JD"
    }
    else if (l2.innerHTML === "Bathing: 10 JD") {
        l2.innerHTML = "Bathing: 5 JD"
    }
    /////////////////////////////////////////
    //trimming price from medium to small and from large to small  
    if (l3.innerHTML === "Basic Trimming") {
        l3.innerHTML = "Basic Trimming: 4 JD"
    }
    else if (l3.innerHTML === "Basic Trimming: 6 JD") {
        l3.innerHTML = "Basic Trimming: 4 JD"
    }
    else if (l3.innerHTML === "Basic Trimming: 8 JD") {
        l3.innerHTML = "Basic Trimming: 4 JD"
    }
    /////////////////////////////////////////
    //hairstyle price from medium to small and from large to small 
    if (l4.innerHTML === "Hair Styling") {
        l4.innerHTML = "Hair Styling: 7 JD"
    }
    else if (l4.innerHTML === "Hair Styling: 9 JD") {
        l4.innerHTML = "Hair Styling: 7 JD"
    }

    else if (l4.innerHTML === "Hair Styling: 11 JD") {
        l4.innerHTML = "Hair Styling: 7 JD"
    }
}

function labelChangeMedium() {
    var l1 = document.getElementById("grooming");
    var l2 = document.getElementById("bathing");
    var l3 = document.getElementById("trimming");
    var l4 = document.getElementById("styling");

    /////////////////////////////////////////
    //grooming price from small to medium and from large to medium 
    if (l1.innerHTML === "Grooming") {
        l1.innerHTML = "Grooming: 5 JD"
    }
    else if (l1.innerHTML === "Grooming: 3 JD") {
        l1.innerHTML = "Grooming: 5 JD"
    }
    else if (l1.innerHTML === "Grooming: 7 JD") {
        l1.innerHTML = "Grooming: 5 JD"
    }
    /////////////////////////////////////////
    //bathing price from small to medium and from large to medium 
    if (l2.innerHTML === "Bathing") {
        l2.innerHTML = "Bathing: 7 JD"
    }
    else if (l2.innerHTML === "Bathing: 5 JD") {
        l2.innerHTML = "Bathing: 7 JD"
    }

    else if (l2.innerHTML === "Bathing: 10 JD") {
        l2.innerHTML = "Bathing: 7 JD"
    }
    /////////////////////////////////////////
    //trimming price from small to medium and from large to medium
    if (l3.innerHTML === "Basic Trimming") {
        l3.innerHTML = "Basic Trimming: 6 JD"
    }
    else if (l3.innerHTML === "Basic Trimming: 4 JD") {
        l3.innerHTML = "Basic Trimming: 6 JD"
    }
    else if (l3.innerHTML === "Basic Trimming: 8 JD") {
        l3.innerHTML = "Basic Trimming: 6 JD"
    }
    /////////////////////////////////////////
    //hairstyle price from small to medium and from large to medium 
    if (l4.innerHTML === "Hair Styling") {
        l4.innerHTML = "Hair Styling: 9 JD"
    }
    else if (l4.innerHTML === "Hair Styling: 7 JD") {
        l4.innerHTML = "Hair Styling: 9 JD"
    }
    else if (l4.innerHTML === "Hair Styling: 11 JD") {
        l4.innerHTML = "Hair Styling: 9 JD"
    }

}

function labelChangeLarge() {
    var l1 = document.getElementById("grooming");
    var l2 = document.getElementById("bathing");
    var l3 = document.getElementById("trimming");
    var l4 = document.getElementById("styling");

    /////////////////////////////////////////
    //grooming price from small to large and from medium to large  
    if (l1.innerHTML === "Grooming") {
        l1.innerHTML = "Grooming: 7 JD"
    }
    else if (l1.innerHTML === "Grooming: 3 JD") {
        l1.innerHTML = "Grooming: 7 JD"
    }
    else if (l1.innerHTML === "Grooming: 5 JD") {
        l1.innerHTML = "Grooming: 7 JD"
    }
    /////////////////////////////////////////
    //bathing price from small to large and from medium to large  
    if (l2.innerHTML === "Bathing") {
        l2.innerHTML = "Bathing: 10 JD"
    }
    else if (l2.innerHTML === "Bathing: 5 JD") {
        l2.innerHTML = "Bathing: 10 JD"
    }
    else if (l2.innerHTML === "Bathing: 7 JD") {
        l2.innerHTML = "Bathing: 10 JD"
    }
    ////////////////////////////////////////////////////////
    //trimming price from small to large and from medium to large 
    if (l3.innerHTML === "Basic Trimming") {
        l3.innerHTML = "Basic Trimming: 8 JD"
    }
    else if (l3.innerHTML === "Basic Trimming: 4 JD") {
        l3.innerHTML = "Basic Trimming: 8 JD"
    }
    else if (l3.innerHTML === "Basic Trimming: 6 JD") {
        l3.innerHTML = "Basic Trimming: 8 JD"
    }
    ////////////////////////////////////////////////////////
    //Hair Styling price from small to large and from medium to large 
    if (l4.innerHTML === "Hair Styling") {
        l4.innerHTML = "Hair Styling: 11 JD"
    }
    else if (l4.innerHTML === "Hair Styling: 7 JD") {
        l4.innerHTML = "Hair Styling: 11 JD"
    }
    else if (l4.innerHTML === "Hair Styling: 9 JD") {
        l4.innerHTML = "Hair Styling: 11 JD"
    }

}

//show error message if user clicked next and no radio button is selected 
function errorMessage(){

 if(document.getElementById("nextBtn").clicked==true){
    if (document.getElementById("sizeSmall").checked == false){
        alert("Select a size first");
    }
 }
 
 if(document.getElementById("nextBtn").clicked==true){
    if (document.getElementById("sizeMedium").checked == false){
        alert("Select a size first");
    }
 }

 if(document.getElementById("nextBtn").clicked==true){
    if (document.getElementById("sizeLarge").checked == false){
        alert("Select a size first");
    }
 }

}
