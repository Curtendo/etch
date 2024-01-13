const mainContainer = document.querySelector(".main-container");
const fragment = new DocumentFragment();

const amount = 16;

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