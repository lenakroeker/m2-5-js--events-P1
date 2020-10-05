function drawButtons() {
    for (let i = 0; i < 20; i++) {
        const btndiv = document.createElement("div");
        const btnp = document.createElement("p");
        btnp.innerHTML = `${i + 1}`;
        btndiv.classList.add("btn");
        btndiv.classList.add("green");
        btnp.classList.add("btn");
        btnp.classList.add("red");
        btndiv.style.position = "absolute";
        btndiv.style.left = `${Math.random() * 90 + 1}%`;
        btndiv.style.top = `${Math.random() * 90 + 1}%`;
        btndiv.appendChild(btnp);
        document.getElementById("main").appendChild(btndiv);
    }
}

function change(evt) {
    if (!evt.target.matches(".main")) {
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