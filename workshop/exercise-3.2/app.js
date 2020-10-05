let sec = 00;
let min = 00;
let ms = 00;
document.getElementById("display").innerHTML = `${(min).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:${(sec).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:${(ms).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`;
let start;

function clicked(evt) {
    if (evt.target.matches("#stop")) {
        clearInterval(start);
    }
    if (evt.target.matches("#reset")) {
        clearInterval(start);
        sec = 0;
        min = 0;
        ms = 0;
        document.getElementById("display").innerHTML = `${(min).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:${(sec).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:${(ms).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`;
    }
    if (evt.target.matches("#start")) {
        start = setInterval(function () {
            if (ms === 10) {
                sec++;
                ms = 0;
            };
            if (sec === 60) {
                min++;
                sec = 0;
            };
            ms += 1
            document.getElementById("display").innerHTML = `${(min).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:${(sec).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:${(ms).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`;
        }, 100);
    }
}










document.addEventListener("click", clicked);