// Exercise 1.1
// ------------
var pageClicked = false;

function clicked() {
    pageClicked = true;

}

setTimeout(function () {
    if (!pageClicked) {
        document.getElementById("result").classList.add("lose");
        document.getElementById("result").innerHTML = "You Lose";
        console.log(pageClicked);
    }
    else {
        document.getElementById("result").classList.add("win");
        document.getElementById("result").innerHTML = "You Win!";
        console.log(pageClicked);

    }
}, 1000);

document.body.addEventListener("click", clicked);
console.log('exercise 1.1');
