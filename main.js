function makeRows(size) {
    let box = document.querySelector(".box");
    box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  //container.style.setProperty('--grid-rows', rows);
 // container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < 257; i++) {
    let square = document.createElement("div");
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = `${randomColor()}`
    });
    //square.style.backgroundColor = `${randomColor()}`;
    box.insertAdjacentElement('beforeend',square);
  };
 //hoverCells();
};

function randomColor() {
    let letters = '123456789ABCDEF';
    let colors = '#';
    for(let i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;
}

/*function hoverCells() {
    let items = document.querySelectorAll('.box')
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = `${randomColor()}`;
        });
    });
}
*/

makeRows(16);

function newSize(input) {
    makeRows(input);
}