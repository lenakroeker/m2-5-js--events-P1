function drawButtons() {
    for (let i = 0; i < 20; i++) {
        const btndiv = document.createElement("div");
        const btnp = document.createElement("p");
        btnp.innerHTML = `${i + 1}`;
        btndiv.classList.add("button");
        btndiv.appendChild(btnp);
        document.getElementById("main").appendChild(btndiv);
    }
}

function change(evt) {
    if (!evt.target.matches(".main")) {
        evt.target.style.background = "aquamarine";
        evt.target.style.color = "darkGreen";
    }
}


document.addEventListener("click", change);
drawButtons();