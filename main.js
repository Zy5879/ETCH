function makeRows(size) {
    let box = document.querySelector(".box");
    let squares = box.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size}, 1fr)`; 
  //container.style.setProperty('--grid-rows', rows);
 // container.style.setProperty('--grid-cols', cols);

 let amount = size * size
  for (i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = 'white';
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
    if(input <= 100) {
        makeRows(input);
    } else {
       console.log('Limit Exceeded')
    }
};
   