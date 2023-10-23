const play = document.getElementById("play");
const reset = document.getElementById("reset");
const pause = document.getElementById("pause");
const n = document.getElementById("n");
let second = 0;
let minute = 0;
let hour = 0;
let interval;

play.addEventListener("click", function () {

    if(!interval){

    
        interval = setInterval(function () {
            second++;
            if (second < 10) {
                n.innerHTML = (hour < 10 ? "0" : "") + hour + ":" + (minute < 10 ? "0" : "") + minute + ":0" + second;
            } else if (second >= 10 && second < 60) {
                n.innerHTML = (hour < 10 ? "0" : "") + hour + ":" + (minute < 10 ? "0" : "") + minute + ":" + second;
            } else if (second === 60) {
                second = 0;
                minute++;
                n.innerHTML = (hour < 10 ? "0" : "") + hour + ":" + (minute < 10 ? "0" : "") + minute + ":0" + second;
                if (minute === 60) {
                    minute = 0;
                    hour++;
                }
            }
        }, 1000);
    }
});

pause.addEventListener("click", function () {
    clearInterval(interval);
});

reset.addEventListener("click", function () {
    clearInterval(interval);
    second = 0;
    minute = 0;
    hour = 0;
    n.innerHTML = "00:00:00";
});
