
function drawButtons() {
    for (let i = 0; i < 20; i++) {
        const button = document.createElement("div");
        button.classList.add("button");
        button.classList.add("red");
        const num = document.createElement("p");
        num.classList.add("red");
        button.appendChild(num);
        num.innerText = `${i + 1}`;
        document.getElementById("main").appendChild(button);
    }
}

const button = document.getElementsByClassName("button");

function change(evt) {
    if (!evt.target.matches('.main')) {
        if (evt.target.classList.contains("red")) {
            evt.target.classList.remove("red");
            evt.target.classList.add("green");
        } else {
            evt.target.classList.remove("green");
            evt.target.classList.add("red");
        }
    }
}
document.addEventListener("click", change);

drawButtons();
