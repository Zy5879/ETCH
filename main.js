const container = document.getElementById('container');

function makeRows (rows, cols) {
    div1.style.setProperty('--grid-rows', rows);
    div1.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        container.appendChild(cell).className = 'grid-item'
    };
};

makeRows(16,16);