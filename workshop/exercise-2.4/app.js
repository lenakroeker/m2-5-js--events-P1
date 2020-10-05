let randNum = Math.floor(Math.random() * 10 + 1);
const totalsec = 5;
let seconds = totalsec;

function startGame(evt) {

    //click start generates gameboard

    if (evt.target.matches("#startbtn")) {
        document.getElementById("startbtn").remove();
        console.log(randNum);
        createButtons(randNum)
        document.getElementById("countdown").innerText = seconds;
        setTimeout(loseState, totalsec * 1000);
        let timer = setInterval(countDown, 1000);
    }

    //switch button colour

    if (!evt.target.matches(".main")) {
        if (evt.target.classList.contains("red")) {
            evt.target.classList.remove("red");
            evt.target.classList.add("green");
            console.log(document.getElementsByClassName("green").length);
            checkForWin(randNum);
        }
    }
}

// create buttons
function createButtons(num) {
    for (let i = 0; i < num; i++) {
        const btndiv = document.createElement("div");
        const btnp = document.createElement("p");
        btndiv.classList.add("btn");
        btnp.classList.add("btn");
        btnp.classList.add("red");
        btnp.innerHTML = `${i + 1}`;
        btndiv.appendChild(btnp);
        btndiv.style.position = "absolute";
        btndiv.style.top = `${(Math.random() * 85) + 2}%`;
        btndiv.style.left = `${(Math.random() * 85) + 2}%`;
        document.getElementById("main").appendChild(btndiv);
    }
}

//win state

function checkForWin(num) {
    if (document.getElementsByClassName("green").length === num) {
        document.removeEventListener("click", startGame);
        const windiv = document.createElement("div");
        const winp = document.createElement("p");
        windiv.classList.add("win");
        winp.innerHTML = "YOU WIN!"
        windiv.appendChild(winp);
        document.getElementById("main").appendChild(windiv);
        document.getElementById("main").style.background = "rgb(247, 255, 128)";
        console.log("win");
        document.getElementById("countdown").remove();
    }
}

//lose state

function loseState() {
    if (document.getElementsByClassName("green").length < randNum) {
        document.removeEventListener("click", startGame);
        const losediv = document.createElement("div");
        const losep = document.createElement("p");
        losediv.classList.add("lose");
        document.getElementById("main").style.background = "rgb(0, 70, 92)";
        losep.innerHTML = "YOU LOSE"
        losediv.appendChild(losep);
        document.getElementById("main").appendChild(losediv);
        document.getElementById("countdown").remove();
    }
}

// countdown clock

function countDown() {
    if (seconds > 0) {
        seconds--;
        document.getElementById("countdown").innerText = seconds;
    } else {
        clearInterval(timer)
    }

};


document.addEventListener("click", startGame);