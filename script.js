'use strict';

const resizeButton = document.querySelector('.resizeButton');

function createGrid(size) {
    let result = document.createElement('div');
    result.classList.add('grid');
    
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row.appendChild(pixel);
        }
        row.classList.add('row');
        result.appendChild(row);
    }

    result.addEventListener('mouseover', e => {
        e.target.style.background = 'black';
        e.stopPropagation();
    })
    
    return result;
}

resizeButton.addEventListener('click', e => {
    const size = Number.parseInt(prompt('Set the number of pixels per side (max: 100)'));

    if (!size) {
        alert("Invalid input!");
        return;
    }

    if (size < 0) {
        alert("Must be a positive integer!");
        return;
    }

    if (size > 100) {
        alert("Number of pixels per side can't exceed 100!");
        return;
    }

    const oldGrid = document.querySelector('.grid');
    oldGrid.parentElement.replaceChild(createGrid(size), oldGrid);
})

function main() {
    const grid = document.querySelector('.grid');
    grid.parentElement.replaceChild(createGrid(16), grid);
}

main();