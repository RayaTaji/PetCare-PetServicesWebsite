var service1 = document.getElementById("fullgroom");
var service2 = document.getElementById("bathe");
var service3 = document.getElementById("hairtrim");
var service4 = document.getElementById("haircut");

function selectedSize() {
    if (document.getElementById("sizeSmall").checked == true) {
        labelChangeSmall();
    }

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
        l1.innerHTML = "Grooming: 6 JD"
    }
    else if (l1.innerHTML === "Grooming: 8 JD") {
        l1.innerHTML = "Grooming: 6 JD"
    }
    else if (l1.innerHTML === "Grooming: 10 JD") {
        l1.innerHTML = "Grooming: 6 JD"
    }
    /////////////////////////////////////////
    //bathing price from medium to small and from large to small  
    if (l2.innerHTML === "Bathing") {
        l2.innerHTML = "Bathing: 10 JD"
    }
    else if (l2.innerHTML === "Bathing: 15 JD") {
        l2.innerHTML = "Bathing: 10 JD"
    }
    else if (l2.innerHTML === "Bathing: 20 JD") {
        l2.innerHTML = "Bathing: 10 JD"
    }
    /////////////////////////////////////////
    //trimming price from medium to small and from large to small  
    if (l3.innerHTML === "Basic Trimming") {
        l3.innerHTML = "Basic Trimming: 10 JD"
    }
    else if (l3.innerHTML === "Basic Trimming: 15 JD") {
        l3.innerHTML = "Basic Trimming: 10 JD"
    }
    else if (l3.innerHTML === "Basic Trimming: 20 JD") {
        l3.innerHTML = "Basic Trimming: 10 JD"
    }
    /////////////////////////////////////////
    //hairstyle price from medium to small and from large to small 
    if (l4.innerHTML === "Hair Styling") {
        l4.innerHTML = "Hair Styling: 15 JD"
    }
    else if (l4.innerHTML === "Hair Styling: 20 JD") {
        l4.innerHTML = "Hair Styling: 15 JD"
    }

    else if (l4.innerHTML === "Hair Styling: 25 JD") {
        l4.innerHTML = "Hair Styling: 15 JD"
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
        l1.innerHTML = "Grooming: 8 JD"
    }
    else if (l1.innerHTML === "Grooming: 6 JD") {
        l1.innerHTML = "Grooming: 8 JD"
    }
    else if (l1.innerHTML === "Grooming: 10 JD") {
        l1.innerHTML = "Grooming: 8 JD"
    }
    /////////////////////////////////////////
    //bathing price from small to medium and from large to medium 
    if (l2.innerHTML === "Bathing") {
        l2.innerHTML = "Bathing: 15 JD"
    }
    else if (l2.innerHTML === "Bathing: 10 JD") {
        l2.innerHTML = "Bathing: 15 JD"
    }

    else if (l2.innerHTML === "Bathing: 20 JD") {
        l2.innerHTML = "Bathing: 15 JD"
    }
    /////////////////////////////////////////
    //trimming price from small to medium and from large to medium
    if (l3.innerHTML === "Basic Trimming") {
        l3.innerHTML = "Basic Trimming: 15 JD"
    }
    else if (l3.innerHTML === "Basic Trimming: 10 JD") {
        l3.innerHTML = "Basic Trimming: 15 JD"
    }
    else if (l3.innerHTML === "Basic Trimming: 20 JD") {
        l3.innerHTML = "Basic Trimming: 15 JD"
    }
    /////////////////////////////////////////
    //hairstyle price from small to medium and from large to medium 
    if (l4.innerHTML === "Hair Styling") {
        l4.innerHTML = "Hair Styling: 20 JD"
    }
    else if (l4.innerHTML === "Hair Styling: 15 JD") {
        l4.innerHTML = "Hair Styling: 20 JD"
    }
    else if (l4.innerHTML === "Hair Styling: 25 JD") {
        l4.innerHTML = "Hair Styling: 20 JD"
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
        l1.innerHTML = "Grooming: 10 JD"
    }
    else if (l1.innerHTML === "Grooming: 6 JD") {
        l1.innerHTML = "Grooming: 10 JD"
    }
    else if (l1.innerHTML === "Grooming: 8 JD") {
        l1.innerHTML = "Grooming: 10 JD"
    }
    /////////////////////////////////////////
    //bathing price from small to large and from medium to large  
    if (l2.innerHTML === "Bathing") {
        l2.innerHTML = "Bathing: 20 JD"
    }
    else if (l2.innerHTML === "Bathing: 10 JD") {
        l2.innerHTML = "Bathing: 20 JD"
    }
    else if (l2.innerHTML === "Bathing: 15 JD") {
        l2.innerHTML = "Bathing: 20 JD"
    }
    ////////////////////////////////////////////////////////
    //trimming price from small to large and from medium to large 
    if (l3.innerHTML === "Basic Trimming") {
        l3.innerHTML = "Basic Trimming: 20 JD"
    }
    else if (l3.innerHTML === "Basic Trimming: 10 JD") {
        l3.innerHTML = "Basic Trimming: 20 JD"
    }
    else if (l3.innerHTML === "Basic Trimming: 15 JD") {
        l3.innerHTML = "Basic Trimming: 20 JD"
    }
    ////////////////////////////////////////////////////////
    //Hair Styling price from small to large and from medium to large 
    if (l4.innerHTML === "Hair Styling") {
        l4.innerHTML = "Hair Styling: 25 JD"
    }
    else if (l4.innerHTML === "Hair Styling: 15 JD") {
        l4.innerHTML = "Hair Styling: 25 JD"
    }
    else if (l4.innerHTML === "Hair Styling: 20 JD") {
        l4.innerHTML = "Hair Styling: 25 JD"
    }

}

function enableBTN() {

    if (document.getElementById("sizeSmall").checked == false && document.getElementById("sizeMedium").checked == false && document.getElementById("sizeLarge").checked == false) {
        
        alert("Please select a size first!");
              return false;
              
    }
    else if (document.getElementById("fullGroom").checked == false && document.getElementById("bathe").checked == false && document.getElementById("hairtrim").checked == false && document.getElementById("haircut").checked == false) {
        alert("Select at least one service, please!");
        return false;
        
    }
    else {
        location.replace("catCalender.html");
        return true;
    }


}
