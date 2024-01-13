const mainContainer = document.querySelector(".main-container");
const fragment = new DocumentFragment();

let amount = 16;

generateGrid(amount);

function generateGrid(amount) {
    for (let i = 0; i < amount; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < amount; j++) {
            let grid = document.createElement("div");
            grid.classList.add("grid");
            row.appendChild(grid);
        }

        fragment.appendChild(row);
    }
    mainContainer.appendChild(fragment);
}

function randomInt() {
    return Math.floor(Math.random() * 256);
}

function generateRGB() {
    let R = randomInt();
    let G = randomInt();
    let B = randomInt();
    let RGB = "rgb(" + R + ", " + G + ", " + B + ")";
    return RGB;
    console.log(RGB);
}

mainContainer.addEventListener("mouseover", function(e) {
    if (e.target.className === "grid") {
        if (!e.target.classList.contains("grid-changed")) {
            e.target.style.background = generateRGB();
            e.target.classList.add("grid-changed");
        }
    }
})

const promptUser = document.querySelector("button");
promptUser.addEventListener("click", function(e) {
    do {
        amount = prompt("Please enter a number (<100) for grid dimensions.", 16);
    } while (amount > 100 && amount < 1);
    
    mainContainer.replaceChildren();
    generateGrid(amount);
})