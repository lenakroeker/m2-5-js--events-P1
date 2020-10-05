// Exercise 1.2
// ------------
let win = false;
const randNum = getnum();

function getnum() {
    return (Math.floor(Math.random() * (5) + 1)) * 1000;
}


function clicked() {
    win = true;
}

setTimeout(function () {
    if (!win) {
        document.getElementById("result").innerHTML = "You Lose";
        document.getElementById("result").classList.add("lose");

    } else {
        document.getElementById("result").innerHTML = "You Win";
        document.getElementById("result").classList.add("win");
    }
}, randNum);


document.getElementById("time").innerHTML = `${randNum / 1000}`;
document.body.addEventListener("click", clicked);
console.log('exercise 1.2');
