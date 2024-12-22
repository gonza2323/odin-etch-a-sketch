"use strict";


const DEFAULT_GRID_SIZE = 16;

const grid = document.querySelector(".grid");
const resetButton = document.querySelector("button");

let currentSize;

createGrid(DEFAULT_GRID_SIZE);


function createGrid(size) {
    const row = createRow(size);

    clearGrid();

    for (let i = 0; i < size; i++)
        grid.appendChild(row.cloneNode(true));

    currentSize = size;
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


function requestSize() {
    let input = prompt("Specify new size (1 - 100)");
    
    while (input !== null) {
        if (input === "")
            return currentSize;

        if (input.toLowerCase().trim() === "default")
            return DEFAULT_GRID_SIZE;

        let size = parseInt(input);

        if (Number.isNaN(size)) {
            input = prompt("Invalid input! Size must be a number between 1 and 100");
            continue;
        }
        if (size <= 0 || size > 100) {
            input = prompt("Size out of range! Size must be between 1 and 100");
            continue;
        }

        return size;
    }

    return null;
}


grid.addEventListener("mouseover", event => {
    if (event.target.classList.contains("cell")) {
        event.target.classList.add("painted");
    }
    event.stopPropagation();
});


resetButton.addEventListener("click", event => {
    const size = requestSize();
    if (size) {
        clearGrid();
        createGrid(size);
    }
    event.stopPropagation();
});
