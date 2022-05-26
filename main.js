const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let sqaure = document.createElement("div");
    container.appendChild(sqaure).className = "grid-item";
  };
  //hoverColor()
};

function randomColor() {
    let letters = '123456789ABCDEF';
    let colors = '#';
    for(let i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;
}

function hoverCells() {
    let items = document.querySelectorAll('.grid-items')
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = `${randomColor()}`;
        });
    });
};

/*function randomColor() {
    let letters = '123456789ABCDEF';
    let colors = '#'
    for(let i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;
}
*/

/*function hoverColor() {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = `${randomColor()}`;
        });
    });
}
*/

makeRows(16,16);