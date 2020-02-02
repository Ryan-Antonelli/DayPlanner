var data8 = $("#8Col2");
var data9 = $("#9Col2");
var data10 = $("#10Col2");
var data11 = $("#11Col2");
var data12 = $("#12Col2");
var data13 = $("#13Col2");
var data14 = $("#14Col2");
var data15 = $("#15Col2");
var data16 = $("#16Col2");
var data17 = $("#17Col2");

var save8 = $("#8Col3");
var save9 = $("#9Col3");
var save10 = $("#10Col3");
var save11 = $("#11Col3");
var save12 = $("#12Col3");
var save13 = $("#13Col3");
var save14 = $("#14Col3");
var save15 = $("#15Col3");
var save16 = $("#16Col3");
var save17 = $("#17Col3");

var date = $("#date")

// saves data to local storage for each row
$(save8).click( function() {
    event.preventDefault();
    localStorage.setItem("8a", document.getElementById("8Col2").value);   
});

$(save9).click(function() {
    event.preventDefault();
    localStorage.setItem("9a", document.getElementById("9Col2").value);    
});

$(save10).click(function() {
    event.preventDefault();
    localStorage.setItem("10a", document.getElementById("10Col2").value);
       
});

$(save11).click(function() {
    event.preventDefault();
    localStorage.setItem("11a", document.getElementById("11Col2").value);    
});

$(save12).click(function() {
    event.preventDefault();
    localStorage.setItem("12a", document.getElementById("12Col2").value);   
});

$(save13).click(function() {
    event.preventDefault();
    localStorage.setItem("13a", document.getElementById("13Col2").value);    
});

$(save14).click(function() {
    event.preventDefault();
    localStorage.setItem("14a", document.getElementById("14Col2").value);    
});

$(save15).click(function() {
    event.preventDefault();
    localStorage.setItem("15a", document.getElementById("15Col2").value);    
});

$(save16).click(function() {
    event.preventDefault();
    localStorage.setItem("16a", document.getElementById("16Col2").value);   
});

$(save17).click(function() {
    event.preventDefault();
    localStorage.setItem("17a", document.getElementById("17Col2").value);   
});

// retrieves local storage upon page refresh
$(function() {
    for (let i = 0; i < 10; i++) {
                      
        var storageI = localStorage.getItem((i + 8) + "a");
        document.getElementById((i + 8) + "Col2").value = storageI
        
        
    };
});

var m = moment();
var mDate = m.format("MM-DD-YYYY")
var mTime = m.format("HH")
console.log(mTime)
var nowTime = "data" + mTime
console.log(nowTime)
var dataNumbers = []

$(date).text(mDate);

// if time is outside planner range, all fields are red
if ((mTime > 17) || (mTime < 8)) {
    
    $(".entry").css("background-color", "red")

}
    // if time is within planner range, sets fields to gray-past, green-present, purple-future
    else {
        for (let k = 0; k < 10; k++) {
            var numbers = [k + 8]
            if ((k + 8) < mTime) {
                document.getElementById((k + 8) + "Col2").style.backgroundColor = "gray"  
            }
            else if ((k + 8) == mTime) {
                document.getElementById((k + 8) + "Col2").style.backgroundColor = "green"    
            } 
            else if ((k + 8) > mTime) {
                document.getElementById((k + 8) + "Col2").style.backgroundColor = "purple"    
            }
            
        }

    }


