function generateCalendar(){

var calendar = document.getElementById("calendar");
calendar.innerHTML="";

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();

var today = date.getDate();

var firstDay = new Date(year,month,1).getDay();
var daysInMonth = new Date(year,month+1,0).getDate();

var studiedDays = JSON.parse(localStorage.getItem("studiedDays")) || [];

for(var i=0;i<firstDay;i++){
var empty=document.createElement("div");
calendar.appendChild(empty);
}

for(var i=1;i<=daysInMonth;i++){

var dayBox=document.createElement("div");
dayBox.classList.add("day");
dayBox.innerText=i;

if(i===today){
dayBox.classList.add("today");
}

if(studiedDays.includes(i)){
dayBox.classList.add("studied");
}

dayBox.addEventListener("click",function(){

var day=parseInt(this.innerText);

var studiedDays=JSON.parse(localStorage.getItem("studiedDays"))||[];

if(studiedDays.includes(day)){
studiedDays=studiedDays.filter(d=>d!==day);
}else{
studiedDays.push(day);
}

localStorage.setItem("studiedDays",JSON.stringify(studiedDays));

generateCalendar();

});

calendar.appendChild(dayBox);

}

}

document.addEventListener("DOMContentLoaded",generateCalendar); 

/*

function generateCalendar() {

    var calendar = document.getElementById("calendar");
    calendar.innerHTML = "";

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();

    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();

    for (var i = 0; i < firstDay; i++) {
        var empty = document.createElement("div");
        calendar.appendChild(empty);
    }

    for (var d = 1; d <= daysInMonth; d++) {

        var day = document.createElement("div");
        day.classList.add("day");
        day.innerText = d;

        if (d === today.getDate()) {
            day.classList.add("today");
        }

        calendar.appendChild(day);
    }
}

generateCalendar();

*/