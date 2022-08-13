let hourEl = document.getElementById("hour");
let minutesEl = document.getElementById("minutes");
let seconEl = document.getElementById("sec");
let ampmEl = document.getElementById("ampm");

function time(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

        
    if(h > 12){
        h = h - 12
        ampm = "PM"
    }

    h = h<10? "0"+h : h;
    m = m<10? "0"+m : m;
    s = s<10? "0"+s : s;  

    hourEl.innerText = h;
    minutesEl.innerText = m;
    seconEl.innerText = s;

    setTimeout(() => {
       time(); 
    }, 1000)
}

time();