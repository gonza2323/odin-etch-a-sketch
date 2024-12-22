"use strict";


const GRID_SIZE = 16;

const grid = document.querySelector(".grid");


createGrid(GRID_SIZE);


function createGrid(size) {
    const row = createRow(size);

    clearGrid();

    for (let i = 0; i < size; i++)
        grid.appendChild(row.cloneNode(true));
}

function createRow(size) {
    const row = document.createElement("div");
    const cell = document.createElement("div");
    row.classList.add("row");
    cell.classList.add("cell");

    for (let i = 0; i < size; i++)
        row.appendChild(cell.cloneNode());

    return row;
}

function clearGrid() {
    while (grid.firstChild) {
        grid.firstChild.remove();
    }
}

grid.addEventListener("mouseover", event => {
    if (event.target.classList.contains("cell")) {
        event.target.classList.add("painted");
    }
});