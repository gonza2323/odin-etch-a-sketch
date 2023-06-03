'use strict';

const grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    for (let j = 0; j < 16; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        row.appendChild(pixel);
    }
    row.classList.add('row');
    grid.appendChild(row);
}
