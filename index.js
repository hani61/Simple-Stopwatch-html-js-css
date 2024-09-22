let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval;
let counter = 0;
let isRunning = false;

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#laps');
    function minut(){
        minutes++;
    }
    function sec(){
        seconds++;
        if (seconds % 60 === 0) {
            seconds = 0;
            minut();
        }
    }
    function milli(){
        milliSeconds++;
        if (milliSeconds % 100 === 0){
            milliSeconds = 0;
            sec();
        }
        document.querySelector('#timer').innerHTML =`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliSeconds).padStart(2, '0')}`;
    }
    function start(){
        isRunning = false;
        if (!isRunning){
            interval= setInterval(milli,10);
        }
    }
    function stop(){
        isRunning = true;
        clearInterval(interval);
        document.querySelector('#timer').innerHTML =`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliSeconds).padStart(2, '0')}`;
    }
    function reset(){
        minutes = 0;
        seconds = 0;
        milliSeconds = 0;
        isRunning = true;
        clearInterval(interval);
        while (list.firstChild){
            list.removeChild(list.lastChild);
        }
        document.querySelector('#timer').innerHTML =`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliSeconds).padStart(2, '0')}`;

    }
    function lap(){
        counter++;
        let li = document.createElement('li');
        li.innerHTML = document.querySelector('#timer').innerHTML;
        list.append(li);
    }
   document.querySelector('#start').onclick = start;
    document.querySelector('#stop').onclick = stop;
    document.querySelector('#reset').onclick = reset;
    document.querySelector('#lap').onclick = lap
})
