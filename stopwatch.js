let seconds = 0;
let minutes = 0;
let hours = 0;

let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

let stopStatus = 0;

let stopwatch = document.querySelector(".stopwatch");

start.addEventListener("click", () => {
    if(stopStatus!==0){
        clearInterval(stopStatus)
    }
    stopStatus = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0
            minutes++
            if (minutes === 60) {
                minutes = 0
                hours++
            }
        }
    let h = hours < 10 ? ("0" + hours): hours;
    let m = minutes < 10 ? ("0" + minutes) : minutes;
    let s = seconds < 10 ?("0" + seconds) : seconds;
    stopwatch.innerHTML = `${h} : ${m} : ${s}`
    }, 1000)
})

pause.addEventListener("click", () => {
    clearInterval(stopStatus)
})

reset.addEventListener("click", () => {
    clearInterval(stopStatus)
    seconds = 0
    minutes = 0
    hours = 0
    stopwatch.innerHTML = "00 : 00 : 00"
})