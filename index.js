const hourEl =document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateClock(){//function
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var ampm = "AM";

    if(h > 12){
        h = h-12;
        ampm = "PM";
    }

h = h<10 ?"0"+h:h;
m = m<10 ?"0"+m:m;//ternary operator
s = s<10 ?"0"+s:s;


    hourEl.innerText = h;
    minuteEl.innerText =m;
    secondEl.innerText=s;
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
        updateClock()//function calling after every one second automatically 
        //infanite loop
     } , 1000)
}


updateClock();